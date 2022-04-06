import React, {memo} from 'react';
import {Col} from 'antd';
import {BannerContainer, BannerLink, BannerText, BannerTitle} from './styles';
import {ImageFluid} from '../../../shared/GlobalStyles';

interface IData {
  id: number,
  title: string,
  text: string,
  imageUrl: string,
  imageAlt: string,
  newsId: number,
}

interface Props {
  data: IData,
}

const Banner: React.FC<Props> = ({ data }) => {
  const {title, text, imageUrl, imageAlt, newsId} = data;

  return (
    <BannerContainer align='middle' justify='center'>
      <Col xs={24} md={10}>
        <ImageFluid src={imageUrl} alt={imageAlt} />
      </Col>
      <Col xs={24} md={{ span: 10, offset: 1}}>
        <BannerTitle>{title}</BannerTitle>
        <BannerText>{text}</BannerText>
        <BannerLink to={`/news/${newsId}`}>Читать далее</BannerLink>
      </Col>
    </BannerContainer>
  );
};

export default memo(Banner);