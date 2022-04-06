import React, { memo } from 'react';
import Slider from 'react-slick';

import {
  MainContainerLandingPage,
} from '../../shared/GlobalStyles';
import { NextArrowLeft, NextArrowRight } from '../../shared/components/SlickCarousel';
import Banner from './Banner';
import { FullwidthUnderline } from '../../shared/components/FullwidthUnderline';
import { NewsTitle } from './styles';
import { Feature } from '../../interfaces/Feature';
import Features from '../../shared/components/Features';


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


const dataForBanners = [
  {
    id: 1,
    title: 'Донские спасатели сыграли в товарищеском турнире по хоккею',
    text: `В субботу, 18 декабря в спортивно-развлекательном комплексе «ICE Arena» в г. Ростове-на-Дону состоялся турнир по хоккею с шайбой, посвященный 300-летию основания прокуратуры России. \n
        Бронзовыми призёрами стала команда МЧС России по Ростовской области, победителем первенства стала команда правительства региона, серебряными призерами стали представители областной прокуратуры.`,
    imageUrl: '/images/hockey-team.jpg',
    imageAlt: 'hockey team',
    newsId: 1,
  },
  {
    id: 2,
    title: 'Студенты ЮФУ на экскурсии в пожарную часть',
    text: `Не так давно, 11 ноября, Учебный пункт №2 пожарно-спасательного отряда ФПС ГПС России в Ростовской области посетила команда студентов по проектной деятельности ИКТИБ ЮФУ города Таганрога. \n
        Экскурсию провел Лисовой Г. Г., командир 6 пожарно-спасательного отряда Главного управления МЧС России по Ростовской области. В этот день молодым людям рассказали про основы подготовки пожарных.`,
    imageUrl: '/images/excursion.jpg',
    imageAlt: 'excursion',
    newsId: 2,
  },
  {
    id: 3,
    title: 'Поздравление с началом нового учебного года',
    text: `Команда разработчиков поздравляет товарищей курсантов, слушателей и кадетов с Днем знаний, началом учебного года. \n
        Для всех сотрудников и обучающихся в университете это очередной этап развития, который открывает новые возможности учиться, развиваться, улучшить свои результаты, реализовать свой потенциал.`,
    imageUrl: '/images/new-year.jpg',
    imageAlt: 'new year',
    newsId: 3,
  },
];

const roflDataForBanners = [
  {
    id: 1,
    title: 'Холодильник Samsung RB30A30N0SA/WT двухкамерный серебристый',
    text: `Этот холодильник – отличное решение для дачи и дома.  Его размеры равны 59,5х178х67,5 см. Во время работы устройство создает шум на уровне всего 37 дБ.
     Выбранные режимы работы отображаются на внутреннем дисплее. Поддержание температуры внутри камер осуществляется 1 цифровым инверторным компрессором, который работает с хладагентом R600a.
      При отключении питания температура внутри камер сохраняется в течение 20 ч.
      Но главное преимущество – огромный ровный пласт на двери. На нём вы сможете разместить все свои магнитики с путешествий по IT-компаниям.`,
    imageUrl: '/images/rofl-1.jpg',
    imageAlt: 'fire engine',
    newsId: 1,
  },
  {
    id: 2,
    title: 'Маска для лица CONSEDA. Маска с авокадо. Увлажнение. Сияние. Омоложение',
    text: `Нет, мы не продаём этого красивого мужчину. Просто посмотрите на маску на его лице! Питательная формула маски, вдохновленная спелым авокадо,
     помогает наполнить обезвоженную кожу, предотвратить шелушения и потерю влаги. Очищающая маска для лица с маслом авокадо интенсивно увлажняет и питает кожу,
      оставляет ее мягкой и бархатистой.`,
    imageUrl: '/images/rofl-2.jpg',
    imageAlt: 'fire engine',
    newsId: 2,
  },
  {
    id: 3,
    title: 'Фен Dyson Supersonic Gift Edition, синий/медный',
    text: `Благодаря двигателю с цифровым управлением, фен Dyson Supersonic создает мощный сфокусированный поток воздуха для быстрой сушки и укладки волос.
Технология Air Multiplier производит высокоскоростной воздушный поток для быстрой сушки и укладки.
Фен для волос Dyson Supersonic поставляется в комплекте с магнитными насадками, которые легко устанавливаются. Насадки фена Dyson Supersonic имеют магнитные крепления, которые позволяют легко менять насадки и вращать их в процессе укладки.
`,
    imageUrl: '/images/rofl-3.jpg',
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
