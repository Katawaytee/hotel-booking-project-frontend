import Image from 'next/image';
import Link from 'next/link';
import InteractiveCard from './InteractiveCard';

export default function HotelCard({HotelName, imgSrc, hid} : {HotelName:string, imgSrc:string, hid:string}) {
  return(
    <Link href={`/detail/${hid}`} className="w-[90%] h-[300px]">
      <InteractiveCard>
        <div className='w-full h-[70%] relative rounded-t-lg'>
          <Image src={imgSrc}
          alt={HotelName}
          fill={true}
          className='object-cover rounded-t-lg'/>
        </div>
        <div className='w-full h-[20%] p-[10px] text-center'>{HotelName}</div>
      </InteractiveCard>
    </Link>
  )
}