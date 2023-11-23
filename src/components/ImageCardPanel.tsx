import ImageCard from "./ImageCard"
import Link from "next/link"

export default function ImageCardPanel() {
  return(
    <div className='w-full h-[30vh] flex justify-center items-center space-x-4'>
      <ImageCard imgSrc='/img/chiang.jpg' href='/detail/655eb1cb03a153b7f20a0cf8'/>
      <ImageCard imgSrc='/img/homehotel.jpg' href={'/detail/655eafcc03a153b7f20a0ccd'}/>
      <ImageCard imgSrc='/img/Mood.jpg' href={'/detail/655eb53c03a153b7f20a0d23'}/>
    </div>
  )
}