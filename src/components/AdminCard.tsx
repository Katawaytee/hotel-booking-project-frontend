'use client'
import MyButton from "./MyButton"
import { useRouter } from "next/navigation";
import deleteHotel from "@/libs/deleteHotel";

export default function AdminCard({HotelName, token, hid} : {HotelName:string, token:string, hid:string }) {

  const router = useRouter();
  
  return(
    <div className="w-[30%] h-[20vh] border-2 border-black rounded-md flex flex-row" >
      <div className='w-[80%] text-left mx-5 whitespace-pre-line flex flex-col justify-center'>
        <div className='text-xl'>{HotelName}</div>
        {/* <div className="">{HotelJsonReady.data.address}, {HotelJsonReady.data.district}, {HotelJsonReady.data.province}, {HotelJsonReady.data.postalcode}</div> */}
      </div>
      <div className='w-1/5 mx-5 flex flex-col justify-center space-y-1'>
        <MyButton name="Edit" onClick={()=>{router.push(`edithotel/${hid}`)}}/>
        <MyButton name="Delete" onClick={()=>{deleteHotel(hid,token);setTimeout(()=>{router.refresh();},1000);}}/>
      </div>
    </div>
  )
}