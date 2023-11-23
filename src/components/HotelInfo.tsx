"use client"
import SearchPanel from "@/components/SearchPanel"
import HotelCard from "@/components/HotelCard"
import { useState } from "react"

export default function HotelInfo({hotels}:{hotels:Object}) {
  
  // let want = "any"
  const [want,setWant] = useState("any");

  return(
    <>
      <div className="w-fit">
        <SearchPanel hotels={hotels} setProvince={setWant}/>
      </div>
  
      <div className="w-full bg-slate-50 px-10 pt-5 pb-7 grid grid-cols-3 gap-y-5">

        {

          (want === "any")? hotels.data.map((filteredHotItem: Object)=>(

            <HotelCard HotelName={filteredHotItem.name} imgSrc={filteredHotItem.picture} hid={filteredHotItem.id}/>

            )
          ):

          hotels.data.filter((hotItem: Object) => hotItem.province === want)
          .map((filteredHotItem: Object)=>(

            <HotelCard HotelName={filteredHotItem.name} imgSrc={filteredHotItem.picture} hid={filteredHotItem.id}/>

            )
          )

        }

      </div>
    </>
  )
}