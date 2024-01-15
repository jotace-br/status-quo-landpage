import styled from 'styled-components';

export const Container = styled.div`
  background: #ebebeb;
  min-height: 300px;
  padding: 4em;

  @media screen and (max-width: 768px) {
    padding: 2em;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  flex-wrap: wrap;

  h1,
  a {
    font-size: 2.25rem;
    font-weight: bold;
    text-align: center;
  }

  a {
    color: ${(p) => p.theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    color: ${(p) => p.theme.colors.tertiary};
  }

  @media screen and (max-width: 425px) {
    gap: 0;
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 1.5em;
  gap: 1em;

  svg {
    height: 65px;
  }

  img {
    height: 125px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1em;
    gap: 1em 0em;

    svg {
      height: 40px;
    }

    img {
      height: 80px;
    }
  }
`;
