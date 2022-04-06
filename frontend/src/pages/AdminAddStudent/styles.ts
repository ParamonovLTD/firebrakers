import styled from 'styled-components';
import { Typography } from 'antd';

export const RegisterTitle = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 5px;
    padding-left: 30px;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;

    @media (max-width: 575px) {
      font-size: 28px;
      line-height: 32px;
    }
  }
`;