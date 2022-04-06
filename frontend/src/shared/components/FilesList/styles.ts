import styled from 'styled-components';
import { Space } from 'antd';

export const FilesListWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const FilesSpace = styled(Space)`
  width: 60%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  
  @media (max-width: 768px) {
    width: 80%;
  }
  
  @media (max-width: 586px) {
    width: 100%;
  }
`