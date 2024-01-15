import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  max-width: 570px;
  min-height: 160px;

  padding: 2em 1em;
  line-height: 24px;

  border-radius: 10px;
  background: ${(p) => p.theme.colors.white};
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);

  gap: 1em;

  img {
    width: 24px;
  }

  div {
    gap: 8px;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-weight: 600;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #6c6c72;
  }
`;
