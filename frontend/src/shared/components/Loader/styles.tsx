import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  padding: 15px;
  width: 50px;
  height: 50px;
`;

export const FullLoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000022;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;