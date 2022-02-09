import styled from 'styled-components';
import { Row } from 'antd';

export const FeaturesRow = styled(Row)`
  justify-content: space-between;
  
  @media (max-width: 768px) {
    gap: 100px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`
