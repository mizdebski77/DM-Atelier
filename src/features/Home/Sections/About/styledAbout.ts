import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.section`
    background: ${({theme}) => theme.color.secondColor};
    width: 100%;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 10px;
    };
`;

export const Title = styled.h2`
    color: ${({theme}) => theme.color.mainColor};
    font-weight: normal;
    text-align: center;
    font-size: 40px;
    font-style: italic;
    font-weight: 500;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
        margin: 0 0 20px;
    };
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: 1700px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns: 1fr;
        gap: 20px;
    };
`;

export const Text = styled.span`
    color: ${({theme}) => theme.color.mainColor};
    font-size: 28px;
    font-weight: normal;
    font-style: italic;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;

export const CustomSlider = styled(Slider)`
    max-width: 300px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        max-width: 120px;
    };
`;

export const Image = styled.img`

`;


