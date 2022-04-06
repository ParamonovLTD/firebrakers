import React, { useEffect, useState } from 'react';
import { IQuestion } from '../../../interfaces/Test';
import { Col, Radio, Space } from 'antd';
import { QuestionTitle, StudentAnswersWrapper } from './styles';

interface StudentTestQuestionProps {
  question: IQuestion;
  onAnswerSet: (questionId: string, answerId: string) => void;
  selectedAnswerId: string
}

const StudentTestQuestion: React.FC<StudentTestQuestionProps> = ({ question, onAnswerSet, selectedAnswerId }) => {
  const [chosenAnswerId, setChosenAnswerId] = useState<string>('');

  const answerSetHandler = (answerId: string) => {
    setChosenAnswerId(answerId)
    onAnswerSet(question.id, answerId)
  }

  useEffect(() => {
    setChosenAnswerId(selectedAnswerId)
  }, [selectedAnswerId])

  return (
    <div>
      <QuestionTitle>{question.title}</QuestionTitle>

      <StudentAnswersWrapper>
        <Col span={24}>
          <Radio.Group onChange={(e) => answerSetHandler(e.target.value)} value={chosenAnswerId}>
            <Space
              direction="vertical"
              size={20}
              style={{ paddingTop: '5px' }}
            >
              {question.answers.map((answer, index) => (
                <Radio value={question.answers[index].id}>{answer.body}</Radio>
              ))}
            </Space>
          </Radio.Group>
        </Col>
      </StudentAnswersWrapper>
    </div>
  );
};

export default StudentTestQuestion;