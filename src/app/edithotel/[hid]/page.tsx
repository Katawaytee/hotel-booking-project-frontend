import { authOptions } from "../../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import EditHotelPanel from "@/components/EditHotelPanel";

export default async function EditHotelPage({params} : {params: {hid: string}}) {

  const session = await getServerSession(authOptions);

  return(
    <main className="w-full flex flex-col items-center bg-white space-y-4 pt-2 pb-5">

      <div className="text-3xl">Editing Hotel ID: {params.hid}</div>

      <EditHotelPanel hid={params.hid} token={session.user.token}/>

    </main>
  )

}