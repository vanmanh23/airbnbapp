import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'


export default function Component() {

  return (
    <div>
      <Header className="px-6 sm:px-10 2xl:px-20" hasSearch />
      <hr />
      <div className="px-6 py-5 sm:px-10 2xl:px-20">
        <Outlet />
      </div>
      <div className='w-full bg-gray-100 py-10 '>
      <Footer />
      </div>
    </div>
  )
}