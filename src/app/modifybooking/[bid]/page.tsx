import { authOptions } from "../../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import ModifyBookingPanel from "@/components/ModifyBookingPanel";

export default async function ModifyBookingPage({params} : {params: {bid: string}}) {

  const session = await getServerSession(authOptions);

  return(
    <main className="w-full flex flex-col items-center bg-white space-y-4 pt-2 pb-5">

      <div className="text-3xl">Modifying Booking ID: {params.bid}</div>

      <ModifyBookingPanel bid={params.bid} token={session.user.token} />

    </main>
  )
}