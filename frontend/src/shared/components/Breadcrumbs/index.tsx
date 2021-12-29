import React, { FC, memo } from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledBreadcrumbs, StyledBreadcrumbsLink } from './styles';

interface BreadcrumbsProps {
  breadcrumbsData: string[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbsData }) => {
  const location = useLocation();

  const { pathname } = location;
  const pathnames = pathname.split('/').filter((item) => item);

  return (
    <StyledBreadcrumbs>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Breadcrumb.Item key={name}>
            <StyledBreadcrumbsLink to="#">{breadcrumbsData[index]}</StyledBreadcrumbsLink>
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={name}>
            <Link to={`${routeTo}`}>{breadcrumbsData[index]}</Link>
          </Breadcrumb.Item>
        );
      })}
    </StyledBreadcrumbs>
  );
};

export default memo(Breadcrumbs);
