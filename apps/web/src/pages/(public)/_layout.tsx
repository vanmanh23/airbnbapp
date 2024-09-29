import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import debounce from 'lodash.debounce';
// import { VerifyEmailProvider } from '@/utils/VerifyEmailContext';

export default function Component() {
  const [isOneTwelfthScrolled, setIsOneTwelfthScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop >= documentHeight / 12) {
        setIsOneTwelfthScrolled(true);
      } else {
        setIsOneTwelfthScrolled(false);
      }
    }, 100); // Chỉ gọi hàm sau 100ms kể từ lần cuối cùng

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel(); // Hủy bỏ debounce nếu component bị hủy
    };
  }, []);
  
  return (
    <>
      <Header hasSearch={isOneTwelfthScrolled} className="sticky top-0 left-0 px-6 sm:px-10 2xl:px-20 bg-white z-30"/>
      <hr />
      <div className="px-6 py-5 sm:px-10 2xl:px-20 overflow-hidden">
        <Outlet />
      </div>
      <div className='w-full bg-gray-100 py-10 '>
      <Footer />
      </div>
    </>
  )
}