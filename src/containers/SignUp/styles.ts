import { DefaultBtn } from '@/components/Button';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;

  padding-top: 4em;

  @media screen and (max-width: 1024px) {
    padding-top: 0;
    align-items: center;
    text-align: center;
  }
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(p) => p.theme.colors.tertiary};
  background-image: url('/sign-up-bg.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  width: 80%;
  height: 350px;

  margin-top: 2em;
  padding: 0;

  border-radius: 20px;
  aspect-ratio: 2.88;

  @media screen and (max-width: 1024px) {
    width: 90%;
    height: fit-content;
    padding: 2em;
  }
`;

export const LeftContent = styled.div`
  color: ${(p) => p.theme.colors.white};
  gap: 0.5em;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 4em;

  h1 {
    font-family: 'Poppins', sans-serif;
    line-height: 3.875rem;
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    font-weight: 700;
    line-height: 129.167%;
    letter-spacing: -2.88px;
  }

  p {
    display: flex;
    font-size: 0.813rem;
    letter-spacing: 2%;
    width: 95%;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    padding: 0;
    align-items: center;

    h1 {
      letter-spacing: normal;
    }
  }
`;

export const SignUpBtn = styled(DefaultBtn)`
  width: 128px;
  background: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.blackSecondary};
  margin-top: 1rem;
`;

export const RightContent = styled.div`
  display: flex;
  width: 356px;
  height: 100%;
  position: relative;

  > img {
    width: 410px;
    height: 450px;
    border-bottom-right-radius: 20px;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
