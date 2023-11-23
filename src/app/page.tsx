import Image from 'next/image'
import Banner from '@/components/Banner'
import ImageCardPanel from '@/components/ImageCardPanel'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Banner/>
      <ImageCardPanel/>
    </main>
  )
}
