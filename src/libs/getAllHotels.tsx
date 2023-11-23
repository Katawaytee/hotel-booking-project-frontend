export default async function getAllHotels() {
  
  // await new Promise((resolve)=>setTimeout(resolve, 5000))

  const response = await fetch("http://localhost:5000/api/v1/hotels");
  if (!response.ok) {
    throw new Error("Failed to fetch hotels");
  }

  return await response.json();

}