'use client'
import MyButton from "./MyButton";
import DatePicker from "./DatePicker";
import { useState } from "react";
import { DateRange } from "react-day-picker"
import { addDays } from "date-fns"
import { useRouter } from "next/navigation";
import bookHotel from "@/libs/bookHotel";

export default function BookingPanel({hid,token}:{hid:string,token:string}) {
  
  const router = useRouter();

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2023, 10, 23),
    to: addDays(new Date(2023, 10, 23), 2),
  })

  return(
    <div className="w-[40%] h-[10vh] rounded-md 
    flex justify-center items-center space-x-5">
      {/* <MyButton name="Pick Check in date" onClick={()=>{return;}}/>
      <MyButton name="Pick Check out date" onClick={()=>{return;}}/> */}
      <DatePicker date={date} setDate={setDate} />
      <MyButton name="Book" onClick={()=>{ 
        bookHotel(hid,token,addDays(date.from,1)?.toJSON().slice(0,10),addDays(date.to,1)?.toJSON().slice(0,10))
        .then(() => {
          router.push('/bookings');
          router.refresh();
        })
        .catch((error) => {
          alert("You can book a hotel only up to 3 nights")
        });
      }}/>
    </div>
  )
}