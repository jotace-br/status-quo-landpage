import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 100%;

  padding: 2em 8em;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2.375rem;
    line-height: 121.053%;
    color: ${(p) => p.theme.colors.blackSecondary};
  }

  @media screen and (max-width: 768px) {
    padding: 2em;
  }
`;

export const FormContainer = styled.div`
  width: 100%;

  padding: 1em 1em 0;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
