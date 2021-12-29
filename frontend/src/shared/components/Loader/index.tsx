import React, { memo } from 'react';
import { Spin } from 'antd';
import { SpinSize } from 'antd/lib/spin';
import { FullLoaderContainer, LoaderContainer } from './styles';


interface Props {
  global?: boolean,
  size?: SpinSize,
}

export const Loader: React.FC<Props> = memo(({ global = false, size = 'default' }) =>  {
  const Container = global ? FullLoaderContainer : LoaderContainer;
  return (
    <Container>
      <Spin size={size} />
    </Container>
  );
});