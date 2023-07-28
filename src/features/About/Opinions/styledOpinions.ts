import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 10px;
`;

export const Title = styled.h2`
    font-size: 44px;
    font-weight: normal;
    font-style: italic;
    text-align: center;
    margin: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px;
    };
`;


export const OpinionsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;

    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      grid-template-columns: 1fr;
      max-width: 400px;
    };
`;

export const OpinionCard= styled.div`
  margin: 0 auto;
  display: grid;
  border: 2px solid ${({ theme }) => theme.color.mainColor};
  margin: 0;
  border-radius: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      width: 100%;
    };
`;

export const Name = styled.span`
    text-align: center;
    font-size: 40px;
    margin: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      font-size: 24px;
  };
`;

export const Opinion = styled.span`
    text-align: center;
    font-size: 24px;
    margin: 0 20px 20px 20px;
    font-style: italic;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      font-size: 16px;
  };
`;

