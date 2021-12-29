import { Menu } from 'antd';

import styled from 'styled-components';

export const StyledMenu = styled(Menu)`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 5px;
  background-color: #d3d3d3;
  border-bottom-color: #d3d3d3 !important;
`;

export const HeaderMenuItem = styled(Menu.Item)`
  & a {
    font-size: 24px;
    line-height: 30px;
    color: #6a6a6a !important;
  }

  &::after {
    z-index: 1;
    bottom: -7px !important;
  }

  &.ant-menu-item-selected::after,
  &:hover::after {
    border-bottom-color: #ffffff !important;
  }
`;