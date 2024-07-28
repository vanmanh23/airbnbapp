import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'


export default function Component() {
  const [isOneTwelfthScrolled, setIsOneTwelfthScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop >= documentHeight / 12) {
        setIsOneTwelfthScrolled(true);
      } else {
        setIsOneTwelfthScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log("isOneTwelfthScrolled: ", isOneTwelfthScrolled)
  return (
    <div>
      <Header hasSearch={isOneTwelfthScrolled} className="sticky top-0 left-0 px-6 sm:px-10 2xl:px-20 bg-white z-30"/>
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