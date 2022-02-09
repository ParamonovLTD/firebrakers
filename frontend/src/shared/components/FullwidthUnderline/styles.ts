import styled from 'styled-components';
import { FullwidthUnderlineProps } from './index';

export const StyledLine = styled.div<Required<FullwidthUnderlineProps>>`
  position: relative;
  left: 50%;
  width: 98%;
  margin-top: ${props => props.marginTop}px;
  margin-bottom: ${props => props.marginBottom}px;
  height: ${props => props.height}px;
  background-color: ${props => props.bgcolor};
  transform: translateX(-50%);
`;
