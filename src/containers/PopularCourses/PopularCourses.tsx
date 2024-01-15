import { CourseCard } from '@/components/CourseCard';
import { CustomCarousel } from '@/components/CustomCarousel';
import { TitleAndSubtitle } from '@/components/TitleAndSubtitle';
import { useScrollContext } from '@/contexts/ScrollContext';
import { ICourse } from '@/types/Course';
import { SwiperSlide } from 'swiper/react';
import { CardsContainer, Container, MobileContainer } from './styles';

export const PopularCourses = () => {
  const { coursesRef } = useScrollContext();

  const courses: ICourse[] = [
    {
      photo:
        'https://i.ibb.co/319GWDg/Complete-Guitar-Lessons-System-Beginner-to-Advanced.jpg',
      title: 'Complete Guitar Lessons System - Beginner to Advanced',
      instructor: 'Erich Andreas',
      rateValue: 4.6,
      totalStudents: '289.071',
      price: 30,
      hasDiscount: false,
    },
    {
      photo:
        'https://i.ibb.co/4FwTw5M/Productivity-and-Time-Management-for-the-Overwhelmed-2.jpg',
      title: 'Productivity and Time Management for the Overwhelmed',
      instructor: 'Josh Paulsen',
      rateValue: 4.5,
      totalStudents: '212.240',
      price: 24,
      hasDiscount: false,
    },
    {
      photo:
        'https://i.ibb.co/jyN59RY/Machine-Learning-A-Z-AI-Python-R-Chat-GPT-Prize.jpg',
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
        'https://i.ibb.co/dfhyxfb/Leonardo-Diffusion-XL-course-illustration-about-javascript-2.jpg',
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
        'https://i.ibb.co/xLfcvsB/Leonardo-Diffusion-XL-course-illustration-about-instagram-0.jpg',
      title: 'Instagram Marketing: Complete Guide To Instagram Growth',
      instructor: 'Benjamin Wilson, Entrepreneur Academy',
      rateValue: 4.4,
      totalStudents: '190.141',
      price: 9.9,
      hasDiscount: true,
      originalPrice: 47.9,
    },
  ];

  return (
    <Container ref={coursesRef}>
      <TitleAndSubtitle
        title='Popular Courses'
        subtitle='Unleash Your Potential: Join Our Popular Courses and Power Up Your
          Knowledge Punch!'
      />

      <CardsContainer>
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            photo={course.photo}
            title={course.title}
            instructor={course.instructor}
            rateValue={course.rateValue}
            totalStudents={course.totalStudents}
            price={course.price}
            hasDiscount={course?.hasDiscount}
            originalPrice={course?.originalPrice}
          />
        ))}
      </CardsContainer>

      <MobileContainer>
        <CustomCarousel>
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
      </MobileContainer>
    </Container>
  );
};
