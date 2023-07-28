import { motion } from "framer-motion";
import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled(motion.header)`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    max-width: 1700px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns: 1fr;
        padding: 20px 10px;
        gap: 20px;
    };
`;

export const Title = styled.h1`
    font-size: 60px;    
    font-style: italic;
    font-weight: 500;
    margin: 0;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        font-size: 40px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px;
    };
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

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        max-width: 200px;
    };
`;  
