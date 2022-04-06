import React, { useCallback, useEffect, useState } from 'react';
import { Col, Divider, Modal, Row } from 'antd';
import { AdminTestsWrapper, CreateLink, TestsList } from './styles';
import QueueIcon from '@mui/icons-material/Queue';
import AdminTestsListItem from '../AdminTestsListItem';
import { ITest } from '../../../interfaces/Test';
import { useDispatch, useSelector } from 'react-redux';
import { allTestsSelector, deleteTest, getAllTests } from '../../../store/slices/testsSlice';

const AdminTests: React.FC = () => {
  const dispatch = useDispatch()

  const tests: ITest[] = useSelector(allTestsSelector)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [testIdForStats, setTestIdForStats] = useState<string>('');

  const testForResults = tests.find(test => test._id === testIdForStats)

  useEffect(() => {
    dispatch(getAllTests())
  }, [])

  const onGetStats = useCallback((testId: string) => {
    setTestIdForStats(testId)
    setIsModalVisible(true)
  }, [tests])

  const onTestDelete = useCallback(async (testId) => {
    await dispatch(deleteTest(testId))
    await dispatch(getAllTests())
  }, [tests])


  return (
    <AdminTestsWrapper>
      <Row justify='end' align='middle'>

        <CreateLink to='/adminTests/create'>
          <QueueIcon sx={{ color: '#6f8381' }} />
          Добавить тест
        </CreateLink>
      </Row>
      <TestsList>
        {tests.map(test => (
          <Col>
            <AdminTestsListItem
              test={test}
              onStats={onGetStats}
              onDelete={onTestDelete}
            />
          </Col>
        ))}
        <Modal
          title="Результаты теста"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          {testForResults?.results.map(result => (
            <>
              <Row justify='space-between'>
                <Col>{result.username}</Col>
                <Col>{`${result.score}/${testForResults.questions.length}`}</Col>
              </Row>
              <Divider style={{ margin: '15px 0' }}/>
            </>
          ))}
        </Modal>
      </TestsList>
    </AdminTestsWrapper>
  );
};

export default AdminTests;