import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import type { ProjectData } from './Projectspub';

type ProjectCarouselProps = {
  data: ProjectData[];
}


function ProjectCarousel({data}: ProjectCarouselProps) {
  return (
    <div className='w-full h-full px-4'>
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true,
        dynamicBullets: true,
       }}
       autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: { slidesPerView: 1 },   // sm
        768: { slidesPerView: 2 },   // md
        1024: { slidesPerView: 2 },  // lg
        1280: { slidesPerView: 3 },  // xl
      }}
      className='my-10 '
  >

     {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="min-h-[900px] flex flex-col justify-center overflow-y-auto bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl p-4 border-blue-800 border shadow-lg">
          <h5 className=" text-black text-xl mb-6 mt-4 font-serif font-extrabold  ">
            {item.title} <br />
             <span> {item.titlee} </span>
           </h5>
           
           <div className="flex justify-center"><img className='ww-80 h-52 object-contain rounded' src={item.img} />	</div>  	
           
           <p className="text-justify break-normal text-black px-10 md:px-6 mt-6 text-md font-medium leading-loose">
            {item.textc}
            <br />
            {item.textcc}
            <br />
            {item.textcci}
     
           </p>
        <p className="my-9 mx-auto">  
          <a href={item.lien}
         className=" hover:bg-blue-900 hover:text-white rounded-full py-3 px-6 border-2 border-blue-800">
         {item.titrelien}</a>
         </p>

          </div>
        </SwiperSlide>
      ))}

    <br />
  </Swiper>
  </div>

  )
}

export default ProjectCarousel