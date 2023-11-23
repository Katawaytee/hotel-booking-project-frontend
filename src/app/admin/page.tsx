import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import getAllHotels from "@/libs/getAllHotels"
import AdminCard from "@/components/AdminCard";
import AdminPanel from "@/components/AdminPanel";

export default async function AdminPage() {

  const session = await getServerSession(authOptions);

  const hotels = await getAllHotels();

  return(
    <main className="w-full flex flex-col items-center bg-white space-y-4 pt-2 pb-5">

      <AdminPanel token={session.user.token}/>

      {
        hotels.data.map((hotelItem:Object)=>(

          <AdminCard HotelName={hotelItem.name} token={session.user.token} hid={hotelItem.id}/>

          )
        )
      }

    </main>
  )

}