import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import rangasthalam from '../assets/homepage_photos/rangasthalam.jpeg';
import radheshyam from '../assets/homepage_photos/radheshyam.jpeg';
import kgf2 from '../assets/homepage_photos/kgf2.jpeg';
import RRR from '../assets/homepage_photos/RRR.jpeg';
import ARJUNREDDY from '../assets/homepage_photos/images.jpeg';
const Header = () => {

  const images=[
    rangasthalam,
    radheshyam,
    kgf2,
    RRR,
    ARJUNREDDY,
  ];
  return (
    <div className='relative '>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        style={{ width: '100%', height: '100vh', zIndex: '10' }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `linear-gradient(0deg, rgb(0, 0, 0) 8.2%, transparent 50%),url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            >
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
