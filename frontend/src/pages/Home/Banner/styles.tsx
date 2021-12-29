import styled from 'styled-components';
import { Row } from 'antd';
import { Link } from 'react-router-dom';

export const BannerContainer = styled(Row)`
  padding: 60px 85px;
  background-color: #f8fcff;
  border-radius: 10px;
  
  @media (max-width: 600px) {
    padding: 10px 30px 0px;
  }
`;

export const BannerTitle = styled.h3`
  //display: flex;
  //align-items: center;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #6c6c6c;
  
  //@media (max-width: 414px) {
  //  font-size: 26px;
  //}
`;

export const BannerText = styled.p`
  width: 85%;
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 16px;
  white-space: pre-line;
  color: #6c6c6c;
  
  //@media (max-width: 844px) {
  //  width: 100%;
  //  margin-bottom: 32px;
  //}
`;

export const BannerLink = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  border-bottom: 1px solid #7d7e7e;
  color: #7d7e7e;
  
  &:hover {
    color: #7d7e7e;
    border-bottom: 0;
  }
`;