import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { ReactNode } from 'react';
import './styles.css';

interface SlideConfig {
  slidesPerView: number;
  spaceBetween: number;
}
export interface SwiperProps {
  breakpoints?: Record<number, SlideConfig>;
  children: ReactNode;
}

export const CustomCarousel: React.FC<SwiperProps> = ({
  breakpoints,
  children,
}) => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      keyboard={{
        enabled: true,
      }}
      breakpoints={breakpoints}
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
