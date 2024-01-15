import { StyledCard } from './styles';

const { Meta } = StyledCard;

export interface CategoryCardProps {
  photo: string;
  title: string;
}

export const CategoryCard = ({ photo, title }: CategoryCardProps) => (
  <StyledCard cover={<img src={photo} alt={title} />}>
    <Meta title={title}></Meta>
  </StyledCard>
);
