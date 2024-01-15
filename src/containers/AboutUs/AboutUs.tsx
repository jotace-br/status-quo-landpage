import { BenefitCard } from '@/components/BenefitCard';
import {
  CardsContainer,
  Container,
  IllustrationCardsWrapper,
  TitleSubtitleContainer,
} from './styles';
import notebookIllustration from '@assets/illustrations/notebook.svg';
import { useScrollContext } from '@/contexts/ScrollContext';

export const AboutUs = () => {
  const { aboutUsRef } = useScrollContext();

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
        <img
          className='img-laptop'
          src={notebookIllustration}
          alt='Notebook Illustration'
        />

        <CardsContainer>
          <BenefitCard
            title='Tailored Learning Experience'
            subtitle='Our courses are crafted to meet your unique needs, providing a personalized and effective learning journey.'
          />
          <BenefitCard
            title='Expert Instructors'
            subtitle='Learn from industry professionals and experts who are dedicated to guiding you through practical insights and real-world applications.'
          />
          <BenefitCard
            title='Versatile Course Selection'
            subtitle="Choose from a diverse range of courses catering to various interests and skill levels, ensuring there's something valuable for everyone."
          />
        </CardsContainer>
      </IllustrationCardsWrapper>
    </Container>
  );
};