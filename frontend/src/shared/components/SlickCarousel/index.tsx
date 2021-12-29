import React, { FC, memo } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './style.css';
import { useHistory } from 'react-router-dom';
import { Rate } from 'antd';

import {
  SlickCardTitle,
  SlickCardImgContainer,
  SlickCardTitleContainer,
  CarouselCardContainer,
  CarouselContainer,
  SlickCardImg,
  GalleryArrowLeft,
  GalleryArrowRight,
  CarouselCardContainerServices,
  SlickCardImgContainerServices,
  SlickCardContentContainerServices,
  SlickCardSubtitle,
  SlickCardServicesContentBottom,
  SlickCardServicesContentTop,
  StyledHeartOutlined,
  StyledPriceP,
  SlickCardImgServices,
  SlickCardTitleServices,
  LikeBtn,
  RatingReviewsDiv,
  ReviewsSpan,
} from './styles';

export const NextArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
  <GalleryArrowLeft {...props} />
);

export const NextArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
  <GalleryArrowRight {...props} />
);

export interface ICarouselCard {
  allowedFilters?: null;
  createdAt?: string;
  description?: string;
  id?: number;
  image?: string;
  isParent?: boolean;
  slug?: string;
  thumb?: string;
  title?: string;
  updatedAt?: null | string;
  path?: string;
  trending?: boolean;
  voted?: string;
  rate?: number;
  fixedPrice?: number | null;
  parents?: any;
  parentPath?: string;
}

interface SlickCarouselProps {
  slickData: ICarouselCard[];
  trending?: boolean;
}

const SlickCarouselCard: FC<ICarouselCard> = ({
  id,
  title,
  image,
  path,
  trending,
  voted,
  rate,
  description,
  fixedPrice,
  parentPath,
}) => {
  const history = useHistory();
  return (
    <>
      {trending ? (
        <CarouselCardContainer
          onClick={() => history.push(`/category/${parentPath}/${path}`)}
        >
          <SlickCardImgContainer>
            <SlickCardImg src={image} alt={title} />
          </SlickCardImgContainer>
          <SlickCardTitleContainer>
            <SlickCardTitle>{title}</SlickCardTitle>
          </SlickCardTitleContainer>
        </CarouselCardContainer>
      ) : (
        <CarouselCardContainerServices
          onClick={() => history.push(`/service/${id}`)}
        >
          <SlickCardImgContainerServices>
            <SlickCardImgServices
              src="/images/Photography.png" // `https:/${image}`
              alt={title}
            />
          </SlickCardImgContainerServices>
          <SlickCardContentContainerServices>
            <SlickCardServicesContentTop>
              <SlickCardTitleServices>{title}</SlickCardTitleServices>
              <SlickCardSubtitle>{description}</SlickCardSubtitle>
              <RatingReviewsDiv>
                <Rate allowHalf disabled value={rate} defaultValue={0} />

                <ReviewsSpan>{voted || 0} reviews</ReviewsSpan>
              </RatingReviewsDiv>
            </SlickCardServicesContentTop>
            <SlickCardServicesContentBottom>
              <StyledPriceP>${fixedPrice}</StyledPriceP>
              <LikeBtn onClick={() => console.log('Like')}>
                <StyledHeartOutlined />
              </LikeBtn>
            </SlickCardServicesContentBottom>
          </SlickCardContentContainerServices>
        </CarouselCardContainerServices>
      )}
    </>
  );
};

const SlickCarousel: FC<SlickCarouselProps> = ({ slickData, trending }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    touchMove: true,
    prevArrow: <NextArrowLeft />,
    nextArrow: <NextArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <CarouselContainer trending={trending}>
      <Slider {...settings}>
        {slickData.map(
          ({
            id,
            image,
            title,
            rate,
            voted,
            description,
            fixedPrice,
            slug,
            parents,
          }) => (
            <SlickCarouselCard
              id={id}
              trending={trending}
              image={image}
              key={title}
              title={title}
              path={slug}
              rate={rate}
              voted={voted}
              description={description}
              fixedPrice={fixedPrice}
              parentPath={trending ? parents && parents[0]?.slug : ''}
              parents={parents}
            />
          ),
        )}
      </Slider>
    </CarouselContainer>
  );
};

export default memo(SlickCarousel);
