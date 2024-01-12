import { Outlet } from 'react-router-dom'
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'

export default function Component() {
  return (
    <div className='flex flex-row'>
        <div>
          <Sidebar toggle={true}/>  
        </div>       
        <div className='flex flex-col'>
          <div>
            <Header />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
    </div>
  )
}
