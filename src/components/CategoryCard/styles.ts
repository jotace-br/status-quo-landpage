import { Card } from 'antd';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  min-width: 240px;
  border: 0;
  border-radius: 0;

  img {
    width: 240px;
    height: 240px;
    object-fit: cover;
  }

  img:hover {
    transform: scale(1.05);
    transition: transform 150ms cubic-bezier(0, 0, 0.38, 0.9);
  }

  img,
  .ant-card-body {
    border-radius: 0 !important;
  }

  .ant-card-body {
    padding: 0.5em 0;
  }
`;
