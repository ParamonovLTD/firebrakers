import styled from 'styled-components';
import { Form } from 'antd';

export const RegisterFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledRegisterForm = styled(Form)`
  width: 55%;
  padding: 60px 10px 60px 0;
  background-color: #fafafa;
  border-radius: 35px;
  
  & .ant-input {
    min-height: 38px;
    background-color: #fafafa;
    border: 2px solid #58706D;
    border-radius: 7px;

    &:focus,
    &-focused {
      box-shadow: 0 0 0 2px rgb(88 112 109 / 20%);
    }
  }
  
  & .ant-form-item-control-input-content {
    display: flex;
    justify-content: center;
  }
  
  & .ant-form-item-label > label {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #676767;
    
    &::after {
      //display: none;
    }
  }
  
  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    color: #676767 !important;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
  
  @media (max-width: 575px) {
    width: 100%;
    padding: 40px 10px;
  }
`