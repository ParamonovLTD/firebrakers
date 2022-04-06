import styled from 'styled-components';
import { Button, Col, Pagination } from 'antd';

export const QuestionWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;

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
`

export const QuestionsPagination = styled(Pagination)`
  margin-bottom: 30px;
  .ant-pagination-item {
    border: none;
  }

  .ant-pagination-item-active {
    & a {
      background-color: #607774 !important;
      color: #ffffff !important;
    }
  }
`

export const TestSubmitButton = styled(Button)`
  align-self: center;
  width: 200px;
  border-radius: 5px;
  
  &:hover {
    color: #617875;
    border-color: #617875;
  }
`


export const QuestionLink = styled.a`
  font-weight: 700;
  font-size: 14px;
  color: #617875 !important;
  border: 1px solid #617875;
  border-radius: 5px;

  &:hover {
    border-color: #272d29;
  }

`

export const CompletedQuestion = styled(QuestionLink)`
  background-color: #b1bcba;
`;

export const ArrowQuestion = styled.div`
  & button {
    background-color: transparent !important;
    border: none !important;
  }
  & svg {
    color: #617875 !important;
    transition: 0.3s;
    
  }

  &:not([disabled]):hover svg {
    transform: scale(1.3);
  }
`;