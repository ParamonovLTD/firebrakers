import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuListElem } from '../Header/HeaderMenu';
import { HeaderMenuItem, StyledMenu } from './style';

interface MenuProps {
  pathname: string,
  itemsList: MenuListElem[],
}

export const HeaderMenuItems: React.FC<MenuProps> = ({pathname, itemsList}) => (
  <StyledMenu
    mode="horizontal"
    theme="light"
    selectedKeys={[pathname]}
  >
    {itemsList.map((elem: MenuListElem) => (
      <HeaderMenuItem key={elem.id}>
        <Link to={elem.url}>{elem.title}</Link>
      </HeaderMenuItem>
    ))}
  </StyledMenu>
);
