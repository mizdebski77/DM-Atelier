import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.header`
     width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    max-width: 1700px;
    margin: 0 auto;
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 60px;    
    font-style: italic;
    font-weight: 500;
    margin: 0;
    text-align: center;
`;

export const Paragraph = styled.p`
    margin: 0;
`;

export const Image = styled.img`
`;

export const CustomSlider = styled(Slider)`
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
`;  
