import styled from 'styled-components';

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(p) => p.theme.colors.white};

  height: 80px;
  width: 100%;

  padding: 1.5rem 4em;

  .logo {
    width: 162px;
  }

  @media screen and (max-width: 680px) {
    padding: 1.5rem 1em 0;

    flex-direction: column;
    height: fit-content;
    gap: 1em;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 4em;
  font-size: 1.125rem;

  button {
    border: none;
    background-color: unset;
    color: ${(p) => p.theme.colors.textSecondary};
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
  }

  a {
    color: ${(p) => p.theme.colors.textSecondary};
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  a:hover,
  button:hover {
    color: ${(p) => p.theme.colors.primary};
    font-weight: bold;
  }

  @media screen and (max-width: 1024px) {
    gap: 1em;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5em;
`;
