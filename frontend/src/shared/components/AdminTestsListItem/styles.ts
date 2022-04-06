import styled from 'styled-components';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

export const AdminTestItemWrapper = styled(Row)`
  padding: 15px 30px;
  border-bottom: 1px solid #6f8381;
`;

export const TestItemTitle = styled(Col)`
  font-size: 20px;
  line-height: 24px;
  color: #6f8381;
`;

export const TestItemLinkCol = styled(Col)`
  display: flex;
  align-items: center;
`;

export const TestItemLink = styled(Link)`
  display: block;
  width: 24px;
  height: 24px;
`;

export const TestItemButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
`;