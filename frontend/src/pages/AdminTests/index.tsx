import { MainContainerLandingPage } from '../../shared/GlobalStyles';
import { NewsTitle } from '../Home/styles';
import { FullwidthUnderline } from '../../shared/components/FullwidthUnderline';
import React from 'react';
import AdminTests from '../../shared/components/AdminTests';

const AdminTestsPage: React.FC = () => {
  return (
    <MainContainerLandingPage>
      <NewsTitle level={2}>Онлайн тестирование</NewsTitle>
      <FullwidthUnderline marginBottom={50} />

      <AdminTests />
    </MainContainerLandingPage>
  );
};

export default AdminTestsPage;