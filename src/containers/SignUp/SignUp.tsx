import womanIllustration from '@assets/illustrations/woman-holding-statusquo-card.webp';
import {
  Background,
  Container,
  LeftContent,
  RightContent,
  SignUpBtn,
} from './styles';

export const SignUp = () => (
  <Container>
    <Background>
      <LeftContent>
        <h1>
          Take a step forward towards your personal and professional goals with
          statusQuo.
        </h1>
        <p>
          Enroll now to receive personalized recommendations from statusQuo’s
          extensive course catalog.
        </p>
        <SignUpBtn>Sign Up for Free</SignUpBtn>
      </LeftContent>

      <RightContent>
        <img
          src={womanIllustration}
          alt='Mulher segurando o cartão da statusQuo'
        />
      </RightContent>
    </Background>
  </Container>
);
