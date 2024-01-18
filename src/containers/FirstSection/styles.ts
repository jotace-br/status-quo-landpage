import { PrimaryBtn } from '@components/Button';
import { Avatar } from 'antd';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;

  padding: 0 4em;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;

  z-index: 1;
  position: relative;
  background: white;

  @media screen and (max-width: 1180px) {
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;

    .img-illustration {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 2em;
    height: fit-content;
    padding: 1.5em 0;

    place-items: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  object-fit: cover;
  max-width: 1400px;
  margin: 0 auto;

  div:last-child {
    display: flex;
    align-items: flex-end;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  gap: 2em;

  padding: 8em 0;

  max-width: 700px;

  h1 {
    font-size: 4rem;

    line-height: 75px;
    color: ${(p) => p.theme.colors.primary};
  }

  .logo {
    width: 260px;
  }

  .stars {
    color: #161618;
  }

  p {
    font-weight: 500;
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 1.5em 2em;
  }

  @media screen and (max-width: 425px) {
    padding: 0 0 1.5em;

    .title-wrapper {
      padding: 0 1em;
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1em;

  @media screen and (max-width: 1024px) {
    align-self: center;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ExplorePathBtn = styled(PrimaryBtn)`
  height: 53px;
  padding: 4px 20px;

  display: flex;
  text-decoration: none;
  align-items: center;
`;

export const StyledAvatar = styled(Avatar).attrs({ size: 52 })`
  border: 2px solid ${(p) => p.theme.colors.primary} !important;
`;
