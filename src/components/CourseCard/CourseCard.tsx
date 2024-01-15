import { numberToUSD } from '@/helpers/NumberToUSD';
import { truncateString } from '@/helpers/truncateString';
import { ICourse } from '@/types/Course';
import { Rate, Tooltip } from 'antd';
import {
  PriceContainer,
  RateContainer,
  StyledCard,
  TitleAndInstructor,
} from './styles';

export interface CourseCardProps extends ICourse {}

export const CourseCard = ({
  photo,
  title,
  instructor,
  rateValue,
  totalStudents,
  price,
  hasDiscount = false,
  originalPrice = undefined,
}: CourseCardProps) => (
  <StyledCard
    hoverable
    style={{ width: 240 }}
    cover={<img src={photo} alt={title} />}
  >
    <TitleAndInstructor>
      <Tooltip title={title}>
        <h1>{truncateString(title, 25)}</h1>
      </Tooltip>
      <Tooltip title={instructor}>
        <p>{truncateString(instructor, 25)}</p>
      </Tooltip>
    </TitleAndInstructor>

    <RateContainer>
      <p>{rateValue.toFixed(1).replace('.', ',')}</p>
      <Rate allowHalf disabled defaultValue={rateValue} />
      <p>({totalStudents})</p>
    </RateContainer>

    <PriceContainer>
      <p>{numberToUSD(price)}</p>{' '}
      {hasDiscount && <p>{numberToUSD(originalPrice)}</p>}
    </PriceContainer>
  </StyledCard>
);
