import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

export const StyledBreadcrumbs = styled(Breadcrumb)`
  margin-bottom: 56px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 4%;
  }
`;

export const StyledBreadcrumbsLink = styled(Link)`
  color: #69a1f4 !important;
  cursor: unset;
`;
