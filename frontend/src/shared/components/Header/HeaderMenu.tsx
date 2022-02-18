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
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticatedSelector, login, logout, userRoleSelector } from '../../../store/slices/authSlice';
import { useHistory } from 'react-router';

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

const adminList: MenuListItem[] = [
  {
    id: '/',
    title: 'Главная',
    url: '/',
    subMenuLinks: null,
  },
  {
    id: '/add',
    title: 'Добавить студента',
    url: '/add',
    subMenuLinks: null,
  },
  {
    id: '/adminTests',
    title: 'Тесты',
    url: '/adminTests',
    subMenuLinks: null,
  },
];

const studentList: MenuListItem[] = [
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
  {
    id: '/tests',
    title: 'Тесты',
    url: '/tests',
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
  const role = useSelector(userRoleSelector);
  const dispatch = useDispatch()
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;


  const defaultValue = <EnvironmentFilled />;

  const [menuLinks, setMenuLinks] = useState<any>([]);
  const [modalVisible, setModalVisible] = useState(false)


  const isAuth = useSelector(isAuthenticatedSelector)

  const onCreate = (values: LoginValues) => {
    dispatch(login(values))
    history.push('/')
  };

  const onLogout = () => {
    dispatch(logout())
    history.push('/')
  };

  useEffect(() => {
    if(isAuth) {
      setModalVisible(false);
    }
  }, [isAuth]);

  useEffect(() => {
    switch (role) {
      case 'admin': {
        setMenuLinks(() => (
          <HeaderMenuItems
            pathname={pathname}
            itemsList={adminList}
          />
        ));
        break;
      }

      case 'student': {
        setMenuLinks(() => (
          <HeaderMenuItems
            pathname={pathname}
            itemsList={studentList}
          />
        ));
        break;
      }

      default: {
        setMenuLinks(() => (
          <HeaderMenuItems
            pathname={pathname}
            itemsList={userList}
          />
        ));
        break;
      }

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
            {!isAuth
              ?
                <>
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
                </>
              :
                <LoginButton
                  type="link"
                  onClick={onLogout}
                  icon={<LoginButtonIcon />}
                >
                  Выйти
                </LoginButton>

            }

          </Col>

        </Row>
      </MenuWrapper>
    </div>
  );
};
