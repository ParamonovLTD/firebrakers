import styled from 'styled-components';
import { Col, Form, Row } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export const QuestionWrapper = styled(Col)`
  width: 60%;
  padding: 40px 30px;
  background-color: #ffffff;
  border-radius: 10px;

  & input {
    min-height: 38px;

    &:not(.ant-input-affix-wrapper-disabled):hover {
      border-color: #7f918f;
    }

    &:focus,
    &-focused {
      border-color: #7f918f;
      box-shadow: 0 0 0 2px rgb(88 112 109 / 20%);
    }
  }

  & .ant-radio:hover .ant-radio-inner {
    border-color: #535653;
  }

  & .ant-radio-input:focus + .ant-radio-inner {
    border-color: #7f918f;
    box-shadow: 0 0 0 2px rgb(88 112 109 / 20%);
  }

  & .ant-radio-inner {
    border-color: #7f918f;

    &::after {
      background-color: #7f918f;
    }
  }

  & .ant-form-item-control-input-content {
    display: flex;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    width: 80%;
    padding-top: 55px;
  }

  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const QuestionForm = styled(Form)`
  position: relative;
  width: 100%;
`;

export const QuestionDeleteBtn = styled(CloseOutlined)`
  position: absolute;
  z-index: 1;
  right: -10px;
  top: -20px;
  font-size: 19px;
  cursor: pointer;

  @media (max-width: 768px) {
    top: -35px;
  }
`;

export const AnswersWrapper = styled(Row)`
  gap: 10px;
`;

