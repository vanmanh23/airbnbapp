import image1 from "@/assets/Roomdetail/image1.webp";
import image2 from "@/assets/Roomdetail/image2.jpg";
import image3 from "@/assets/Roomdetail/image3.jpg";
import image4 from "@/assets/Roomdetail/image4.jpg";
import image5 from "@/assets/Roomdetail/image5.jpg";
import image6 from "@/assets/Roomdetail/image6.jpg";
import image7 from "@/assets/Roomdetail/image7.jpg";
import image8 from "@/assets/Roomdetail/image8.jpg";

export default function ShowAllPhotos() {
  const images = [
    {
      imgsrc: image1
    },
    {
      imgsrc: image2
    },
    {
      imgsrc: image3
    },
    {
      imgsrc: image4
    },
    {
      imgsrc: image5
    },
    {
      imgsrc: image6
    },
    {
      imgsrc: image7
    },
    {
      imgsrc: image8
    }   
  ];
  return (
    <div className=' backdrop-filter bg-white w-screen '>

      <div className='w-1/2 m-auto z-30 relative'>
      {
        images.map((item, index) => (
          <div key={index}>
            <img src={item.imgsrc} alt={item.imgsrc} className='w-full'/>
          </div>
        ))
      }

      </div>
    </div>
  )
}
