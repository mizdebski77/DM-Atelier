import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 1700px;
    margin: 0 auto;
    min-height: 480px;
    padding: 20px;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 10px;
        min-height: 340px;
    };
`;

export const Title = styled.h3`
    font-size: 40px;
    text-align: center;
    margin: 20px;
    font-style: italic;
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
        margin: 0 0 20px;
    };
`;

export const OpinionWrapper = styled.div`
    
`;

export const ClientName = styled.div`
    font-size: 36px;
    color: ${({ theme }) => theme.color.secondColor};
    text-align: center;
    font-style: italic;
    margin: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
    };
`;

export const CustomSlider = styled(Slider)`
    max-width: 1700px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        max-width: 320px;
        padding: 0;
    };

    .slick-dots {
        li {
            button:before {
                color: ${({ theme }) => theme.color.secondColor};
                font-size: 16px;
                margin-top: 20px;

                @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
                    font-size: 8px;
                };
        }
    }
  }
`;

export const Opinion = styled.div`
    color: ${({ theme }) => theme.color.secondColor};
    font-style: italic;
    font-size: 28px;
    max-width: 800px;
    text-align: center;
    margin: 0 auto;
    font-weight: 100;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;