import { Button } from 'antd';
import styled from 'styled-components';

export const DefaultBtn = styled(Button)`
  &:where(.css-dev-only-do-not-override-i1mju1).ant-btn-default:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    border-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.primary};
  }
`;

export const PrimaryBtn = styled(Button).attrs({ type: 'primary' })`
  background: ${(p) => p.theme.colors.primary};

  &:where(.css-dev-only-do-not-override-i1mju1).ant-btn-primary:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    background: ${(p) => p.theme.colors.tertiary};
  }
`;
