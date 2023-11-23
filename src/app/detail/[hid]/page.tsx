import PhotoPanel from "@/components/PhotoPanel"
import BookingPanel from "@/components/BookingPanel"
import getHotel from "@/libs/getHotel"
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function DetailPage({params} : {params: {hid: string}}) {
  
  const session = await getServerSession(authOptions);

  const hotelDetail = await getHotel(params.hid);

  const hotelImg = [
    hotelDetail.data.picture,
    '/img/tem3.png',
    '/img/tem3.png',
    '/img/tem3.png',
    '/img/tem3.png',
    '/img/tem3.png',
    '/img/tem3.png',
    '/img/tem3.png',
  ]
  
  return(
    <main className="w-full flex flex-col items-center bg-white space-y-4 pt-4">
      <div className="w-[70%]">
        <div className="text-3xl">{hotelDetail.data.name}</div>
        <div className="">{hotelDetail.data.address}, {hotelDetail.data.district}, {hotelDetail.data.province}, {hotelDetail.data.postalcode}</div>
        <div className="">{hotelDetail.data.tel}</div>
      </div>
      <PhotoPanel imgList={hotelImg} />
      
      {
        session?  <BookingPanel hid={params.hid} token={session.user.token}/>
                  :<div className="text-3xl pt-20">Login required</div>                
      }

    </main>
  )
}