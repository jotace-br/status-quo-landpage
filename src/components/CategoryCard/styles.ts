import { Card } from 'antd';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  min-width: 240px;
  border: 0;
  border-radius: 0;

  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25);

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

  & > .ant-card-cover {
    margin-top: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
`;
