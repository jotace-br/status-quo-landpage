import { Card } from 'antd';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  min-width: 240px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25);

  img {
    object-fit: cover;
    aspect-ratio: 1.619;
  }
`;

export const TitleAndInstructor = styled.div`
  font-family: 'Poppins', sans-serif;

  h1 {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.5rem;
    color: ${(p) => p.theme.colors.blackSecondary};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.375rem;
    color: rgba(0, 0, 0, 0.45);
  }
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  p:nth-child(1) {
    font-size: 1rem;
    font-weight: 600;
  }

  p:last-child {
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.45);
  }

  .ant-rate .ant-rate-star:not(:last-child) {
    margin-inline-end: 0px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  font-size: 1rem;
  line-height: 1.375rem;
  gap: 4px;

  padding-top: 0.5em;

  p {
    font-weight: 500;
  }

  p:nth-child(2) {
    text-decoration: line-through;
    text-decoration-color: rgba(0, 0, 0, 0.35);
    color: rgba(0, 0, 0, 0.45);
  }
`;
