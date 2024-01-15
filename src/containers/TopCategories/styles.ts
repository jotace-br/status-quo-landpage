import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* max-width: 1400px; */

  padding: 0 4em 2em;
  background: ${(p) => p.theme.colors.bgSecondary};

  @media screen and (max-width: 768px) {
    padding: 2em;
  }
`;
