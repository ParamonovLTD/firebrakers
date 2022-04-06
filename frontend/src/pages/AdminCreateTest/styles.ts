import styled from 'styled-components';
import { Button, Input, Space } from 'antd';

export const CreateTestWrapper = styled.div``;

export const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TestTitleInput = styled(Input)`
  display: flex;
  justify-content: center;
  width: 40%;
  margin-bottom: 50px;
  color: #ffffff;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #ffffff;
  
  &::placeholder {
    font-size: 15px;
    color: #ffffff;
    opacity: 0.7;
  }
  
  &:focus {
    border-color: #ffffff !important;
    box-shadow: none;
    caret-color: #ffffff;
  }

  &:hover {
    border-color: #ffffff !important;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const CreateTestButtonsWrapper = styled(Space)``;

export const CreateTestButton = styled(Button)`
  background-color: #6f8381;
  border: none;
  border-radius: 3px;

  &:hover,
  &:focus {
    background-color: #58706d;
  }
`;