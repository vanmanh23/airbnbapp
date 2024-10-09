
import { Globe, DollarSign, Facebook, Twitter, Instagram  } from 'lucide-react'

export default function Footer() {
    const content = [
        {
            title:'Support',
            contents: [
                {       
                    content1: 'Help Center',
                    content2: 'AirCover',
                    content3: 'Anti-discrimination',
                    content4: 'Disability support',
                    content5: 'Cancellation options',
                    content6: 'Report neighborhood concern',
                }
            ]
        },
        {  
            title:'Hosting',
            contents: [
                {
                    content1: 'Airbnb your home',
                    content2: 'AirCover for Hosts',
                    content3: 'Hosting resources',
                    content4: 'Community forum',
                    content5: 'Hosting responsibly',
                    content6: 'Airbnb-friendly apartments',
                }
            ]
        },
        {
            title:'Airbnb',
            contents: [
                {
                    content1: 'Newsroom',
                    content2: 'New features',
                    content3: 'Careers',
                    content4: 'Investors',
                    content5: 'Gift cards',
                    content6: 'Airbnb.org emergency stays',
                }
            ]
        },
    ]
  return (
    <div className='w-11/12 m-auto'>

      <div className=' grid grid-cols-1 md:grid-cols-3'>
        {content.map((item, index) => (
            <div key={index}>
                <h2>{item.title}</h2>
                    {item.contents.map((items, indexs) => (
                        <ul key={indexs} className='text-gray-500 mt-4  hover:cursor-pointer'>
                            <li className='hover:underline hover:text-gray-600'>{items.content2}</li>
                            <li className='hover:underline hover:text-gray-600'>{items.content1}</li>
                            <li className='hover:underline hover:text-gray-600'>{items.content3}</li>
                            <li className='hover:underline hover:text-gray-600'>{items.content4}</li>
                            <li className='hover:underline hover:text-gray-600'>{items.content5}</li>
                            <li className='hover:underline hover:text-gray-600'>{items.content6}</li>
                        </ul>
                    ))}
                    <hr className='w-full inline-block md:hidden'/>
            </div>
        ))}
      </div>
      <div className='relative mt-8 text-sm'>
        <hr className='w-full md:inline-block hidden'/>
        <div className='flex justify-between mt-5 md:flex-row flex-col'>

        <div className='md:absolute md:right-0 mb-4 md:mb-0'>
            <ul className='flex gap-5 items-center'>
                <li className='flex hover:underline hover:cursor-pointer items-center text-base font-medium text-base-color'><Globe size={16} className='mr-2'/>English (US)</li>
                <li className='flex hover:underline hover:cursor-pointer items-center text-base font-medium text-base-color'><DollarSign size={16} className='mr-2'/>USD</li>
                <li><div className='md:flex gap-3 items-center flex-row hidden'>
                    <Facebook size={16} />
                    <Twitter size={16}/>
                    <Instagram size={16}/>
                    </div></li>
            </ul>
        </div>

        <div className='flex float-left'>
            <ul className='flex md:flex-row flex-col gap-3'>
                <li className='hover:underline hover:cursor-pointer'>© 2023 Airbnb, Inc.</li>
                
                <div className='flex md:flex-row flex-row gap-3'>
                    <li>
                    <ul className='flex flex-row gap2'>
                        <li className='hover:underline hover:cursor-pointer'>·Terms</li>
                        <li className='hover:underline hover:cursor-pointer'>·Sitemap</li>
                        <li className='hover:underline hover:cursor-pointer'>·Privacy</li>
                    </ul>
                </li>
                <li className='flex flex-row justify-center items-center gap-3 hover:underline hover:cursor-pointer'><p>·Your Privacy Choices</p> <svg width="26" height="12" fill="none"><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff"></rect><path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path><path d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5" stroke="#06F" stroke-linecap="round"></path><path d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5" stroke="#fff" stroke-linecap="round"></path><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#06F"></rect></svg></li>
                </div>
            </ul>
        </div>
        </div>
      </div>
    </div>
  )
}
