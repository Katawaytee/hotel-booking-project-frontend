'use client'
import MyButton from "./MyButton"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export default function SearchPanel({hotels,setProvince}:{hotels:Object,setProvince:Function}) {

  const uniqueProvinces = new Set();
  
  return(
    <div className="w-[15vw] h-[20vh] border-2 border-black rounded-md p-6 flex flex-col justify-around">
      <div className='text-xl'>Destination</div>
      {/* <MyButton name="Select destination" onClick={()=>{return;}}/> */}

      <div className="w-full">
          
        <Select onValueChange={(value)=>{setProvince(value)}} defaultValue="any">
          <SelectTrigger className="bg-white border border-black">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent id="role" className="bg-white w-1/2">

          <SelectItem className="hover:bg-slate-100" value="any">Any</SelectItem>

          {
          
            hotels.data
            
            .filter((hotItem: Object) => {
              // Check if the province is not already in the Set
              if (!uniqueProvinces.has(hotItem.province)) {
                // If not, add the province to the Set and return true to include this item
                uniqueProvinces.add(hotItem.province);
                return true;
              }
              // If the province is already in the Set, return false to exclude this item
              return false;
            })
            
            .map((uniqueProvinces: Object)=>(

              <SelectItem className="hover:bg-slate-100" value={uniqueProvinces.province}>{uniqueProvinces.province}</SelectItem>

              )
            )

          }


            {/* <SelectItem className="hover:bg-slate-100" value="user">User</SelectItem>
            <SelectItem className="hover:bg-slate-100" value="admin">Admin</SelectItem> */}


          </SelectContent>
        </Select>

      </div>

    </div>
  )
}