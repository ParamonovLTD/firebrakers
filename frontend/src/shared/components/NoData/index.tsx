import { Empty } from 'antd';
import React, { FC, memo } from 'react';
import styled from 'styled-components';

const EmptyContainer = styled.div`
  width: 100%;
`;
export const NoData: FC = memo(() => (
  <EmptyContainer>
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  </EmptyContainer>
));