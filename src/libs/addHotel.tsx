export default async function addHotel(HotelInfo:string[],token:string) {

  const response = await fetch(`http://localhost:5000/api/v1/hotels`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "name": HotelInfo[0],
      "address": HotelInfo[1],
      "district": HotelInfo[2],
      "province": HotelInfo[3],
      "postalcode": HotelInfo[4],
      "tel": HotelInfo[5],
      "picture": HotelInfo[6]
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to add hotel");
  }
  return await response.json();

}