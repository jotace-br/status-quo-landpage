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
    font-size: clamp(1.3rem, 1.2693rem + 0.1754vw, 1.55rem);
    text-transform: uppercase;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1rem, 0.9939rem + 0.0351vw, 1.05rem);
    color: #6c6c72;
  }
`;
