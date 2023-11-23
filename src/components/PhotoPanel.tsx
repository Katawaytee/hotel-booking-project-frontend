import Image from "next/image"

export default function PhotoPanel({imgList}:{imgList:string[]}) {
  
  const mockData = [
    '/img/cover.jpg',
    '/img/tem3.png',
    '/img/tem3.png',
    '/img/tem3.png',
    '/img/tem3.png',
    '/img/tem3.png',
    '/img/tem3.png',
  ]

  return(
    <div className="w-[70%] h-[40vh] flex flex-row space-x-2">

      <div className="w-2/5 h-full overflow-hidden">
        <Image src={imgList[0]}
          alt={'Hotel photo'}
          width={600}
          height={400}
          className='h-full'/>
      </div>

      
      <div className="w-1/5 h-full space-y-2">
        <div className="h-1/2 overflow-hidden">
          <Image src={imgList[6]}
            alt={'Hotel photo'}
            width={0}
            height={0}
            sizes="100vw"
            className='w-full'/>
        </div>
        <div className="h-1/2 overflow-hidden">
          <Image src={imgList[6]}
            alt={'Hotel photo'}
            width={0}
            height={0}
            sizes="100vw"
            className='w-full'/>
        </div>
      </div>
      <div className="w-1/5 h-full space-y-2">
        <div className="h-1/2 overflow-hidden">
          <Image src={imgList[6]}
            alt={'Hotel photo'}
            width={0}
            height={0}
            sizes="100vw"
            className='w-full'/>
        </div>
        <div className="h-1/2 overflow-hidden">
          <Image src={imgList[6]}
            alt={'Hotel photo'}
            width={0}
            height={0}
            sizes="100vw"
            className='w-full'/>
        </div>
      </div>
      <div className="w-1/5 h-full space-y-2 overflow-hidden">
        <div className="h-1/2 overflow-hidden">
          <Image src={imgList[6]}
            alt={'Hotel photo'}
            width={0}
            height={0}
            sizes="100vw"
            className='w-full'/>
        </div>
        <div className="h-1/2 overflow-hidden">
          <Image src={imgList[6]}
            alt={'Hotel photo'}
            width={0}
            height={0}
            sizes="100vw"
            className='w-full'/>
        </div>
      </div>
    </div>
  )
}