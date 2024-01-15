import { CourseCard } from '@/components/CourseCard';
import { CustomCarousel } from '@/components/CustomCarousel';
import { TitleAndSubtitle } from '@/components/TitleAndSubtitle';
import { useScrollContext } from '@/contexts/ScrollContext';
import { ICourse } from '@/types/Course';
import { SwiperSlide } from 'swiper/react';
import { Container } from './styles';

export const PopularCourses = () => {
  const { coursesRef } = useScrollContext();

  const courses: ICourse[] = [
    {
      photo: 'https://i.ibb.co/VVrKfNq/ezgif-com-optiwebp.webp',
      title: 'Complete Guitar Lessons System - Beginner to Advanced',
      instructor: 'Erich Andreas',
      rateValue: 4.6,
      totalStudents: '289.071',
      price: 30,
      hasDiscount: false,
    },
    {
      photo:
        'https://i.ibb.co/CJhjRkm/Productivityand-Time-Managementforthe-Overwhelmed2-ezgif-com-optiwebp.webp',
      title: 'Productivity and Time Management for the Overwhelmed',
      instructor: 'Josh Paulsen',
      rateValue: 4.5,
      totalStudents: '212.240',
      price: 24,
      hasDiscount: false,
    },
    {
      photo:
        'https://i.ibb.co/ZXqbNKY/Machine-Learning-A-ZAIPython-RChat-GPTPrize-ezgif-com-jpg-to-webp-converter.webp',
      title: 'Machine Learning A-Z: AI, Python & R + ChatGPT Prize',
      instructor:
        'Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team',
      rateValue: 4.6,
      totalStudents: '1.019.040',
      price: 19.9,
      hasDiscount: true,
      originalPrice: 40,
    },
    {
      photo:
        'https://i.ibb.co/7G0m3QD/Leonardo-Diffusion-XL-course-illustration-about-javascript-2-ezgif-com-optiwebp.webp',
      title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
      instructor: 'Jonas Schmedtmann',
      rateValue: 4.7,
      totalStudents: '874.734',
      price: 34.9,
      hasDiscount: true,
      originalPrice: 80,
    },
    {
      photo:
        'https://i.ibb.co/Njwr9xt/Leonardo-Diffusion-XL-course-illustration-about-instagram-0-ezgif-com-optiwebp.webp',
      title: 'Instagram Marketing: Complete Guide To Instagram Growth',
      instructor: 'Benjamin Wilson, Entrepreneur Academy',
      rateValue: 4.4,
      totalStudents: '190.141',
      price: 9.9,
      hasDiscount: true,
      originalPrice: 47.9,
    },
  ];

  const breakpoints = {
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1920: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    2560: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  };

  return (
    <Container ref={coursesRef}>
      <TitleAndSubtitle
        title='Popular Courses'
        subtitle='Unleash Your Potential: Join Our Popular Courses and Power Up Your
          Knowledge Punch!'
      />

      <CustomCarousel breakpoints={breakpoints}>
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <CourseCard
              photo={course.photo}
              title={course.title}
              instructor={course.instructor}
              rateValue={course.rateValue}
              totalStudents={course.totalStudents}
              price={course.price}
              hasDiscount={course?.hasDiscount}
              originalPrice={course?.originalPrice}
            />
          </SwiperSlide>
        ))}
      </CustomCarousel>
    </Container>
  );
};
