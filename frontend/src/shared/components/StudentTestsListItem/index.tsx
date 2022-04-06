import {
  TestItemTitle
} from '../AdminTestsListItem/styles';
import { Col } from 'antd';
import React from 'react';
import { PassTestLink, StudentTestItemWrapper } from './styles';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { ITest } from '../../../interfaces/Test';

interface StudentTestsListItemProps {
  test: ITest;
}

const StudentTestsListItem: React.FC<StudentTestsListItemProps> = ({ test }) => {
  return (
    <StudentTestItemWrapper justify='space-between' align='middle'>
      <TestItemTitle>{test.title}</TestItemTitle>
      <Col>
        <PassTestLink to={'/tests/' + test._id}>
          <BorderColorOutlinedIcon sx={{ color: '#6f8381' }} />
          Пройти тест
        </PassTestLink>
      </Col>
    </StudentTestItemWrapper>
  );
};

export default StudentTestsListItem;