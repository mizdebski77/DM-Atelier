import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: grid;
    gap: 40px;
`;




export const AboutWrapper = styled.section`
    background: ${({theme}) => theme.color.secondColor};
    width: 100%;
    padding: 20px;
`;

export const AboutTitle = styled.h2`
    color: ${({theme}) => theme.color.mainColor};
    font-weight: normal;
    text-align: center;
    font-size: 40px;
    font-style: italic;
    font-weight: 500;
    margin: 0;
`;

export const AboutSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`;

export const AboutText = styled.span`
    color: ${({theme}) => theme.color.mainColor};
    font-size: 32px;
    font-weight: normal;
    font-style: italic;
    text-align: center;
`;

export const AboutSlider = styled(Slider)`
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
`;

export const AboutImage = styled.img`

`;

export const OppionsWrapper = styled.section`

`;


