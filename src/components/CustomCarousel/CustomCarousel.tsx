import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { ReactNode } from 'react';
import './styles.css';

export interface SwiperProps {
  children: ReactNode;
}

export const CustomCarousel = ({ children }: SwiperProps) => {
  return (
    <Swiper
      centeredSlides={true}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      modules={[Autoplay, Keyboard, Pagination]}
      className='mySwiper'
    >
      {children}
    </Swiper>
  );
};
