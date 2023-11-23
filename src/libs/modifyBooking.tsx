export default async function modifyBooking(id:string,token:string,newCheckIn:string,newCheckOut:string) {

  const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      bookingDate: newCheckIn,
      checkoutDate: newCheckOut
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to delete booking");
  }
  return await response.json();

}