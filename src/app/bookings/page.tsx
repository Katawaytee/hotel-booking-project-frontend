import BookingCard from "@/components/BookingCard"
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import getAllBookings from "@/libs/getAllBookings";

export default async function BookingsPage() {
  
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const bookings = await getAllBookings(session.user.token);
  
  return(
    <main className="w-full flex flex-col items-center bg-white space-y-4 pt-2 pb-5">

      {
        bookings.data.map((bookingItem:Object)=>(

          <BookingCard HotelName={bookingItem.hotel.name} check_in={bookingItem.bookingDate}
          check_out={bookingItem.checkoutDate} id={bookingItem._id} token={session.user.token} BookerName={bookingItem.user.name}/>

          )
        )
      }

    </main>
  )
}