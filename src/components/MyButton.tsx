'use client'

export default function MyButton({name,onClick}:{name:string,onClick:Function}) {
  return(
    <button className="font-sans block rounded-md bg-black hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
    onClick={(e)=>onClick()}>
      {name}
    </button>
  )
}