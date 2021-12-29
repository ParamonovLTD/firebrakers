import React, { FC } from 'react';
import { Dropdown, Menu, Button, Row, Avatar } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { BASE_FILES_URL } from '../../../core/constants';
import { User } from '../../../interfaces/Login';

interface Props {
  handleLogout: () => void;
  user: User;
}

export const UserDropdown: FC<Props> = ({ user, handleLogout }) => {
  const history = useHistory();
  const pathWithRole = {
    admin: '/admin/dashboard',
    user: '/dashboard/profile',
    global_seller: '/dashboard/profile',
    local_seller: '/dashboard/profile',
    buyer: '/',
  };
  const handleMenuClick = () => {
    history.push(pathWithRole[user?.role] ?? '/dashboard');
  };

  const menu = (
    <Menu style={{ textAlign: 'center' }}>
      <Menu.Item onClick={handleMenuClick} key={`user-${user.id}`}>
        <Row align="middle" wrap={false}>
          <Avatar
            size={50}
            icon={'q'}
          />
          <Link to="/profile" style={{ marginLeft: 5 }}>
            {user?.id} {user?.firstName} {user?.lastName}
            <br />
            ({user?.role})
          </Link>
        </Row>
      </Menu.Item>
      <Menu.Item onClick={handleLogout} key={`signOut-${user.id}`}>Sign Out</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown trigger={'click' as any} overlay={menu}>
      <Button>
        Account <DownOutlined />
      </Button>
    </Dropdown>
  );
};
