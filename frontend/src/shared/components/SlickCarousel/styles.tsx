import styled from 'styled-components';
import {
  LeftOutlined,
  RightOutlined,
  StarFilled,
  HeartOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';

export interface StarProps {
  golden?: boolean;
}

export interface CarouselContainer {
  trending?: boolean;
}

export const CarouselContainer = styled.div<CarouselContainer>`
  width: 102.5%;
  margin-left: -14px;
  height: 460px;
  margin-bottom: ${(props) => (props.trending ? '34px' : '-20px')};
  margin-top: 32px;
  @media (max-width: 1200px) {
    width: 100%;
    margin-left: 0px;
  }

  @media (max-width: 900px) {
    margin-bottom: 44px;
    width: 100%;
    height: 440px;
    margin-left: 0px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 440px;
    margin-top: 16px;
    margin-left: 0px;
  }
  @media (max-width: 667px) {
    width: 100%;
    height: 440px;
    margin-left: 0px;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: 460px;
    margin-left: 0px;
  }
  @media (max-width: 414px) {
    width: 100%;
    height: 440px;
    margin-left: 0px;
  }
  @media (max-width: 375px) {
    width: 100%;
    height: 380px;
    margin-left: 0px;
  }
  @media (max-width: 320px) {
    height: 360px;
    margin-left: 0px;
  }
`;

export const CarouselCardContainer = styled.div`
  height: 100%;
  width: 280px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 2px 4px 8px rgba(89, 97, 117, 0.08);
  cursor: pointer;
  @media (max-width: 900px) {
    width: 90%;
    margin: 0px auto;
    height: 440px;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 0px auto;
    height: 440px;
  }
  @media (max-width: 667px) {
    margin: 0px auto;
    height: 460px;
    width: 90%;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: 460px;
    margin: 0px auto;
    width: 90%;
  }
  @media (max-width: 414px) {
    height: 460px;
    margin: 0px auto;
    width: 90%;
  }
  @media (max-width: 375px) {
    height: 400px;
    margin: 0px auto;
    width: 90%;
  }
  @media (max-width: 320px) {
    height: 371px;
    margin: 0px auto;
    width: 85%;
  }
`;

export const SlickCardImgContainer = styled.div`
  width: 100%;
  height: 371px;
  cursor: pointer;
  overflow-x: hidden;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px auto;
  }
  @media (max-width: 667px) {
    margin: 0px auto;
    width: 100%;
  }
  @media (max-width: 414px) {
    margin: 0px auto;
    width: 100%;
  }
  @media (max-width: 375px) {
    margin: 0px auto;
    width: 100%;
  }
  @media (max-width: 320px) {
    margin: 0px auto;
    width: 100%;
  }
`;

export const SlickCardTitleContainer = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  height: 89px;
  padding: 20px 10px;
`;

export const SlickCardTitle = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #13171c;
  width: auto;
  margin: auto auto;
  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 900px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const SlickCardImg = styled.img`
  width: auto;
  height: 100%;
`;
export const GalleryArrowLeft = styled(LeftOutlined)`
  width: 40px;
  height: 40px;
  z-index: 99999;
  top: 45%;
  left: 25px;
  transform: translateY(-40px);
  transform: translateX(-75px);
  color: #ffffff;
  
  :hover {
    color: #ffffff;
  }
  
  svg {
    width: 40px;
    height: 40px;
  }
  
  :focus {
    color: #000;
  }
  
  @media (max-width: 1300px) {
    transform: translateY(-40px);
    transform: translateX(-52px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 1200px) {
    transform: translateY(-40px);
    transform: translateX(-38px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 1024px) {
    transform: translateY(-40px);
    transform: translateX(-48px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 768px) {
    transform: translateY(-40px);
    transform: translateX(-48px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 667px) {
    transform: translateY(-40px);
    transform: translateX(-49px);
  }
  
  @media (max-width: 414px) {
    transform: translateY(-40px);
    transform: translateX(-45px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 375px) {
    transform: translateY(-40px);
    transform: translateX(-45px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 320px) {
    transform: translateY(-40px);
    transform: translateX(-45px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const GalleryArrowRight = styled(RightOutlined)`
  width: 40px;
  height: 40px;
  z-index: 99999;
  top: 45%;
  right: 25px;
  transform: translateY(-40px);
  transform: translateX(75px);
  color: #ffffff;
  
  :hover {
    color: #ffffff;
  }
  
  svg {
    width: 40px;
    height: 40px;
  }
  
  :focus {
    color: #000;
  }
  
  @media (max-width: 1300px) {
    transform: translateY(-40px);
    transform: translateX(52px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 1200px) {
    transform: translateY(-40px);
    transform: translateX(38px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 1024px) {
    transform: translateY(-40px);
    transform: translateX(48px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 768px) {
    transform: translateY(-40px);
    transform: translateX(48px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 667px) {
    transform: translateY(-40px);
    transform: translateX(49px);
  }
  
  @media (max-width: 414px) {
    transform: translateY(-40px);
    transform: translateX(45px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 375px) {
    transform: translateY(-40px);
    transform: translateX(45px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
  
  @media (max-width: 320px) {
    transform: translateY(-40px);
    transform: translateX(45px);
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

/* CSS STYLES FOR SERVICES SLICK CAROUSEL */

export const CarouselCardContainerServices = styled.div`
  width: 280px;
  height: 370px;
  box-shadow: 2px 4px 8px rgba(89, 97, 117, 0.08);
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 90%;
    margin: 0px auto;
    height: 370px;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 0px auto;
    height: 370px;
  }
  @media (max-width: 667px) {
    margin: 0px auto;
    height: 370px;
    width: 90%;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: 370px;
    margin: 0px auto;
    width: 90%;
  }
  @media (max-width: 414px) {
    height: 370px;
    margin: 0px auto;
    width: 90%;
  }
  @media (max-width: 375px) {
    height: 370px;
    margin: 0px auto;
    width: 90%;
  }
  @media (max-width: 320px) {
    height: 370px;
    margin: 0px auto;
    width: 85%;
  }
`;
/* IMG */
export const SlickCardImgContainerServices = styled.div`
  width: 100%;
  height: 160px;
  margin: 0px;
  padding: 0px;
  border-radius: 5px 5px 0px 0px;
  @media (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
`;

export const SlickCardImgServices = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 320px) {
    width: auto;
    height: 100%;
  }
`;
/* CONTENT */
export const SlickCardContentContainerServices = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  height: 208px;
  padding: 16px;
  border-radius: 0px 0px 5px 0px;
`;

export const SlickCardServicesContentTop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SlickCardTitleServices = styled(SlickCardTitle)`
  font-size: 20px;
  margin: 0px auto 0px 0px;
`;

export const SlickCardSubtitle = styled.p`
  display: -webkit-box !important;
  color: #9a9fa5;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  white-space: normal;
  text-overflow:ellipsis;
  overflow:hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const RatingReviewsDiv = styled.div`
  display: flex;
  margin-top: -10px;
  @media (max-width: 320px) {
    flex-direction: column;
  }
`;

export const StyledStarOutlined = styled(StarFilled)<StarProps>`
  color: ${(props) => (props.golden ? 'rgb(253,209,114)' : 'rgb(215,217,222)')};
  font-size: 24px !important;
  margin-right: 3px;
`;

export const ReviewsSpan = styled.span`
  margin: 10px 0px 10px 10px;
  font-size: 13px;
  color: #9a9fa5;
  @media (max-width: 320px) {
    margin: 10px 0px 0px 0px;
  }
`;

export const SlickCardServicesContentBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
  height: 30px;
`;

export const StyledPriceP = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const LikeBtn = styled.button`
  cursor: pointer;
  width: 24px;
  height: 24px;
  border: none;
  margin-right: 15px;
  margin-top: -3px;
  background: white;
`;

export const StyledHeartOutlined = styled(HeartOutlined)`
  color: #69a1f4;
  font-size: 30px;
`;
