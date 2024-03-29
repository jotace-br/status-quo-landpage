import { BenefitCard } from '@/components/BenefitCard';
import { useScrollContext } from '@/contexts/ScrollContext';
import notebookIllustration from '@assets/illustrations/notebook.webp';
import {
  CardsContainer,
  Container,
  IllustrationCardsWrapper,
  TitleSubtitleContainer,
} from './styles';

export const AboutUs = () => {
  const { aboutUsRef } = useScrollContext();
  const cards = [
    {
      title: 'Tailored Learning Experience',
      subtitle:
        'Our courses are crafted to meet your unique needs, providing a personalized and effective learning journey.',
    },
    {
      title: 'Expert Instructors',
      subtitle:
        'Learn from industry professionals and experts who are dedicated to guiding you through practical insights and real-world applications.',
    },
    {
      title: 'Versatile Course Selection',
      subtitle:
        "Choose from a diverse range of courses catering to various interests and skill levels, ensuring there's something valuable for everyone.",
    },
  ];

  return (
    <Container ref={aboutUsRef}>
      <TitleSubtitleContainer>
        <h1>ABOUT US</h1>
        <p>
          At statusQuo, we're more than just courses; we're your gateway to a
          transformative learning experience. Dive into a world where education
          is a catalyst for inspiration, skills are honed with passion, and
          every course is a personalized journey towards unleashing your fullest
          potential. Join us in shaping a future where your aspirations become
          achievements!
        </p>
      </TitleSubtitleContainer>

      <IllustrationCardsWrapper>
        <div className='img-laptop'>
          <img src={notebookIllustration} alt='Notebook Illustration' />
        </div>

        <CardsContainer>
          {cards.map(({ title, subtitle }, index) => (
            <BenefitCard key={index} title={title} subtitle={subtitle} />
          ))}
        </CardsContainer>
      </IllustrationCardsWrapper>
    </Container>
  );
};
