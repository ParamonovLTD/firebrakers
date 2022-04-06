import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTestResult, testByIdSelector } from '../../../store/slices/testsSlice';
import { RootState } from '../../../store/store';
import StudentTestQuestion from '../StudentTestQuestion';
import {
  ArrowQuestion,
  CompletedQuestion,
  QuestionLink,
  QuestionsPagination,
  QuestionWrapper,
  TestSubmitButton
} from './styles';
import { v4 as uuidv4 } from 'uuid';
import { userIdSelector, userNameSelector } from '../../../store/slices/authSlice';
import { MainContainerLandingPage } from '../../GlobalStyles';
import { NewsTitle } from '../../../pages/Home/styles';

interface StudentPassTestProps {
  isAnswered: boolean;
}

const StudentPassTest: React.FC<StudentPassTestProps> = ({ isAnswered }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector(userIdSelector)
  const username = useSelector(userNameSelector)

  const { id } = useParams<{ id: string }>()
  const { _id: testId, questions, title } = useSelector((state: RootState) => testByIdSelector(state, id))
  const [page, setPage] = useState<number>(1)
  const [studentAnswers, setStudentAnswers] = useState<string[]>(Array(questions.length).fill(''))

  const onAnswerSet = (questionId: string, answerId: string) => {
    const currentQuestionIndex = questions.findIndex(question => question.id === questionId)

    setStudentAnswers(prevState => {
      const prevStateCopy = [...prevState]
      const selectedAnswer = prevStateCopy.splice(currentQuestionIndex, 1, answerId)

      return prevStateCopy
    })
  }

  const onTestSubmit = () => {
    const emptyQuestionIndex = studentAnswers.findIndex(answer => answer === '')
    const correctAnswersQuantity = questions.reduce((sum, question, index) => {
      if (question.correctAnswerId === studentAnswers[index]) sum += 1
      return sum
    }, 0)

    if (emptyQuestionIndex === -1) {
      dispatch(setTestResult(testId, { id: uuidv4(), userId: userId || '', score: correctAnswersQuantity, username: username || 'Неопознанный пользователь' }))
      history.push('/tests')
    } else {
      notification.error({message: `Выберите ответ в вопросе №${emptyQuestionIndex+1}`})
    }
  }

  const itemRender = (
    curPage: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: any
  ) => {
    if (type === 'page' && studentAnswers[curPage-1]) {
      return <CompletedQuestion>{curPage}</CompletedQuestion>
    }
    if (type === 'page') {
      return <QuestionLink>{curPage}</QuestionLink>
    }
    if (['prev', 'next'].includes(type)) {
      return <ArrowQuestion>{originalElement}</ArrowQuestion>
    }

    return originalElement
  }
  return (
    <MainContainerLandingPage>
      <NewsTitle level={2} style={{ textAlign: 'center' }}>{title}</NewsTitle>

      <QuestionWrapper md={{span: 16, offset: 4}}>
        <StudentTestQuestion
          question={questions.filter((question, index) => index+1 === page)[0]}
          onAnswerSet={onAnswerSet}
          selectedAnswerId={studentAnswers[page-1]}
        />
        <QuestionsPagination
          current={page}
          total={questions.length}
          pageSize={1}
          responsive={true}
          onChange={(page) => setPage(page)}
          itemRender={itemRender}
        />
        <TestSubmitButton
          onClick={onTestSubmit}
          disabled={studentAnswers.findIndex(answer => answer === '') !== -1}
        >
          Завершить
        </TestSubmitButton>
      </QuestionWrapper>


    </MainContainerLandingPage>
  );
};

export default StudentPassTest;