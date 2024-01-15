import { useScrollContext } from '@/contexts/ScrollContext';
import {
  Container,
  LeftContentContainer,
  RightContentContainer,
  RightContentWrapper,
  StartNowBtn,
} from './styles';

export const Labs = () => {
  const { labsRef } = useScrollContext();

  return (
    <Container ref={labsRef}>
      <LeftContentContainer>
        <h1>The statusQuo Labs™ is perfect for you if:</h1>
        <ul>
          <li>You enjoy Enhanced Learning Experience</li>
          <li>Collaborate and Connect</li>
          <li>Immediate Mastery</li>
          <li>Practical Application</li>
        </ul>
      </LeftContentContainer>

      <RightContentContainer>
        <RightContentWrapper>
          <div>
            <h1>Get Started Now & Save</h1>
            <p>
              Unlock the joy of learning on StatusQuo, where diverse courses
              redefine education, offering a gateway to new skills and endless
              possibilities
            </p>
          </div>
          <div>
            <div>
              <p id='only'>ONLY</p>
            </div>
            <div id='currency-wrapper'>
              <span id='currency-sign'>$</span>{' '}
              <span id='currency-value'>99</span>{' '}
              <span id='currency-cents'>95</span>
            </div>
          </div>
        </RightContentWrapper>

        <StartNowBtn>Start Now & Save</StartNowBtn>
      </RightContentContainer>
    </Container>
  );
};
