import { Outlet } from 'react-router-dom'
import Sidebar from './_components/Sidebar'
import Header from './_components/Header';
import { useState } from 'react';



type Callback = (show: boolean) => void;
export default function Component() {
  const [onclicked, setOnClicked] = useState(true);
  const  callback: Callback  = (show) => {
      setOnClicked(show)

  };
  return (
    <div className='flex flex-row'>
        <div className='md:flex hidden'>
          <Sidebar toggle={onclicked}/>  
        </div>       
        <div className='flex flex-col w-full'>
          <div className=' w-full'>
            <Header callback={callback}/>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
    </div>
  )
}
