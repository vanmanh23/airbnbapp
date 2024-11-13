import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import HeaderRoom from './_components/HeaderRoom';

export default function Component() {
  const [isBeyondOneFifth, setIsBeyondOneFifth] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0 && scrollY < 80) {
        setIsBeyondOneFifth(false);
      } if(scrollY > 130 && scrollY < 200) {
        setIsBeyondOneFifth(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentPath = window.location.pathname;
  return (
    <>
     
      {
        currentPath === '/' && <Header hasSearch={isBeyondOneFifth} className="sticky top-0 left-0 px-6 sm:px-10 2xl:px-20 bg-white z-30 border-0"/>

      }
      {
        currentPath.startsWith('/rooms')  &&  <HeaderRoom className='px-6 sm:px-24 2xl:px-24'/>
      }
      <hr />
      <div className="py-5 sm:px-24 2xl:px-24 overflow-hidden">
        <Outlet />
      </div>
      <div className='w-full bg-gray-100 py-10 '>
      <Footer />
      </div>
    </>
  )
}