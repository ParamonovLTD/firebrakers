import React, { memo } from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import { MainContainerWithPadding } from '../../shared/GlobalStyles';

export const NotFoundPage = () => (
  <MainContainerWithPadding>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
    />
  </MainContainerWithPadding>
);

export default memo(NotFoundPage);
