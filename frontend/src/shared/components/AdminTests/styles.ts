import styled from 'styled-components';
import { Col } from 'antd';
import { Link } from 'react-router-dom';

export const AdminTestsWrapper = styled(Col)`
  padding: 40px 60px;
  background-color: #ffffff;
  border-radius: 10px;
`;
export const CreateLink = styled(Link)`
  position: relative;
  display: flex;
  gap: 8px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
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
    opacity: 0;
    width: 83%;
    height: 1px;
    background-color: #6f8381;
    transition: 0.2s;
  }
`;

export const TestsList = styled(Col)`
  margin-top: 30px;
  border-top: 1px solid #6f8381;
`;