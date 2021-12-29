import React from 'react';
import styled from 'styled-components';

export const PageTitleText = styled.h3`
  color: #13171c;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 44px;
  }
  @media (max-width: 414px) {
    font-size: 40px;
  }
`;
export const PageTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const PageTitleBorder = styled.div`
  width: 75%;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(#fbda61, #ffc371);
  display: flex;
`;

interface IPageBlockTitle {
  text: string;
}
const PageBlockTitle: React.FC<IPageBlockTitle> = ({ text }) => (
  <PageTitleContainer>
    <PageTitleText>{text}</PageTitleText>
  </PageTitleContainer>
);
export default PageBlockTitle;
