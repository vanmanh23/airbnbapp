import airbnbsetup from '@/assets/images/bgYourHome.webp';

export default function AirbnbSetup() {
  return (
    <div className='flex flex-col w-full items-center gap-10'> 
        <div>
            <h2 className='text-3xl font-bold'>Airbnb it easily with Airbnb Setup</h2>
        </div>
        <div>
            <img src={airbnbsetup} alt="airbnb setup image" />
        </div>
        <div className='flex flex-row justify-between gap-5'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-medium'>One-to-one guidance from a Superhost</h3>
                <p className='opacity-80'>We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest—by phone, video call, or chat.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-medium'>An experienced guest for your first booking</h3>
                <p className='opacity-80'>For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-medium'>Specialized support from Airbnb</h3>
                <p className=' opacity-80'>New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.</p>
            </div>
        </div>
    </div>
  )
}
