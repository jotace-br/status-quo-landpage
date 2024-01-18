import checkboxFilled from '@assets/icons/checkbox-circle-filled.svg';
import { Container } from './styles';

interface BenefitCardProps {
  title: string;
  subtitle: string;
}

export const BenefitCard = ({ title, subtitle }: BenefitCardProps) => (
  <Container>
    <img src={checkboxFilled} alt='' width='24px' height='24px' />
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </Container>
);
