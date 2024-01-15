import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  padding: 0 4em;
  background: ${(p) => p.theme.colors.bgSecondary};

  @media screen and (max-width: 768px) {
    padding: 2em;
    padding-bottom: 0;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 1em;
  overflow-x: auto;

  padding-bottom: 8px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
