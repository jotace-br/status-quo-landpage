import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  text-align: center;

  background: #e5e5e5;

  padding: 2em 0;

  .title {
    font-size: 2.375rem;
    font-weight: 500;
    color: ${(p) => p.theme.colors.blackSecondary};
    padding: 0 4em 0.5em;
    margin-bottom: -2px;
  }

  @media screen and (max-width: 768px) {
    .title {
      padding: 0 2em 0.5em;
    }
  }
`;
