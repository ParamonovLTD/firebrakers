import { Menu } from 'antd';

import styled from 'styled-components';

export const StyledMenu = styled(Menu)`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 5px;
  background-color: #d3d3d3;
  border-bottom-color: #d3d3d3 !important;

  &.ant-menu-submenu-popup {
    background-color: blue !important;
  }

  @media (max-width: 780px) {
    flex-direction: column;
  }

  // Vertical
  &.ant-menu-vertical {
    border-right: none;
  }
  
  &:not(.ant-menu-horizontal) .ant-menu-item-selected {
    position: relative;
    background-color: transparent;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0 !important;
      left: 5px;
      width: 2px;
      height: 100%;
      background-color: #fff;
    }
  }

  &:not(.ant-menu-horizontal) .ant-menu-submenu-selected .ant-menu-submenu-title {
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0 !important;
      left: 5px;
      width: 2px;
      height: 100%;
      background-color: #fff;
    }
  }
  
  & .ant-menu-submenu-title {
    position: relative;
    background-color: transparent;
  }

  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
    color: #6a6a6a;
  }
`;

export const HeaderMenuItem = styled(Menu.Item)`
  & {
    display: flex !important;
    align-items: center;
    height: 42px;
  }
  
  & span {
    font-size: 24px;
    line-height: 30px;
  }

  & a {
    color: #6a6a6a !important;
  }

  &::after {
    z-index: 1;
    bottom: -7px !important;
  }

  &.ant-menu-item-selected::after,
  &:hover::after {
    border-bottom: 2px solid #ffffff !important;
  }
`;

export const HeaderSubMenu = styled(Menu.SubMenu)`
  & {
    display: flex !important;
    align-items: center;
    height: 42px;
  }
  
  & .ant-menu-submenu-title {
    font-size: 24px;
    line-height: 30px;
    color: #6a6a6a !important;

    &:active {
      background-color: transparent;
    }
  }

  &::after {
    z-index: 1;
    bottom: -7px !important;
  }

  &.ant-menu-submenu-selected::after,
  &:hover::after {
    border-bottom-color: #ffffff !important;
  }
`;