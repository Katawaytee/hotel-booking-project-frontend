import getAllHotels from "@/libs/getAllHotels"
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import HotelInfo from "@/components/HotelInfo";

export default async function HotelsPage() {

  const session = await getServerSession(authOptions);

  const hotels = await getAllHotels();

  return(
    <main className="w-[70vw] flex flex-row bg-white pt-2 mx-[15vw]">

      <HotelInfo hotels={hotels}/>

    </main>
  )
}