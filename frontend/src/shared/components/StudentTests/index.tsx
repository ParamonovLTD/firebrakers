import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { StudentTestsWrapper } from './styles';
import { ITest } from '../../../interfaces/Test';
import { useDispatch, useSelector } from 'react-redux';
import { allTestsSelector, getAllTests } from '../../../store/slices/testsSlice';
import { TestsList } from '../AdminTests/styles';
import StudentTestsListItem from '../StudentTestsListItem';

const StudentTests: React.FC = () => {
  const dispatch = useDispatch()
  const tests: ITest[] = useSelector(allTestsSelector)

  useEffect(() => {
    dispatch(getAllTests())
  }, [])

  return (
    <StudentTestsWrapper>
      <TestsList>
        {tests.map(test => (
          <Col>
            <StudentTestsListItem
              test={test}
            />
          </Col>
        ))}
      </TestsList>
    </StudentTestsWrapper>
  );
};

export default StudentTests;