import React, { FC, useCallback, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Row, Select, Menu, Col, Drawer, Dropdown } from 'antd';
import { MenuOutlined, EnvironmentFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  SelectContainerStyled,
  MenuContainer,
  StyledLocationSelect,
  Container,
  WhiteLink,
  MenuDropdown,
  MenuItemDropdown,
  AdminMenuItem, AdminMenu, DropdownValueA,
} from './styles';
// import { userRoleSelector } from '../../../store/slices/authSlice';

import { setAccountCurrency } from '../../../store/slices/accountSlice';
import { HeaderMenuItems } from '../HeaderMenuItems';

const { Option } = Select;

interface DropdownArray {
  id: number,
  title: string,
  value: string,
}

export interface MenuListElem {
  id: number | string;
  title: string;
  url: string;
  isSelect?: boolean;
  dropdownValueArray?: DropdownArray[];
}

const adminBusinessManagementSelect = [
  {
    id: 1,
    title: 'Overall Statistics for Aladyyn',
    value: 'overall',
  },
  {
    id: 2,
    title: 'Seller Statistics',
    value: 'seller',
  },
  {
    id: 3,
    title: 'Service Listing Statistics',
    value: 'listing',
  },
];

const adminSellerManagementSelect = [
  {
    id: 1,
    title: 'Approve Seller requests',
    value: 'approve',
  },
  {
    id: 2,
    title: 'Invite Seller',
    value: 'invite',
  },
  {
    id: 3,
    title: 'Sellers, Orders and Service Listings Management',
    value: 'management',
  },
  {
    id: 4,
    title: 'Seller Statistics',
    value: 'statistics',
  },
];

const adminList: MenuListElem[] = [
  {
    id: '/admin/dashboard',
    title: 'Admin Management',
    url: '/admin/dashboard',
  },
  {
    id: '/admin/sellers',
    title: 'Seller Management',
    url: '/admin/sellers',
    isSelect: true,
    dropdownValueArray: adminSellerManagementSelect,
  },
  {
    id: '/admin/business-management',
    title: 'Business Management',
    url: '/admin/business-management',
    isSelect: true,
    dropdownValueArray: adminBusinessManagementSelect,
  },
  {
    id: '/admin/buyers',
    title: 'Buyer Management',
    url: '/admin/buyers',
  },
  {
    id: '/admin/payment',
    title: 'Payment Management',
    url: '/admin/payment',
  },
  {
    id: '/admin/disputes',
    title: 'Disputes & Refunds Management',
    url: '/admin/disputes',
  },
  {
    id: '/admin/advertisement',
    title: 'Advertisement Management',
    url: '/admin/advertisement',
  },
];

const sellerList: MenuListElem[] = [
  {
    id: '/dashboard',
    title: 'Seller Dashboard',
    url: '/dashboard',
  },
  // {
  //   id: 2,
  //   title: 'Create Listing',
  //   url: '/dashboard/seller-edit-service/create-listing',
  // },
  // {
  //   id: 3,
  //   title: 'My listings',
  //   url: '/seller/listings',
  // },
  {
    id: '/dashboard/seller-orders',
    title: 'Seller Orders',
    url: '/dashboard/seller-orders',
  },
];

const buyerList: MenuListElem[] = [
  {
    id: '/customer-service',
    title: 'Customer Service',
    url: '/customer-service',
  },
  {
    id: '/best-sellers',
    title: 'Best Sellers',
    url: '/best-sellers',
  },
  {
    id: '/become-seller',
    title: 'Become a Seller',
    url: '/become-seller',
  },
];

const userList: MenuListElem[] = [
  {
    id: '/',
    title: 'Главная',
    url: '/',
  },
  {
    id: '/info',
    title: 'Сведения',
    url: '/info',
  },
  {
    id: '/documents',
    title: 'Сведения',
    url: '/documents',
  },
  {
    id: '/education',
    title: 'Обучение',
    url: '/education',
  },
];

export const HeaderMenu: FC = () => {
  // const role = useSelector(userRoleSelector);
  const role = 'user';
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;
  const pathnames = pathname.split('/').filter((item) => item);

  // VISIBILITY DROPDOWN
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (flag: boolean) => {
    setVisible(flag);
  };

  const onSelectChange = (value: any, url: string) => {
    history.push(`${url}/${value}`);
  };

  const dropdownSelect = (array: any, url: string) => (
    <MenuDropdown style={{ padding: 0 }}>
      {array.map((item: DropdownArray) => (
        <MenuItemDropdown
          key={`select-header-${item.id}`}
          onClick={() => history.push(`${url}/${item.value}`)}
          isChosen={location.pathname === `${url}/${item.value}`}
        >
          {item.title}
        </MenuItemDropdown>
      ))}
    </MenuDropdown>
  );

  const defaultValue = <EnvironmentFilled />;

  const [menuLinks, setMenuLinks] = useState<any>([]);

  useEffect(() => {
    switch (role) {
      // case 'admin': {
      //   const mainPathname = location.pathname.split('/').slice(1, 3).join('/');
      //
      //   setMenuLinks(() => (
      //     <AdminMenu
      //       mode="horizontal"
      //       theme="dark"
      //       selectedKeys={[`/${mainPathname}`]}
      //       style={{
      //         display: 'flex',
      //         justifyContent: 'center',
      //         backgroundColor: '#001529',
      //       }}
      //     >
      //       {adminList.map((elem: MenuListElem) => (
      //         <AdminMenuItem key={elem.url}>
      //           {elem.isSelect ?
      //             <Dropdown
      //               overlay={() => dropdownSelect(elem.dropdownValueArray, elem.url)}
      //               placement="bottomCenter"
      //               // trigger={['click']}
      //             >
      //               <DropdownValueA>{elem.title}</DropdownValueA>
      //             </Dropdown>
      //             : <Link to={elem.url}>{elem.title}</Link>
      //           }
      //         </AdminMenuItem>
      //       ))}
      //     </AdminMenu>
      //   ));
      //   break;
      // }

      case 'user': {
        setMenuLinks(() => (
          <HeaderMenuItems
            pathname={pathname}
            itemsList={userList}
          />
        ));
        break;
      }

      default: {
        setMenuLinks(() => (
          <Menu
            mode="horizontal"
            theme="dark"
            selectedKeys={[pathname]}
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#001529',
            }}
          >
            {buyerList.map((elem: MenuListElem) => (
              <Menu.Item key={elem.id}>
                <Link to={elem.url}>{elem.title}</Link>
              </Menu.Item>
            ))}
          </Menu>
        ));
      }
    }
  }, [role, location]);


  return (
    <div style={{ backgroundColor: '#d3d3d3' }}>
      <Container>
        <Row align="middle" justify="center">

          <Col xs={2} sm={8} md={15}>
            {menuLinks}
          </Col>

        </Row>
      </Container>
    </div>
  );
};
