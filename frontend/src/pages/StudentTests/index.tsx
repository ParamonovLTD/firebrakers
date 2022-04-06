import { MainContainerLandingPage } from '../../shared/GlobalStyles';
import { NewsTitle } from '../Home/styles';
import { FullwidthUnderline } from '../../shared/components/FullwidthUnderline';
import React from 'react';
import StudentTests from '../../shared/components/StudentTests';

const StudentTestsPage: React.FC = () => {
  return (
    <MainContainerLandingPage>
      <NewsTitle level={2}>Онлайн тестирование</NewsTitle>
      <FullwidthUnderline marginBottom={50} />

      <StudentTests />
    </MainContainerLandingPage>
  );
};

export default StudentTestsPage;