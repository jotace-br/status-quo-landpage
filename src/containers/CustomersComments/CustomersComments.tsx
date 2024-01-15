import { CustomCarousel } from '@/components/CustomCarousel';
import { Opinion } from '@/components/Opinion';
import { IOpinion } from '@/types/Opinion';
import { SwiperSlide } from 'swiper/react';
import { Container } from './styles';

export const CustomersComments = () => {
  const opinions: IOpinion[] = [
    {
      photo:
        'https://i.ibb.co/XWgPTvF/410228176-932270294930570-249126081286619479-n.jpg',
      opinion: 'Shape your future with digital mastery on this platform.',
      author: 'Bill Gates',
      role: 'Microsoft',
    },
    {
      photo: 'https://i.ibb.co/W5fK42V/i490761.jpg',
      opinion: 'Turn ideas into wins with this platform.',
      author: 'Steve Jobs',
      role: 'Apple',
    },
    {
      photo:
        'https://i.ibb.co/J3dRzst/6384cf9495e14633f52ff1ee-637e4633f3ef8340cfcefba9-633c3fa160f1d7381545a0e2-Elon-Musk-Royal-Society-c.webp',
      opinion: 'Achieve excellence – a must-use platform.',
      author: 'Elon Musk',
      role: 'Twitter, SpaceX and Tesla',
    },
    {
      photo:
        'https://i.ibb.co/xscRL9h/carreira-mark-zuckerberg-meta-768x512.jpg',
      opinion: 'Nail networking and triumph on this platform.',
      author: 'Mark Zuckerberg',
      role: 'Meta',
    },
    {
      photo: 'https://i.ibb.co/PNQKZYq/1640254632385.webp',
      opinion: 'This platform rocks for success and bold ventures.',
      author: 'Jeff Bezos',
      role: 'Amazon',
    },
    {
      photo:
        'https://i.ibb.co/F6MH9dD/11-mandamentos-de-warren-beffett-para-investir-na-bolsa.jpg',
      opinion: 'Turn wisdom into wealth on this platform.',
      author: 'Warren Buffett',
      role: 'Berkshire Hathaway',
    },
  ];

  return (
    <Container>
      <h1 className='title'>What our customers are saying</h1>
      <CustomCarousel>
        {opinions.map(({ photo, opinion, author, role }, index) => (
          <SwiperSlide key={index}>
            <Opinion
              photo={photo}
              opinion={opinion}
              author={author}
              role={role}
            />
          </SwiperSlide>
        ))}
      </CustomCarousel>
    </Container>
  );
};
