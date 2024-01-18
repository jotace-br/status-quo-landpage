import { useScrollContext } from '@/contexts/ScrollContext';
import thumbUpIllustration from '@assets/illustrations/first-section-thumbup-man.webp';
import primaryLogo from '@assets/logo/primaryLogo.svg';
import firstUser from '@assets/users/user-one.webp';
import thirdUser from '@assets/users/user-three.webp';
import secondUser from '@assets/users/user-two.webp';
import { Avatar, Rate } from 'antd';
import {
  ActionsContainer,
  Container,
  ContentWrapper,
  ExplorePathBtn,
  LeftContent,
  StyledAvatar,
} from './styles';

export const FirstSection = () => {
  const { coursesRef, handleClick } = useScrollContext();

  return (
    <Container>
      <ContentWrapper>
        <LeftContent>
          <div className='title-wrapper'>
            <h1>Grow up your skills by online courses with</h1>
            <img
              className='logo'
              src={primaryLogo}
              alt='statusQuo'
              width='471px'
              height='72.92px'
              loading='lazy'
            />
          </div>
          <ActionsContainer>
            <ExplorePathBtn
              onClick={() => handleClick(coursesRef)}
              type='primary'
            >
              EXPLORE PATH
            </ExplorePathBtn>
            <Avatar.Group>
              <StyledAvatar size={48} src={firstUser} alt='happy man' />
              <StyledAvatar
                size={48}
                src={secondUser}
                alt='happy leonardo dicaprio'
              />
              <StyledAvatar size={48} src={thirdUser} alt='happy woman' />
            </Avatar.Group>
            <div>
              <Rate className='stars' disabled allowHalf defaultValue={4.5} />
              <p>(10k+ Reviews)</p>
            </div>
          </ActionsContainer>
        </LeftContent>

        <div>
          <img
            className='img-illustration'
            src={thumbUpIllustration}
            alt='Man aproving the platform after using statusQuo'
            width='471px'
            height='551px'
            loading='lazy'
          />
        </div>
      </ContentWrapper>
    </Container>
  );
};
