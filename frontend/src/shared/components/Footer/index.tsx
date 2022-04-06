import React, { memo, FC } from 'react';
import { Col, Row } from 'antd';
import { useLocation } from 'react-router-dom';
import {
  StyledFooter,
  MainFooterContainer,
  StyledAnchor,
  StyledCopyrightContainer,
  StyledCopyrightText,
  Address, FooterBlockTitle, Contact, ContactTitle, ContactBlock, Contacts,
} from './styles';
import { ImageFluid } from '../../GlobalStyles';
import IconInstagram from '../IconInstagram/IconInstagram';

const layout = {
  xs: { span: 24 },
  md: { span: 12 },
  lg: { span: 6 },
};

const Footer: FC = () => {
  return (
    <StyledFooter>
      <MainFooterContainer>
        <Row>
          <Col {...layout}>
            <ImageFluid src="/images/firebrakers_logo.png" width={170} alt="Logo" />
          </Col>
          <Col {...layout}>
            <FooterBlockTitle level={4}>Контакты</FooterBlockTitle>
            <Contacts>
              <ContactBlock>
                <ContactTitle>Общее отделение</ContactTitle>
                <Contact>+7(XXX)-XXX-XX-XX</Contact>
              </ContactBlock>
              <ContactBlock>
                <ContactTitle>Приемное отделение</ContactTitle>
                <Contact>+7(XXX)-XXX-XX-XX</Contact>
              </ContactBlock>
              <ContactBlock>
                <ContactTitle>Тех. поддержка</ContactTitle>
                <Contact>+7(XXX)-XXX-XX-XX</Contact>
              </ContactBlock>
              <ContactBlock>
                <ContactTitle>E-mail</ContactTitle>
                <Contact>XXXXXXXX@mail.ru</Contact>
              </ContactBlock>
            </Contacts>
          </Col>
          <Col {...layout}>
            <FooterBlockTitle level={4}>Адрес</FooterBlockTitle>
            <Address>
              г. Ростов-на-Дону
              <br />
              ул. Название улицы, строение
            </Address>
          </Col>
          <Col {...layout}>
            <FooterBlockTitle level={4}>Соц. сети</FooterBlockTitle>
            <StyledAnchor to="/">
              <IconInstagram />
            </StyledAnchor>
          </Col>
        </Row>
      </MainFooterContainer>
      <StyledCopyrightContainer>
        <StyledCopyrightText>
          Copyright &copy; 2021. Все права защищены
        </StyledCopyrightText>
      </StyledCopyrightContainer>
    </StyledFooter>
  );
};

export default memo(Footer);
