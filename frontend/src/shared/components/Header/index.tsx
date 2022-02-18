import React, { FC, useCallback, useEffect, useState, useMemo } from 'react';
import { Col, Row, Badge, Button } from 'antd';
import { MailOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useHistory, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledHeader, Container, LogoText, LogoContainer } from './styles';
import { HeaderMenu } from './HeaderMenu';
// import {
//   isAuthenticatedSelector,
//   logOut,
//   userSelector,
// } from '../../../store/slices/authSlice';
import LoginButtonIcon from '../LoginButtonIcon';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const params = useMemo(() => new URLSearchParams(location.search),
    [location]);

  // const isAuthenticated = useSelector(isAuthenticatedSelector);
  // const user = useSelector(userSelector);

  // const handleLogout = useCallback(() => {
  //   dispatch(logOut());
  //   history.push('/login');
  // }, [dispatch, history]);


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
              <LogoText>
                Федеральное государственное казённое учреждение <br />
                "2 отряд федеральной противопожарной службы по Ростовской области"
              </LogoText>
            </LogoContainer>
          </Row>
        </Container>
      </StyledHeader>
      <HeaderMenu />
    </>
  );
};
