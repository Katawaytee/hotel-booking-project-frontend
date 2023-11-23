'use client'
import editHotel from "@/libs/editHotel";
import { useRouter } from "next/navigation"

export default function EditHotelPanel({hid,token} : {hid:string,token:string}) {
  
  const router = useRouter();
  
  async function toEditHotel(addHotelForm:FormData) {
    const name = addHotelForm.get("name")?.toString()
    const address = addHotelForm.get("address")?.toString()
    const district = addHotelForm.get("district")?.toString()
    const province = addHotelForm.get("province")?.toString()
    const postalcode = addHotelForm.get("postalcode")?.toString()
    const tel = addHotelForm.get("tel")?.toString()
    const picture = addHotelForm.get("picture")?.toString()

    const HotelInfo = [name,address,district,province,postalcode,tel,picture]

    await editHotel(hid,HotelInfo,token);

    setTimeout(()=>{router.push('/admin')},1000)

  }
  
  return(
    <form action={toEditHotel} className="w-full bg-slate-100 m-5 p-5 flex flex-col items-center">
      
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="name">Hotel name</label>
        <input type="text" required id="name" name="name" placeholder="Hotel name"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="address">Address</label>
        <input type="text" required id="address" name="address" placeholder="Address"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="district">District</label>
        <input type="text" required id="district" name="district" placeholder="District"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="province">Province</label>
        <input type="text" required id="province" name="province" placeholder="Province"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="postalcode">Postal code</label>
        <input type="text" required id="postalcode" name="postalcode" placeholder="Postal code"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="tel">Phone Number</label>
        <input type="text" required id="tel" name="tel" placeholder="Phone Number"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      <div className="flex items-center w-1/2 my-2">
        <label className="w-1/4 block text-gray-700 pr-4" htmlFor="picture">Picture</label>
        <input type="text" required id="picture" name="picture" placeholder="URL"
        className="bg-white border-2 border-gray-200 rounded w-full p-2
        text-gray-700 focus:outline-none focus:border-blue-400" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700
      text-white p-2 mt-4 rounded">
        Edit Hotel
      </button>
    </form>
  )
}