import styled from 'styled-components';
import { Button } from 'antd';

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

export const ImageFluid = styled.img`
  max-width: 100%;
  height: auto;
`;
