import { Container } from './styles';
import checkboxFilled from '@assets/icons/checkbox-circle-filled.svg';

interface BenefitCardProps {
  title: string;
  subtitle: string;
}

export const BenefitCard = ({ title, subtitle }: BenefitCardProps) => (
  <Container>
    <img src={checkboxFilled} alt='' />
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </Container>
);
