import React, { useState } from 'react';
import AdminTestQuestion from '../../../shared/components/AdminTestQuestion';
import { IQuestion } from '../../../interfaces/Test';
import { Form } from 'antd';
import { getEmptyQuestion } from '../index';
import { CreateTestButton, CreateTestButtonsWrapper } from '../styles';
import { CreateQuestionsWrapper } from './styles';

interface AdminCreateQuestionsProps {
  questions: IQuestion[];
  setQuestions: React.Dispatch<React.SetStateAction<IQuestion[]>>;
  testSubmit: () => void;
}

const AdminCreateQuestions: React.FC<AdminCreateQuestionsProps> = ({ questions, setQuestions, testSubmit }) => {
  const [addButtonClicked, setAddButtonClicked] = useState<boolean>(false)
  const [deleteButtonId, setDeleteButtonId] = useState<string | null>(null)
  const AddQuestionClick = () => {
    setAddButtonClicked(true)
  }

  const setQuestionOnSave = (questionToSave: IQuestion, isError?: boolean) => {
    if (questionToSave.id !== questions[questions.length - 1].id) return
    if (isError) return

    const questionsCopy = [...questions]
    questionsCopy.pop()
    questionsCopy.push(questionToSave)
    questionsCopy.push(getEmptyQuestion())

    setQuestions(questionsCopy)
  }

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)

  const createTest = (isError: boolean) => {
    if (!isError) {
      testSubmit()
    } else {
      console.log('submit error')
    }

    setIsFormSubmitted(false)
  }

  const onSubmitQuestion = (question: IQuestion, isError?: boolean) => {
    if (!isError) {
      setQuestions(prevState => {
        const prevStateCopy = [...prevState]
        const questionIndex = prevStateCopy.findIndex(prevQuestion => prevQuestion.id === question.id)
        const updatedQuestions = prevStateCopy.splice(questionIndex, 1, question)

        return prevStateCopy
      })
    }

    if (question.id === questions[questions.length - 1].id) {
      createTest(isError ?? false)
    }
  }

  const questionsCopy = [...questions]

  const onQuestionDelete = (question: IQuestion) => {
    if (questions.length === 1) return

    if (question.id === deleteButtonId) {
      const questionToDeleteIndex = questions.findIndex(curQuestion => curQuestion.id === question.id)
      const deletedQuestion = questionsCopy.splice(questionToDeleteIndex, 1)

      if (questions[questions.length-1].id === question.id) {
        setQuestions(questionsCopy)
        setDeleteButtonId(null)
        return
      }
    }

    if (questions[questions.length-1].id === question.id) {
      questionsCopy.pop()
      questionsCopy.push(question)

      setQuestions(questionsCopy)
      setDeleteButtonId(null)
    }
  }

  return (
    <CreateQuestionsWrapper>
      {questions.map(question => (
        <AdminTestQuestion
          question={question}
          setQuestionOnSave={setQuestionOnSave}
          addButtonClicked={addButtonClicked}
          setAddButtonClicked={setAddButtonClicked}
          onSubmit={onSubmitQuestion}
          isFormSubmitted={isFormSubmitted}
          setIsFormSubmitted={setIsFormSubmitted}
          onQuestionDelete={onQuestionDelete}
          deleteButtonId={deleteButtonId}
          setDeleteButtonId={setDeleteButtonId}
          key={question.id}
        />
      ))}
      <CreateTestButtonsWrapper size={20}>
        <Form.Item>
          <CreateTestButton type="primary" htmlType="button" onClick={AddQuestionClick}>
            Add
          </CreateTestButton>
        </Form.Item>
        <Form.Item>
          <CreateTestButton type="primary" htmlType="submit" onClick={() => setIsFormSubmitted(true)}>
            Submit
          </CreateTestButton>
        </Form.Item>
      </CreateTestButtonsWrapper>

    </CreateQuestionsWrapper>
  );
};

export default AdminCreateQuestions;