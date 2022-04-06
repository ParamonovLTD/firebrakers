import { notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { MainContainerLandingPage } from '../../shared/GlobalStyles';
import { CreateTestWrapper, TestTitleInput, TestWrapper } from './styles';
import { IQuestion, ITest } from '../../interfaces/Test';
import { v4 as uuidv4 } from 'uuid';
import AdminCreateQuestions from './AdminCreateQuestions';
import { useDispatch } from 'react-redux';
import {
  createTest,
  getAllTests,
  getTestById, updateTest
} from '../../store/slices/testsSlice';
import { useHistory, useParams } from 'react-router-dom';
import { NewsTitle } from '../Home/styles';
import { FullwidthUnderline } from '../../shared/components/FullwidthUnderline';

export const getEmptyQuestion = () => ({
  id: uuidv4(),
  title: '',
  answers: [
    { id: uuidv4(), body: '' },
    { id: uuidv4(), body: '' },
    { id: uuidv4(), body: '' },
    { id: uuidv4(), body: '' },
  ],
  correctAnswerId: ''
})

interface AdminCreateTestProps {
  isUpdate?: boolean;
}

const AdminCreateTest: React.FC<AdminCreateTestProps> = ({ isUpdate = false }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const params: {id?: string} = useParams()


  const [questions, setQuestions] = useState<IQuestion[]>([getEmptyQuestion()])
  const [testTitle, setTestTitle] = useState<string>('')
  const [test, setTest] = useState<ITest>({
    _id: uuidv4(),
    title: testTitle,
    questions,
    results: []
  })

  const getCurrentTest = async () => {
    const testForUpdate: ITest = await dispatch(getTestById(params.id || ''))
    setTestTitle(testForUpdate.title)
    setTest(testForUpdate)
    setQuestions(testForUpdate.questions)
  }

  useEffect(() => {
    if (isUpdate) {
      getCurrentTest()
    }
  }, [isUpdate])


  useEffect(() => {
    setTest({ ...test, questions, title: testTitle })
  }, [questions])

  const [timer, setTimer] = useState<any>()
  const testSubmit = () => {
    clearTimeout(timer)


    setTimer(setTimeout(() => {
      if (testTitle) {
        if (!isUpdate) {
          dispatch(createTest({title: test.title, questions: test.questions}))
        } else {
          dispatch(updateTest({id: test._id, title: test.title, questions: test.questions}))
        }

        dispatch(getAllTests())
        history.push('/adminTests')
      } else {
        notification.error({message: 'Укажите название теста!'})
      }
    }, 700))

  }

  return (
    <MainContainerLandingPage>
      <CreateTestWrapper>
        <NewsTitle level={2}>Добавить тест</NewsTitle>
        <FullwidthUnderline marginBottom={50} />

        <TestWrapper>
          <TestTitleInput placeholder='Название теста' value={testTitle} onChange={(e) => setTestTitle(e.target.value)} />
          <AdminCreateQuestions questions={questions} setQuestions={setQuestions} testSubmit={testSubmit}/>
        </TestWrapper>
      </CreateTestWrapper>
    </MainContainerLandingPage>
  );
};

export default AdminCreateTest;