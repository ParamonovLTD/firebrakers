import styled from 'styled-components';
import { Col, List, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

/* Containers */
export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  background-color: #58706d;
`;

export const MainFooterContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 24px 0;
  @media screen and (max-width: 991px) {
    & > div > div:nth-child(2) {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 767px) {
    & > div > div:nth-child(2) {
      margin-bottom: 20px;
    }
    & > div > div:nth-child(3) {
      margin-bottom: 20px;
    }
  }
`;

/* Links  */
export const StyledList = styled(List)`
  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }
`;

export const FooterBlockTitle = styled(Typography.Title)`
  &.ant-typography {
    padding: 0;
    font-weight: 700;
    font-size: 16px;
    color: #e5e5e5;
    
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const Address = styled.span`
  color: #d6d9de;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Contacts = styled(Row)`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ContactBlock = styled(Col)`
  display: flex;
  flex-direction: column;
`;

export const ContactTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #d6d9de;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const Contact = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: #d6d9de;
`;

export const StyledAnchor = styled(Link)`
  display: inline-block;
  font-size: 36px;
  &:not(:last-child) {
    margin-right: 14px;
  }
`;

/* Copyright  */
export const StyledCopyrightContainer = styled.div`
  padding: 12px 0;
  text-align: center;
  background-color: #58706d;
  color: #fff;
  margin: 0 auto;
  @media (max-width: 375px) {
    width: 80%;
  }
  @media (max-width: 320px) {
    width: 60%;
  }
`;

export const StyledCopyrightText = styled.span`
  font-size: 16px;
`;
