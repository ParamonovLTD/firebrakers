import styled from 'styled-components';

export const GoToSellerButton = styled.div`
  color: #69A1F4;
  border: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  background-color: #fff;
  box-shadow: 2px 4px 8px rgba(89, 97, 117, 0.08);
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  
  @media (max-width: 450px) {
    font-size: 14px;
    
    & > span {
      font-size: 10px!important;
    }
  }

  @media (max-width: 380px) {
    font-size: 11px;
  }
`;
export const GoToSellerButtonText = styled.div`
  display: inline-block;
  padding-left: 8px;
`;