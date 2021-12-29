import { Select } from 'antd';
import React, { memo } from 'react';
import { SortText, SortBar } from './styles';


interface Props {
  sort: any,
  onChangeSort: (value: string) => void
}

const orders = [
  {
    orderType: null,
    orderValue: null,
    label: 'Not sorted',
  },
  {
    orderType: 'listing.fixedPrice',
    orderValue: 'ASC',
    label: 'Price: Low to High',
  },
  {
    orderType: 'listing.fixedPrice',
    orderValue: 'DESC',
    label: 'Price: High to Low',
  },
  {
    orderType: 'rate',
    orderValue: 'ASC',
    label: 'Rating: Low to High',
  },
  {
    orderType: 'rate',
    orderValue: 'DESC',
    label: 'Rating: High to Low',
  },
];

export const SortSelect = memo((props: Props) => (
  <SortBar>
    <SortText>Sort by</SortText>
    <Select
      showArrow
      style={{ width: '100%' }}
      placeholder="Order by"
      value={props.sort.orderLabel}
      onChange={props.onChangeSort}
    >
      {
        orders.map((order: any) => (
          <Select.Option
            key={`sort-by-${order.label}`}
            value={order.orderType ? `${order.orderType}|${order.orderValue}` : ''}
          >
            <b>{order.label}</b>
          </Select.Option>
        ))
      }
    </Select>
  </SortBar>
));