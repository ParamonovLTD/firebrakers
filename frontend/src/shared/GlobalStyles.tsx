import styled from 'styled-components';
import { Button } from 'antd';

export const aladyynColors = {
  main: '#69A1F4',
  hoverGradientStart: '#7A9CF3',
  hoverGradientEnd: '#74ADF0',
  blueGradientStart: '#5E86EF',
  blueGradientEnd: '#7A9CF3',
  select: '#EAF1FF',
  yellow: '#FFDC85',
  yellowGradientStart: '#FFDC85',
  yellowGradientEnd: '#FCC863',
  header: '#13171C',
  text: '#505357',
  subtext: '#9A9FA5',
  border: '#D6D9DE',
  borderForCard: '#F1F2F4',
  white: '#FFFFFF',
  background: '#F6F6F7',
  error: '#F46E66',
};

export const aladyynTextSyles = {
  captionRegular: `
    font-weight: 400;
    font-size: 13px;
    line-height: 1.2;
    `,
  mainBold: `
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    `,
};

export const H1 = styled.h1`
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const StyledBorder = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: auto auto;
  height: 100%;
`;

export const AuthFormWrapper = styled.div`
  padding: 8% 16%;
  margin-top: 56px;
  background-color: #fff;
  box-shadow: 2px 4px 8px rgba(89, 97, 117, 0.08);
  border-radius: 4px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const UnderFormBlock = styled(AuthFormWrapper)`
  padding: 3% 0;
  margin-top: 0;
  text-align: center;
  margin-bottom: 40px;
  p {
    margin: 0;
    > a {
      margin-left: 20px;
      text-decoration: underline;
    }
  }
`;

export const UnderFormBlockParagraph = styled.p`
  margin: revert !important;
`;

export const StyledButton = styled(Button)`
  color: #fff;
  height: 100%;
  font-size: 16px;
  padding: 15px 20%;
  background-color: #2475c4;
`;

export const CenterTextDiv = styled.div`
  text-align: center;
`;

export const MainContainerWide = styled.div`
  width: 100%;
  min-height: calc(100vh - 441px);
  margin: 0 auto;
  padding: 0 0 40px 0px;
  max-width: 2400px;
`;

export const MainContainerLandingPage = styled.div`
  max-width: 1240px;
  width: 100%;
  min-height: calc(100vh - 441px);
  margin: 0 auto;
  padding: 100px 20px 40px;
  
  
  @media (max-width: 768px) {
    padding: 20px 20px 40px;
  }
`;

export const MainContainerWithPadding = styled.div`
  width: 100%;
  min-height: calc(100vh - 453px);
  padding: 24px 120px;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 4% 8%;
  }
`;

export const FormWrapper = styled.div`
  padding: 48px 32px;
  box-shadow: 2px 4px 8px rgba(89, 97, 117, 0.08);
  border-radius: 4px;
  height: 100%;
  background-color: #fff;
  @media (max-width: 768px) {
    padding: 7px;
  }
`;

export const FlexPageWrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  min-height: calc(100vh - 441px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center
  margin: auto;
`;

export const ModalFormWrapper = styled.div`
  padding: 0;
`;

export const ModalFormTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #13171c;
`;

export const ImageFluid = styled.img`
  max-width: 100%;
  height: auto;
`;
