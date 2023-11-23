'use client'
import Link from "next/link";
import Image from 'next/image';

export default function ImageCard({imgSrc, href} : {imgSrc:string,href:string}) {
  
  function onCardMouseAction(event:React.SyntheticEvent) {
    if (event.type == 'mouseover') {
      event.currentTarget.classList.add('scale-110');
    } else {
      event.currentTarget.classList.remove('scale-110');
    }
  }

  return(
    <div className='w-1/4 h-5/6 rounded-lg bg-red-300 relative overflow-hidden'>
      <Link href={href}>
        <Image src={imgSrc}
        alt='Hotel Picture'
        fill
        className='object-cover rounded-lg transition-transform'
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut={(e)=>onCardMouseAction(e)}/>
      </Link>
      {/* <Image src={imgSrc}
        alt='Hotel Picture'
        fill
        className='object-cover rounded-lg transition-transform'
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut={(e)=>onCardMouseAction(e)}/> */}
    </div>
  )
}