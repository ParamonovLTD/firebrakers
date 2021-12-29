import { Menu, Select, Badge, Input, Dropdown, Col } from 'antd';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%; 
  background-color: #58706d;
  color: #ffffff;
`;

export const LogoContainer = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%; 
`;

export const LogoText = styled.div`
  padding-left: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #e7e7e7;
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 2300px;
`;

export const MenuContainer = styled.div`
  * {
    color: #fff;
  }
  > a > span {
    margin-right: 8px;
  }
`;

export const WhiteLink = styled(Link)`
  color: #fff !important;
`;

export const MenuStyled = styled(Menu)`
  width: calc(100% - 260px);
  text-align: center;
`;

export const SelectContainerStyled = styled.div`
  & > div > div,
  span {
    color: #fff;
  }
  @media (max-width: 768px) {
    text-align: right;
  }
`;

export const StyledLocationSelect = styled(Select)`
  margin: -8px;

  @media (max-width: 767px) {
    max-width: 100px;
  }
`;

export const MenuDropdown = styled(Menu)`
  margin-top: 20px;
  color: #fff;
`;

interface MenuItemDropdownProps {
  isChosen: boolean;
}

export const MenuItemDropdown = styled(Menu.Item)<MenuItemDropdownProps>`
  background-color: ${props => props.isChosen ? '#eaf1ff' : '#ffffff'};
  
  &:hover {
    background-color: #EAF1FF;
  }
`;

export const DropdownValueA = styled.a`
`;

export const StyledBadge = styled(Badge)`
  margin-left: auto !important;
`;

export const AdminLogo = styled.a`
  display: flex;
  align-items: flex-end;
  margin-right: 25px;
`;

export const AdminLogoPrefix = styled.div`
  padding-bottom: 9px;
  padding-left: 4px;
  font-family: Lato;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #505357;

  @media (max-width: 600px) {
    padding-bottom: 5px;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const AdminMenuItem = styled(Menu.Item)`
  & {
    position: relative;
    background-color: #001529 !important;
    transition: color 0.5s !important;
  }

  &::before {
    content: "";
    position: absolute;
    right: 0 !important;
    bottom: 8px !important;
    left: 50% !important;
    width: 0;
    height: 1px;
    background-color: #ffffff;
    border-bottom: 0 !important;
    transform: translateX(-50%);
    transition: width 0.5s !important;
  }
`;

export const AdminMenu = styled(Menu)`
  .ant-menu-item-selected${AdminMenuItem}::before,
  .ant-menu-item-active${AdminMenuItem}::before{
    width: 80px;
  }
`;

/* SubMenu */

export const StyledDropdown = styled(Dropdown)`
  .ant-dropdown-menu-vertical {
    display: none;
  }
`;
