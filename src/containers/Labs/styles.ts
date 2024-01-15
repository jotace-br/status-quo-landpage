import { PrimaryBtn } from '@/components/Button';
import styled from 'styled-components';

export const Container = styled.section`
  background: linear-gradient(
    to right,
    ${(p) => p.theme.colors.tertiary} 0%,
    ${(p) => p.theme.colors.tertiary} 50%,
    ${(p) => p.theme.colors.white} 50%,
    ${(p) => p.theme.colors.white} 100%
  );

  height: fit-content;

  display: flex;
  align-items: center;
  gap: 108px;

  padding: 4em;
  margin: 2em 0;

  @media screen and (max-width: 1024px) {
    margin: 0;

    flex-wrap: wrap;
    text-align: center;
    gap: 170px;

    background: linear-gradient(
      to top,
      ${(p) => p.theme.colors.white} 0%,
      ${(p) => p.theme.colors.white} 50%,
      ${(p) => p.theme.colors.tertiary} 50%,
      ${(p) => p.theme.colors.tertiary} 100%
    );
  }

  @media screen and (max-width: 768px) {
    padding: 2em;
  }
`;

export const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  width: 100%;

  h1 {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 0.5em;
  }

  ul {
    padding: revert;
  }

  li {
    font-size: 1.125rem;

    line-height: 2rem;
    font-weight: 300;
  }

  @media screen and (max-width: 1024px) {
    ul {
      padding: 0;
      list-style-type: none;
    }
  }
`;

export const RightContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  div:first-child {
    line-height: 1.5rem;
    align-items: baseline;
    padding-bottom: 0.75rem;
    gap: 16px;

    h1 {
      font-size: 2.25rem;
      font-size: clamp(2rem, 3vw, 2.25rem);
      font-weight: 500;
      color: black;
      margin-bottom: 1rem;
      line-height: 2.25rem;
    }

    p {
      font-size: clamp(1.2rem, 3vw, 1rem);
      color: ${(p) => p.theme.colors.textSecondary};
    }
  }

  div:last-child {
    p {
      line-height: 3.438rem;
      color: #004475;
    }

    #currency-wrapper {
      display: flex;
      color: #004475;
    }

    #only {
      font-size: 3rem;
    }

    #currency-sign {
      font-size: 2rem;
    }

    #currency-value {
      font-size: 4rem;
    }

    #currency-cents {
      font-size: 2em;
    }
  }

  @media screen and (max-width: 768px) {
    div:first-child {
      flex-direction: column;
    }

    div:last-child {
      display: flex;
      justify-content: center;
      align-items: baseline;

      width: 100%;

      #currency-wrapper {
        width: auto;
      }
    }
  }
`;

export const RightContentWrapper = styled.div`
  display: flex;
`;

export const StartNowBtn = styled(PrimaryBtn)`
  height: 45px;
`;
