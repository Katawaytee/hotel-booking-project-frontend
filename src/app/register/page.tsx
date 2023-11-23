"use client"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"
import addUser from "@/libs/addUser"

export default function RegisterPage() {
  
  const router = useRouter();

  let role = "user";

  async function toAddUser(addUserForm:FormData) {
    const name = addUserForm.get("name")?.toString()
    const email = addUserForm.get("email")?.toString()
    const tel = addUserForm.get("tel")?.toString()
    const password = addUserForm.get("password")?.toString()

    const UserInfo = [name,email,tel,role,password]

    await addUser(UserInfo)

    setTimeout(()=>{router.push('/')},1000)

  }
  
  return(
    <main className="w-full flex flex-col items-center bg-white space-y-4 pt-2 pb-5">
      
      <form action={toAddUser} className="w-full bg-slate-100 m-5 p-5 flex flex-col items-center space-y-5 py-10">
        
        <div className="w-1/4 grid gap-2">
          
          <Label htmlFor="name">Name</Label>
          <input type="text" required id="name" name="name" placeholder=""
          className="bg-white border-2 border-gray-200 rounded w-full p-2
          text-gray-700 focus:outline-none focus:border-blue-400 text-base font-[Inter] font-normal" />

        </div>

        <div className="w-1/4 grid gap-2">
          
          <Label htmlFor="email">Email</Label>
          <input type="text" required id="email" name="email" placeholder=""
          className="bg-white border-2 border-gray-200 rounded w-full p-2
          text-gray-700 focus:outline-none focus:border-blue-400 text-base font-[Inter] font-normal" />

        </div>

        <div className="w-1/4 grid gap-2">
          
          <Label htmlFor="tel">Phone number</Label>
          <input type="text" required id="tel" name="tel" placeholder=""
          className="bg-white border-2 border-gray-200 rounded w-full p-2
          text-gray-700 focus:outline-none focus:border-blue-400 text-base font-[Inter] font-normal" />

        </div>
        
        <div className="w-1/4 grid gap-2">
          
          <Label htmlFor="role">Role</Label>
          <Select onValueChange={(value)=>{role=value}} defaultValue="user">
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent id="role" className="bg-white">
              <SelectItem className="hover:bg-slate-100" value="user">User</SelectItem>
              <SelectItem className="hover:bg-slate-100" value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>

        </div>

        <div className="w-1/4 grid gap-2">
          
          <Label htmlFor="password">Password</Label>
          <input type="text" required id="password" name="password" placeholder=""
          className="bg-white border-2 border-gray-200 rounded w-full p-2
          text-gray-700 focus:outline-none focus:border-blue-400 text-base font-[Inter] font-normal" />

        </div>
      
        <button type="submit" className="font-[Inter] block rounded-md bg-black hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
          Register
        </button>

      </form>
          
    </main>
  )
}