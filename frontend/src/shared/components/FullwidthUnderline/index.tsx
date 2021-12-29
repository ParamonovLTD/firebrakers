import React from 'react';
import { StyledLine } from './styles';

export interface FullwidthUnderlineProps {
  marginBottom: number;
  bgcolor?: string;
  height?: number;
}

export const FullwidthUnderline:React.FC<FullwidthUnderlineProps> = ({marginBottom, bgcolor = '#ffffff', height = 4}) => (
  <StyledLine
    marginBottom={marginBottom}
    bgcolor={bgcolor}
    height={height}
  />
);
