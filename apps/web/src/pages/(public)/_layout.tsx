import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import HeaderRoom from './_components/HeaderRoom';
// import { VerifyEmailProvider } from '@/utils/VerifyEmailContext';

export default function Component() {
  const [isOneTwelfthScrolled, setIsOneTwelfthScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout; // Biến để lưu timeout ID

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const shouldBeScrolled = scrollTop >= documentHeight / 12;

      // Thiết lập độ trễ khi cập nhật trạng thái
      if (shouldBeScrolled !== isOneTwelfthScrolled) {
        clearTimeout(timeoutId); // Xóa timeout cũ
        timeoutId = setTimeout(() => {
          setIsOneTwelfthScrolled(shouldBeScrolled);
        }, 200); // Đặt độ trễ ở đây (200 ms)
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timeoutId); // Hủy timeout nếu component bị hủy
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOneTwelfthScrolled]);

  
  const currentPath = window.location.pathname;
  return (
    <>
     
      {
        currentPath === '/' && <Header hasSearch={isOneTwelfthScrolled} className="sticky top-0 left-0 px-6 sm:px-10 2xl:px-20 bg-white z-30"/>

      }
      {
        currentPath.startsWith('/rooms')  &&  <HeaderRoom className='px-6 sm:px-24 2xl:px-24'/>
      }
      <hr />
      <div className=" py-5 sm:px-24 2xl:px-24 overflow-hidden">
        <Outlet />
      </div>
      <div className='w-full bg-gray-100 py-10 '>
      <Footer />
      </div>
    </>
  )
}