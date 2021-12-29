import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';

export const TrendingContainer = styled.div``;
export const TitleBlock = styled.h2``;

export const BannerBtnContainer = styled.div`
  width: 240px;
  height: 40px;
`;

export const NewsTitle = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 5px;
    padding-left: 30px;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
  }
`;

export const TrendingServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 67px 0;
  width: 100%;
  @media (max-width: 1300px) {
    width: 98%;
    margin: 0px auto;
  }
  @media (max-width: 768px) {
    padding: 20px 0 47px 0;
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

export const ServicesSubTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #505357;
  text-align: center;
  margin-top: 24px;
  width: 55%;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 568px) {
    width: 90%;
  }
`;

export const ServicesItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
  padding-bottom: 30px;
  @media (max-width: 375px) {
    gap: 28px 0px;
  }
`;

export const BackgroundItem = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  transition: all 0.5s ease-in;
  &:hover {
    background-color: #1794fb;
    opacity: 0.7;
    border-radius: 4px;
    z-index: 2;
    & + div > span {
      bottom: 50%;
      transform: translateY(50%);
      pointer-events: none;
    }
  }
`;

export const StyledLink = styled(Link)`
  width: fit-content;
  position: relative;
`;

export const ServicesItems = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const ServicesItemsTitle = styled.span`
  width: 50%;
  position: absolute;
  bottom: 16px;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #ffffff;
  z-index: 3;
  text-shadow: 0px 0px 6px rgba(6, 19, 39, 0.12);
`;

export const ServicesCarousel = styled.div`
  height: 240px;
  margin-top: 40px;
  width: 100%;
`;
