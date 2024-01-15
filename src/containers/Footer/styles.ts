import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;

  width: 100%;

  color: ${(p) => p.theme.colors.white};
  background: ${(p) => p.theme.colors.secondary};

  .logo img {
    width: 101px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  gap: 6.875rem;

  padding: 6.25rem 11.125rem 4rem;

  .links-social-container {
    display: contents;
  }

  @media screen and (max-width: 1200px) {
    padding: 6.25rem 4.125rem 4rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 2em 4rem;
    flex-direction: column;
    gap: 1rem;

    .links-social-container {
      display: inline-flex;
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .links-social-container {
      flex-direction: column;
      align-items: center;
      text-align: center;

      gap: 1em;

      width: 100%;
    }
  }
`;

export const LinksWrapper = styled.section`
  display: flex;
  align-items: flex-start;

  gap: 4em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1em;

    width: 100%;
  }
`;

export const LinkContainer = styled.div`
  h5 {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 1em;
    white-space: nowrap;
  }

  a {
    font-size: 0.875rem;
    font-weight: 300;
    text-decoration: none;
    line-height: 214.286%;
    color: ${(p) => p.theme.colors.white};
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 1em;
  }

  div {
    display: flex;
    gap: 16px;
  }
`;

export const RightsReservedContainer = styled.div`
  width: 100%;

  padding: 0 4em;

  .all-rights-reserved {
    p {
      padding: 2em 0 4em;
      text-align: center;
      font-size: 0.875rem;
      font-weight: 300;
    }
  }

  @media screen and (max-width: 425px) {
    padding: 0 2em;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  opacity: 0.15;
`;
