import styled from 'styled-components';
import { Col, Radio } from 'antd';

export const CreateQuestionsWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

export const CreateRadioButton = styled(Radio)`
  width: 100%;
  
  & > span + span {
    display: block;
    width: 100%;
  }
`;