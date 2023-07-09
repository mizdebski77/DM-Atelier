import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.section`
    background: ${({theme}) => theme.color.secondColor};
    width: 100%;
    padding: 20px;
`;

export const Title = styled.h1`
    color: ${({theme}) => theme.color.mainColor};
    font-weight: normal;
    text-align: center;
    font-size: 48px;
    font-style: italic;
    font-weight: 500;
    margin: 0;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: 1700px;
    margin: 0 auto;
`;

export const Text = styled.span`
    color: ${({theme}) => theme.color.mainColor};
    font-size: 32px;
    font-weight: normal;
    font-style: italic;
    text-align: center;
`;

export const CustomSlider = styled(Slider)`
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
`;

export const Image = styled.img`

`;


