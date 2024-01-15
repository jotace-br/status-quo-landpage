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
