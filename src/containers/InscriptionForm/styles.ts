import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 80%;

  padding: 2em 0;
  margin: 0 auto;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 2.375rem;
    line-height: 121.053%;
    color: ${(p) => p.theme.colors.blackSecondary};
    margin-bottom: 0.5em;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
`;
