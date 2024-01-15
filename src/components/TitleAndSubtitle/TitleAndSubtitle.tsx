import styled from 'styled-components';

export interface TitleAndSubtitleProps {
  className?: string;
  title: string;
  subtitle: string;
}

const TitleSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 0 1em;

  width: 100%;
  font-family: 'Poppins', sans-serif;
  line-height: 2.875rem;

  h1 {
    font-size: 2.375rem;
    font-weight: 500;
    color: ${(p) => p.theme.colors.blackSecondary};
  }

  p {
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 255.556%;
    color: ${(p) => p.theme.colors.blackSecondary};
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    gap: 0.5em;
    padding: 0;

    p {
      line-height: normal;
    }
  }
`;

export const TitleAndSubtitle = ({
  className = '',
  title,
  subtitle,
}: TitleAndSubtitleProps) => (
  <TitleSubtitleContainer className={className}>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </TitleSubtitleContainer>
);
