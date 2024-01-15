import styled from 'styled-components';

export const Container = styled.section`
  height: fit-content;

  background: #d4c5fe;

  margin-top: -32px;
  padding: 4rem 4rem;

  @media screen and (max-width: 768px) {
    padding: 4rem 2em;
  }
`;

export const TitleSubtitleContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: ${(p) => p.theme.colors.textColorBlack};

  display: flex;
  flex-direction: column;
  gap: 1em;

  h1 {
    font-weight: bold;
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
  }
`;

export const IllustrationCardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  gap: 4em;
  margin-top: 4em;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap-reverse;
    gap: 2em;
    margin-top: 2em;

    .img-laptop {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  gap: 2em;
`;