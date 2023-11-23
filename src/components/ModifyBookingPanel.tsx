'use client'
import modifyBooking from "@/libs/modifyBooking";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { DateRange } from "react-day-picker"
import { addDays } from "date-fns"
import DatePicker from "./DatePicker";
import MyButton from "./MyButton";

export default function ModifyBookingPanel({bid,token} : {bid:string,token:string}) {
  
  const router = useRouter();

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2023, 10, 23),
    to: addDays(new Date(2023, 10, 23), 2),
  })

  function toModifyBooking() {
    modifyBooking(bid,token, addDays(date.from,1)?.toJSON().slice(0,10), addDays(date.to,1)?.toJSON().slice(0,10))
    .then(() => {
      router.push('/bookings');
      router.refresh();
    })
    .catch((error) => {
      alert("You can book a hotel only up to 3 nights")
    })
  }
  
  return(
    <div className="w-full bg-slate-100 m-5 p-5 flex flex-col items-center space-y-10 py-10">
      
      <DatePicker date={date} setDate={setDate} />

      <MyButton name="Modify" onClick={toModifyBooking}/>
      
    </div>
  )
}