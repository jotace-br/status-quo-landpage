import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  padding: 0 4em;

  .title-subtitle {
    padding: 2em 0 1em;
  }

  @media screen and (max-width: 768px) {
    padding: 2em;
    padding-bottom: 0;

    .title-subtitle {
      padding: 0;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 1em;
  overflow-x: auto;

  padding-bottom: 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
