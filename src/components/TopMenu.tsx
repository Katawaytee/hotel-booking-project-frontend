import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';
import getUserProfile from '@/libs/getUserProfile';

export default async function TopMenu() {
 
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token){
    return(
      <div className='w-full h-[50px] fixed top-0 left-0 right-0 flex flex-row z-50 bg-slate-100'>
        
        <div className='w-1/2 flex flex-row'>
          <Link href="/">
            <Image src={'/img/logo.png'} className='h-full w-auto'
            alt='logo' width={0} height={0} sizes='100vh'/>
          </Link>
        </div>
  
        <div className='w-1/2 flex flex-row-reverse'>
          {
            session?  <>
                      <TopMenuItem className='text-red-600' title='Sign-Out' pageRef='/api/auth/signout'/>
                      <TopMenuItem title='My Booking' pageRef='/bookings'/>
                      </> 
                      :<>
                      <TopMenuItem className='text-blue-600' title='Sign-In' pageRef='/api/auth/signin'/>
                      <TopMenuItem title='Register' pageRef='/register'/>
                      </>                    
          }
        </div>
  
      </div>
    )
  }

  const profile = await getUserProfile(session.user.token);
  return(
    <div className='w-full h-[50px] fixed top-0 left-0 right-0 flex flex-row z-50 bg-slate-100'>
      
      <div className='w-1/2 flex flex-row'>
        <Link href="/">
          <Image src={'/img/logo.png'} className='h-full w-auto'
          alt='logo' width={0} height={0} sizes='100vh'/>
        </Link>
      </div>

      <div className='w-1/2 flex flex-row-reverse'>
        {
          session?  <>
                    <TopMenuItem className='text-red-600' title='Sign-Out' pageRef='/api/auth/signout'/>
                    {
                      (profile.data.role == "admin")?  <>
                        <TopMenuItem title='Manage Bookings' pageRef='/bookings'/>
                        <TopMenuItem title='Manage Hotels' pageRef='/admin'/>
                        </> 
                        :<TopMenuItem title='My Booking' pageRef='/bookings'/> 
                    }
                    </> 
                    :<>
                    <TopMenuItem className='text-blue-600' title='Sign-In' pageRef='/api/auth/signin'/>
                    <TopMenuItem title='Register' pageRef='/register'/>
                    </>                    
        }
      </div>

    </div>
  );
}