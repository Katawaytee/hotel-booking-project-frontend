export default async function deleteHotel(id:string,token:string) {

  const response = await fetch(`http://localhost:5000/api/v1/hotels/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to delete booking");
  }
  return await response.json();

}