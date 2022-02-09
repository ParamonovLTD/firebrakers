import React from 'react';
import { StyledLine } from './styles';

export interface FullwidthUnderlineProps {
  marginBottom?: number;
  marginTop?: number;
  bgcolor?: string;
  height?: number;
}

export const FullwidthUnderline:React.FC<FullwidthUnderlineProps> = ({marginBottom = 0, marginTop = 0, bgcolor = '#ffffff', height = 4}) => (
  <StyledLine
    marginTop={marginTop}
    marginBottom={marginBottom}
    bgcolor={bgcolor}
    height={height}
  />
);
