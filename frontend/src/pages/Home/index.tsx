import React, { memo, useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from 'antd';

import {
  MainContainerLandingPage,
} from '../../shared/GlobalStyles';
import { NextArrowLeft, NextArrowRight } from '../../shared/components/SlickCarousel';
import Banner from './Banner';
import { FullwidthUnderline } from '../../shared/components/FullwidthUnderline';
import { NewsTitle } from './styles';




// import {
//   isAuthenticatedSelector,
//   userSelector,
// } from '../../store/slices/authSlice';


const HomePage = () => {
  const dispatch = useDispatch();

  // const isAuthenticated = useSelector(isAuthenticatedSelector);
  // const user = useSelector(userSelector);

  const dataForBanners = [
    {
      id: 1,
      title: 'Пожарно-тактические учения и занятия как элемент профилактики пожаров',
      text: `С личным составом 1 ПСЧ 2 ПСО ФПС ГПС ГУ МЧС России по РО проведы ПТЗ в здании части. \n
        По плану занятий, пожар произошёл в архиве на 3 этаже. Работало 2 звена ГДЗС. Отрабатывались действия по эвакуации пострадавшего.`,
      imageUrl: '/images/fire_engine.png',
      imageAlt: 'fire engine',
      newsId: 1,
    },
    {
      id: 2,
      title: 'Пожарно-тактические учения и занятия как элемент профилактики пожаров',
      text: `С личным составом 1 ПСЧ 2 ПСО ФПС ГПС ГУ МЧС России по РО проведы ПТЗ в здании части. \n
        По плану занятий, пожар произошёл в архиве на 3 этаже. Работало 2 звена ГДЗС. Отрабатывались действия по эвакуации пострадавшего.`,
      imageUrl: '/images/fire_engine.png',
      imageAlt: 'fire engine',
      newsId: 2,
    },
    {
      id: 3,
      title: 'Пожарно-тактические учения и занятия как элемент профилактики пожаров',
      text: `С личным составом 1 ПСЧ 2 ПСО ФПС ГПС ГУ МЧС России по РО проведы ПТЗ в здании части. \n
        По плану занятий, пожар произошёл в архиве на 3 этаже. Работало 2 звена ГДЗС. Отрабатывались действия по эвакуации пострадавшего.`,
      imageUrl: '/images/fire_engine.png',
      imageAlt: 'fire engine',
      newsId: 3,
    },
  ];

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    prevArrow: <NextArrowLeft />,
    nextArrow: <NextArrowRight />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
        },
      },
    ],
  };

  return (
    <MainContainerLandingPage>
      <NewsTitle level={2}>Новости</NewsTitle>
      <FullwidthUnderline marginBottom={50} />
      <Slider {...settings}>
        {
          dataForBanners.map(dataForBanner =>
            <Banner key={dataForBanner.id} data={dataForBanner} />,
          )
        }
      </Slider>
    </MainContainerLandingPage>
  );
};

export default memo(HomePage);
