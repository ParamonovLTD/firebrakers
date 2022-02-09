import React from 'react';
import { Col, Row } from 'antd';
import { Feature } from '../../../interfaces/Feature';
import { FeatureBody, FeatureLink, FeatureImage, FeatureTitle, FeatureTextCol, FeatureCol } from './styles';

interface FeatureItemProps {
  feature: Feature;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => {
  const { title, body, imgURL, isLink, linkText, linkURL } = feature

  return (
    <FeatureCol xs={24} md={7} style={{minWidth: '190px'}}>
      <Row justify='center'>
        <Col>
          <FeatureImage width={183} src={imgURL} preview={false} />
        </Col>
      </Row>
      <Row>
        <FeatureTextCol>
          <FeatureTitle>{title}</FeatureTitle>
          <FeatureBody>{body}</FeatureBody>
          {isLink &&
            <FeatureLink to={linkURL}>{linkText}</FeatureLink>
          }
        </FeatureTextCol>
      </Row>
    </FeatureCol>
  );
};

export default FeatureItem;