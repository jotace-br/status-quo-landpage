import styled from 'styled-components';

export interface TitleAndSubtitleProps {
  className?: string;
  title: string;
  subtitle: string;
}

const TitleSubtitleContainer = styled.div`
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
  }

  @media screen and (max-width: 768px) {
    text-align: center;

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
