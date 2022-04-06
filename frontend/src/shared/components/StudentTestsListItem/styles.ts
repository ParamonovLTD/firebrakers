import styled from 'styled-components';
import { Row } from 'antd';
import { Link } from 'react-router-dom';

export const StudentTestItemWrapper = styled(Row)`
  padding: 15px 30px;
  border-bottom: 1px solid #6f8381;
`;

export const PassTestLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  color: #6f8381;

  &:hover {
    color: #6f8381;

    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 30px;
    width: 76%;
    height: 1px;
    background-color: #6f8381;
    opacity: 0;
    transition: 0.2s;
  }
`;