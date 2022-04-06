import React, { FC } from 'react';
import { Row } from 'antd';
import { StyledHeader, Container, LogoText, LogoContainer } from './styles';
import { HeaderMenu } from './HeaderMenu';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const Header: FC = () => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <StyledHeader>
        <Container>
          <Row align="middle" justify="center">
            <LogoContainer xs={{ span: 16 }} md={{ span: 16 }}>
              <img
                src="/images/firebrakers_logo.png"
                alt="Logo"
                style={{ width: '90%', maxWidth: '71px' }}
              />
              {width > 500
               ?
                  <LogoText>
                    Учебный пункт 2 пожарно-спасательного отряда ФПС ГПС <br />
                    Главного управления МЧС России по Ростовской области
                  </LogoText>
                :
                  null
              }
            </LogoContainer>
          </Row>
        </Container>
      </StyledHeader>
      <HeaderMenu />
    </>
  );
};
