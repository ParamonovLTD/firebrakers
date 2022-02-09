import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Select, Col, Button } from 'antd';
import { MenuOutlined, EnvironmentFilled } from '@ant-design/icons';
import {
  Container, LoginButton, MenuWrapper,
} from './styles';
import { HeaderMenuItems } from '../HeaderMenuItems';
import { MenuListItem } from '../../../interfaces/Menu';
import LoginButtonIcon from '../LoginButtonIcon';
import LoginForm, { LoginValues } from '../LoginForm';

const userList: MenuListItem[] = [
  {
    id: '/',
    title: 'Главная',
    url: '/',
    subMenuLinks: null,
  },
  {
    id: '/info',
    title: 'Сведения',
    url: '/info',
    subMenuLinks: [
      {
        id: '/123',
        title: 'link',
        url: '/123',
      },
      {
        id: '/1234',
        title: 'link1',
        url: '/1234',
      },
      {
        id: '/12345',
        title: 'link2',
        url: '/12345',
      }
    ],
  },
  {
    id: '/documents',
    title: 'Документы',
    url: '/documents',
    subMenuLinks: null,
  },
  {
    id: '/education',
    title: 'Обучение',
    url: '/education',
    subMenuLinks: null,
  },
];

const MenuLayout = {
  sm: {
    span: 22
  },
  md: {
    span: 16,
    offset: 4
  }
}

const LoginLayout = {
  md: {
    span: 4
  }
}

export const HeaderMenu: FC = () => {
  // const role = useSelector(userRoleSelector);
  const role = 'user';
  const location = useLocation();
  const { pathname } = location;


  const defaultValue = <EnvironmentFilled />;

  const [menuLinks, setMenuLinks] = useState<any>([]);
  const [modalVisible, setModalVisible] = useState(false)

  const onCreate = (values: LoginValues) => {
    console.log('Received values of form: ', values);
    setModalVisible(false);
  };

  useEffect(() => {
    switch (role) {
      case 'user': {
        setMenuLinks(() => (
          <HeaderMenuItems
            pathname={pathname}
            itemsList={userList}
          />
        ));
        break;
      }

      default: return
    }
  }, [role, location]);


  return (
    <div style={{ backgroundColor: '#d3d3d3' }}>
      <MenuWrapper>
        <Row align="middle" justify="start">

          <Col {...MenuLayout}>
            {menuLinks}
          </Col>

          <Col {...LoginLayout} style={{display: 'flex', justifyContent: 'flex-end'}}>
            <LoginButton
              type="link"
              onClick={() => setModalVisible(true)}
              icon={<LoginButtonIcon />}
            >
              Войти
            </LoginButton>
            <LoginForm
              visible={modalVisible}
              onCreate={onCreate}
              onCancel={() => setModalVisible(false)}
            />
          </Col>

        </Row>
      </MenuWrapper>
    </div>
  );
};
