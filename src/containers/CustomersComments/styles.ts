import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  text-align: center;

  .title {
    font-size: 2.375rem;
    font-weight: 500;
    color: ${(p) => p.theme.colors.blackSecondary};
    padding: 0 4em 0.5em;
  }

  @media screen and (max-width: 768px) {
    .title {
      padding: 0 2em 0.5em;
    }
  }
`;
