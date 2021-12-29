import { RightOutlined } from '@ant-design/icons';
import React, { FC, memo } from 'react';
import { GoToSellerButton, GoToSellerButtonText } from './styles';

interface Props {
  onClick: () => void,
  title: string
}
export const GoToButton: FC<Props> = memo(({ onClick, title }) => (
  <GoToSellerButton
    onClick={onClick}
  >
    <RightOutlined style={{ fontSize: 18 }} />
    <GoToSellerButtonText>{title}</GoToSellerButtonText>
  </GoToSellerButton>
));