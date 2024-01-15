import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 0 4em;

  .title-subtitle {
    padding: 2em 0 1em;
  }

  @media screen and (max-width: 768px) {
    padding: 2em;

    .title-subtitle {
      padding: 0;
    }
  }
`;
