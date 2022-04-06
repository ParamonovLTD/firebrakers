import React, { useEffect, useState } from 'react';
import { IQuestion } from '../../../interfaces/Test';
import { AnswersWrapper, QuestionDeleteBtn, QuestionForm, QuestionWrapper } from './styles';
import { Col, Form, Input, Radio, Space } from 'antd';
import { useParams } from 'react-router-dom';
import { CreateRadioButton } from '../../../pages/AdminCreateTest/AdminCreateQuestions/styles';
import { CloseOutlined } from '@ant-design/icons';

interface AdminTestQuestionProps {
  question: IQuestion;
  setQuestionOnSave: (questionToSave: IQuestion) => void;
  addButtonClicked: boolean;
  setAddButtonClicked: any;
  onSubmit: (question: IQuestion) => void;
  isFormSubmitted: boolean;
  setIsFormSubmitted: (isSubmitted: boolean) => void;
  onQuestionDelete: (question: IQuestion) => void;
  deleteButtonId: string | null;
  setDeleteButtonId: any;
}

interface QuestionFormValues {
  questionTitle: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
}

const AdminTestQuestion: React.FC<AdminTestQuestionProps> =
  ({ question,
     setQuestionOnSave,
     addButtonClicked,
     setAddButtonClicked,
     isFormSubmitted,
     onSubmit,
     setIsFormSubmitted,
     onQuestionDelete,
     deleteButtonId,
     setDeleteButtonId,
  }) => {
  const params: {id?: string} = useParams()
  const [form] = Form.useForm();
  const [correctAnswerId, setCorrectAnswerId] = useState<string>(question?.answers[0].id);


  useEffect(() => {
    // if (params.id) {
      setCorrectAnswerId(question.correctAnswerId || question.answers[0].id)
      form.setFieldsValue({'questionTitle': question.title })
      form.setFieldsValue({'answer1': question.answers[0].body })
      form.setFieldsValue({'answer2': question.answers[1].body })
      form.setFieldsValue({'answer3': question.answers[2].body })
      form.setFieldsValue({'answer4': question.answers[3].body })
    // }
  }, [question])

  const saveToCallback = (cb: any) => {
    form
      .validateFields()
      .then((values: QuestionFormValues) => {
        const questionToSave = {
          id: question.id,
          title: values.questionTitle,
          answers: [
            { id: question.answers[0].id, body: values.answer1 },
            { id: question.answers[1].id, body: values.answer2 },
            { id: question.answers[2].id, body: values.answer3 },
            { id: question.answers[3].id, body: values.answer4 },
          ],
          correctAnswerId: correctAnswerId,
        }
        cb(questionToSave)
      })
      .catch((e) => {
        if (e.errorFields.length) {
          cb({id: question.id} , true)
        }
      })
  }

  if (addButtonClicked) {
    setAddButtonClicked(false)

    saveToCallback(setQuestionOnSave)
  }

  if (isFormSubmitted) {
    saveToCallback(onSubmit)
  }

  if (deleteButtonId) {
    saveToCallback(onQuestionDelete)
  }

  return (
    <QuestionWrapper>
      <QuestionForm
        form={form}
        name="createQuestion"
        autoComplete="off"
      >
        <QuestionDeleteBtn onClick={() => setDeleteButtonId(question.id)}/>
        <Form.Item
          name="questionTitle"
          wrapperCol={{ span: 12 }}
          rules={[{ required: true, message: 'Введите вопрос!' }]}
        >
          <Input placeholder='Вопрос' style={{ marginBottom: '10px' }} />
        </Form.Item>

        <AnswersWrapper>
          <Col span={24}>
            <Radio.Group
              onChange={(e) => setCorrectAnswerId(e.target.value)}
              value={correctAnswerId}
              style={{ width: '100%' }}
            >
              <Space
                direction="vertical"
                size={10}
                style={{ paddingTop: '5px', width: '100%' }}
              >
                {question.answers.map((answer, index) => (
                  <CreateRadioButton value={answer.id}>
                    <Form.Item
                      name={`answer${index+1}`}
                      wrapperCol={{ span: 24 }}
                      rules={[{ required: true, message: 'Введите ответ!' }]}
                    >
                      <Input placeholder={`Ответ №${index+1}`} />
                    </Form.Item>
                  </CreateRadioButton>
                ))}
              </Space>
            </Radio.Group>
          </Col>
        </AnswersWrapper>
      </QuestionForm>
    </QuestionWrapper>
  );
};

export default AdminTestQuestion;