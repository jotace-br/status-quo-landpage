import { useScrollContext } from '@/contexts/ScrollContext';
import thumbUpIllustration from '@assets/illustrations/first-section-thumbup-man.svg';
import primaryLogo from '@assets/logo/primaryLogo.svg';
import firstUser from '@assets/users/user-one.jpg';
import thirdUser from '@assets/users/user-three.jpg';
import secondUser from '@assets/users/user-two.jpg';
import { Avatar, Rate } from 'antd';
import {
  ActionsContainer,
  Container,
  ExplorePathBtn,
  LeftContent,
  StyledAvatar,
} from './styles';

export const FirstSection = () => {
  const { coursesRef, handleClick } = useScrollContext();

  return (
    <Container>
      <LeftContent>
        <div>
          <h1>Grow up your skills by online courses with</h1>
          <img
            className='logo'
            src={primaryLogo}
            alt='statusQuo'
            width='471px'
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
            <StyledAvatar src={firstUser} />
            <StyledAvatar src={secondUser} />
            <StyledAvatar src={thirdUser} />
          </Avatar.Group>
          <div>
            <Rate className='stars' disabled allowHalf defaultValue={4.5} />
            <p>(10k+ Reviews)</p>
          </div>
        </ActionsContainer>
      </LeftContent>

      <img
        className='img-illustration'
        src={thumbUpIllustration}
        alt='Man aproving the platform after using statusQuo'
      />
    </Container>
  );
};