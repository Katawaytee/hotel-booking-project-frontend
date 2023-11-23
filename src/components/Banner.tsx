import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className='block p-1 m-0 w-screen h-[60vh] relative pt-10'>
      <Image src={'/img/cover2.jpg'}
      alt='cover'
      fill={true}
      priority
      objectFit='cover'/>
      {/* <div className='relative -translate-x-2/4 z-20 text-center w-[30%] text-[26px] 
      text-[rgb(34,12,162)] left-2/4 top-[100px] bg-white/80'>
        <h1 className='font-[Kanit] text-5xl font-bold'>ระบบจองวัคซีนกลาง</h1>
        <h3 className='font-[Kanit] text-3xl font-bold text-black'>#กันไว้ดีกว่าแก้</h3>
      </div> */}

      <div className='relative -translate-x-2/4 z-20 text-center w-[30%] left-2/4 '>
        <Link href={'/hotels'}>
          <button className="text-[26px] rounded-md bg-black hover:bg-slate-600 px-3 py-2 text-white shadow-sm">
            Explore Our Hotels
          </button>
        </Link>
      </div>

    </div>
  )
}