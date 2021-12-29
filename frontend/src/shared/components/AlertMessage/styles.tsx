import styled from 'styled-components';
import { CloseOutlined, WarningOutlined } from '@ant-design/icons';

export const AlertContainer = styled.div`
  border: 1px solid #ffe58f;
  background-color: #fffbe6;
  padding: 15px;
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconWarning = styled(WarningOutlined)`
  color: orange;
  font-size: 25px;
`;

export const StyledSpan = styled.span`
  margin-left: 10px;
  font-size: 24px;
  font-weight: 600;
`;

export const StyledText = styled.span`
  font-size: 16px;
  color: #505357;
`;

export const IconClose = styled(CloseOutlined)`
  color: #9a9fa5;
  font-size: 20px;
`;

export const Animation = styled.div`
`;