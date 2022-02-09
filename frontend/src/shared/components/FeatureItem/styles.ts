import styled from 'styled-components';
import { Col, Image, Typography } from 'antd';
import { Link } from 'react-router-dom';

export const FeatureCol = styled(Col)`
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`

export const FeatureTextCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FeatureImage = styled(Image)`
`

export const FeatureTitle = styled(Typography.Title)`
  font-weight: 700 !important;
  font-size: 24px !important;
  line-height: 30px !important;
  text-align: center;
  color: #ffffff !important;
`

export const FeatureBody = styled(Typography.Paragraph)`
  display: flex;
  justify-content: center;
  width: 80%;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
`

export const FeatureLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 15px;  
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  text-decoration: underline;
  color: #ffffff;
  
  &:hover {
    color: #ffffff;
  }
`
