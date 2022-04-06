import styled from 'styled-components';

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

export const MainContainerLandingPage = styled.div`
  max-width: 1240px;
  width: 100%;
  min-height: calc(100vh - 441px);
  margin: 0 auto;
  padding: 60px 20px 40px;
  
  
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

export const ImageFluid = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;
