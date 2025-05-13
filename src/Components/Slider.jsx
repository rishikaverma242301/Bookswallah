import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src="/Images/Slider/one.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/Images/Slider/two.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/Images/Slider/three.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/Images/Slider/four.jpg" alt="" />
      </SwiperSlide>
       <SwiperSlide>
        <img src="/Images/Slider/five.jpg" alt="" />
      </SwiperSlide>
       <SwiperSlide>
        <img src="/Images/Slider/six.jpg" alt="" />
      </SwiperSlide>
       <SwiperSlide>
        <img src="/Images/Slider/seven.jpg" alt="" />
      </SwiperSlide>
       
      
    </Swiper>
  );
};