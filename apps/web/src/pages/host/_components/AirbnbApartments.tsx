import user1 from '@/assets/images/nanihost.webp';
import user2 from '@/assets/images/jeffhost.webp';
import user3 from '@/assets/images/buddyhost.webp';
export default function AirbnbApartments() {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
        <div className='text-center'>
            <h2 className='text-4xl font-bold opacity-80'>Need a place where you can host?</h2>
            <h2 className='text-4xl font-bold opacity-80'>Try Airbnb-friendly apartments</h2>
        </div>
        <div className='flex flex-row gap-5 w-10/12'>
            <div className='flex flex-col justify-center items-center text-center'>
                <div className='rounded-2xl'><img src={user1} alt="user 1" className='rounded-2xl'/></div>
                <div>
                    <p className='font-medium text-sm'>Nani</p>
                    <p className='text-base'>Resident & Host Dallas, TX</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
                <div><img src={user2} alt="user 1" className='rounded-2xl'/></div>
                <div>
                    <p className='font-medium text-sm'>Jeff and Amador</p>
                    <p className='text-base'>Residents & Hosts San Diego, CA</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
                <div><img src={user3} alt="user 1" className='rounded-2xl'/></div>
                <div>
                    <p className='font-medium text-sm'>Buddy</p>
                    <p className='text-base'>Resident & Host Denver, CO</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center w-10/12 gap-10'>
            <p className='text-2xl'>We’ve partnered with apartment buildings across the US so you can rent a place to live and host on Airbnb part-time. The typical host earned <span className='font-bold'>$3650/year</span> and hosted 28 nights. *</p>
            <p className='text-sm'>*The typical Host earnings amount represents the median amount of earnings for Hosts in US Airbnb-friendly apartment buildings between Jan1 - Dec 31, 2023, according to internal Airbnb data for revenue earned by Hosts.</p>
            <div className='border font-medium rounded-xl py-2 px-3 border-black'>
                <p className='cursor-pointer'>Explore cities</p>
            </div>
        </div>
    </div>
  )
}
