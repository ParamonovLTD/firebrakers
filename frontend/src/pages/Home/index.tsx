import React, { memo } from 'react';
import Slider from 'react-slick';
import { useDispatch } from 'react-redux';

import {
  MainContainerLandingPage,
} from '../../shared/GlobalStyles';
import { NextArrowLeft, NextArrowRight } from '../../shared/components/SlickCarousel';
import Banner from './Banner';
import { FullwidthUnderline } from '../../shared/components/FullwidthUnderline';
import { NewsTitle } from './styles';
import { Feature } from '../../interfaces/Feature';
import Features from '../../shared/components/Features';


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

const dataForFeatures: Feature[] = [
  {
    id: 1,
    title: 'Обучение',
    body: 'Учитесь и приобретайте знания.\n В разделе “Справочник” вы сможете найти нужную информацию для обучения',
    imgURL: './images/education.svg',
    isLink: false,
  },
  {
    id: 2,
    title: 'Онлайн тестирование',
    body: 'Проходите онлайн тестирование на данной платформе и контролируйте свои результаты',
    imgURL: './images/testing.svg',
    isLink: true,
    linkText: 'Перейти к тестированию',
    linkURL: '/testing',
  },
  {
    id: 3,
    title: 'Сдача экзамена',
    body: 'Сдавайте пробный экзамен, чтобы узнать уровень своей подготовки',
    imgURL: './images/exams.svg',
    isLink: false,
  }
]


const HomePage = () => {
  const dispatch = useDispatch();

  // const isAuthenticated = useSelector(isAuthenticatedSelector);
  // const user = useSelector(userSelector);

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
      <FullwidthUnderline
        marginTop={80}
      />
      <Features features={dataForFeatures}/>
    </MainContainerLandingPage>
  );
};

export default memo(HomePage);
