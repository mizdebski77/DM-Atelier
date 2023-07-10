import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 1700px;
    margin: 0 auto;
    min-height: 480px;
    padding: 20px;
`;

export const Title = styled.h3`
    font-size: 40px;
    text-align: center;
    margin: 20px;
    font-style: italic;
    font-weight: normal;
`;

export const OpinionWrapper = styled.div`
    
`;

export const ClientName = styled.div`
    font-size: 36px;
    color: ${({ theme }) => theme.color.secondColor};
    text-align: center;
    font-style: italic;
    margin: 20px;
`;

export const CustomSlider = styled(Slider)`
    max-width: 1700px;
    margin: 0 auto;
    padding: 20px;

    .slick-dots {
        li {
            button:before {
                color: ${({ theme }) => theme.color.secondColor};
                font-size: 16px;
                margin-top: 20px;
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
`;