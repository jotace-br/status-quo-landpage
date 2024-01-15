import { CustomCarousel } from '@/components/CustomCarousel';
import { CategoryCard } from '@components/CategoryCard/CategoryCard';
import { TitleAndSubtitle } from '@components/TitleAndSubtitle';
import {
  CardsContainer,
  MobileContainer,
} from '@containers/PopularCourses/styles';
import { SwiperSlide } from 'swiper/react';
import { Container } from './styles';

export const TopCategories = () => {
  const categories = [
    {
      photo:
        'https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg',
      title: 'Development',
    },
    {
      photo:
        'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg',
      title: 'IT and Software',
    },
    {
      photo:
        'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg',
      title: 'Personal Development',
    },
    {
      photo:
        'https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg',
      title: 'Business',
    },
    {
      photo:
        'https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg',
      title: 'Music',
    },
  ];

  return (
    <Container>
      <TitleAndSubtitle
        title='Top Categories'
        subtitle='Dive into Excellence: Explore Our Top Categories and Elevate Your
        Learning Experience to New Heights!'
      />

      <CardsContainer>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            photo={category.photo}
            title={category.title}
          />
        ))}
      </CardsContainer>

      <MobileContainer>
        <CustomCarousel>
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCard
                key={index}
                photo={category.photo}
                title={category.title}
              />
            </SwiperSlide>
          ))}
        </CustomCarousel>
      </MobileContainer>
    </Container>
  );
};
