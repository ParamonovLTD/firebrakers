import styled from 'styled-components';
import { Form, Modal } from 'antd';


export const LoginModal = styled(Modal)`
  width: 308px !important;

  & .ant-modal-header {
    border: none;
  }
  
  & .ant-modal-title {
    font-size: 19px;
    line-height: 23px;
    color: #687674;
  }

  & .ant-modal-body {
    padding: 24px 45px;
  }

  & .ant-modal-footer {
    font-size: 10px;
    line-height: 11px;
    text-align: left;
  }
`

export const StyledLoginForm = styled(Form)`
  & .ant-input-affix-wrapper {
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
  
  & .ant-form-item-control-input-content {
    display: flex;
    justify-content: center;
  }
  
  & .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  & .ant-checkbox-input:focus + .ant-checkbox-inner,
  & .ant-checkbox-checked::after {
    border-color: #7f918f;
  }
  
  & .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #7f918f;
    border: none;
  }
`

export const FormSubmitItem = styled(Form.Item)`
  margin-top: 25px;
  margin-bottom: 0;
  
  & .ant-form-item-control-input-content {
    display: flex;
    justify-content: center;
  }
  
  & button {
    width: 50%;
    background-color: #7f918f;
    border: none;
    border-radius: 3px;
    
    &:hover {
      background-color: #58706d;
    }

    &:focus {
      background-color: #7f918f;
    }
  }
  
`