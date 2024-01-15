import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  min-height: 420px;
  max-width: 600px;
  width: fit-content;
  height: fit-content;

  padding: 2em;
  border-radius: 25px;

  background: #f2f2f2;
  /* filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25)); */
`;

export const OpinionAuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75em;

  color: ${(p) => p.theme.colors.textColorBlack};

  h1 {
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    font-weight: 400;
    margin-top: 0.5rem;
  }

  div {
    display: flex;
  }

  p,
  span {
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    /* font-size: 1.75rem; */
  }

  p {
    font-weight: bold;
  }

  #role {
    font-weight: 300;
    padding-left: 0.25rem;
  }

  @media screen and (max-width: 768px) {
    align-items: center;

    div {
      flex-direction: column;
      padding-bottom: 1em;
    }

    #role {
      padding-left: 0;
    }

    #comma {
      display: none;
    }
  }
`;
