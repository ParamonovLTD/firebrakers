import React from 'react';
import { ITest } from '../../../interfaces/Test';
import { Col, Row } from 'antd';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { AdminTestItemWrapper, TestItemButton, TestItemLink, TestItemLinkCol, TestItemTitle } from './styles';

interface AdminTestsListItemProps {
  test: ITest;
  onStats: (testId: string) => void;
  onDelete: (id: string) => void;
}

const AdminTestsListItem: React.FC<AdminTestsListItemProps> = ({ test, onStats, onDelete }) => {
  return (
    <AdminTestItemWrapper justify='space-between' align='middle'>
      <TestItemTitle>{test.title}</TestItemTitle>
      <Col>
        <Row gutter={20} justify='end'>
          <TestItemLinkCol>
            <TestItemLink to={'/adminTests/update/' + test._id}>
              <BorderColorOutlinedIcon sx={{ color: '#6f8381' }} />
            </TestItemLink>
          </TestItemLinkCol>

          <Col>
            <TestItemButton onClick={() => onStats(test._id)}>
              <InsertChartOutlinedIcon sx={{ color: '#6f8381' }} />
            </TestItemButton>
          </Col>

          <Col>
            <TestItemButton onClick={() => onDelete(test._id)}>
              <DeleteSweepIcon sx={{ color: '#6f8381' }} />
            </TestItemButton>
          </Col>
        </Row>
      </Col>
    </AdminTestItemWrapper>
  );
};

export default AdminTestsListItem;