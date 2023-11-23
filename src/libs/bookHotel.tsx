export default async function bookHotel(hid:string,token:string,checkInDate:string,checkOutDate:string) {

  const response = await fetch(`http://localhost:5000/api/v1/hotels/${hid}/bookings`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "bookingDate": checkInDate,
      "checkoutDate": checkOutDate
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to book hotel");
  }
  return await response.json();

}