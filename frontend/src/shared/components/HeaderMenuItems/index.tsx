import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderMenuItem, HeaderSubMenu, StyledMenu } from './style';
import { MenuListItem, MenuListSubItem } from '../../../interfaces/Menu';
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface MenuProps {
  pathname: string,
  itemsList: MenuListItem[],
}

export const HeaderMenuItems: React.FC<MenuProps> = ({pathname, itemsList}) => {
  const { height, width } = useWindowDimensions();

  return (
    <StyledMenu
      mode={width > 780 ? 'horizontal' : 'vertical'}
      theme="light"
      selectedKeys={[pathname]}
    >
      {itemsList.map((item: MenuListItem) => (
        item.subMenuLinks !== null
          ? <HeaderSubMenu key={item.id} title={item.title}>
            {item.subMenuLinks.map((subItem: MenuListSubItem) => (
              <HeaderMenuItem key={subItem.id}>
                <Link to={subItem.url}>{subItem.title}</Link>
              </HeaderMenuItem>
            ))}
          </HeaderSubMenu>
          : <HeaderMenuItem key={item.id}>
            <Link to={item.url}>{item.title}</Link>
          </HeaderMenuItem>
      ))}
    </StyledMenu>
  )
}
