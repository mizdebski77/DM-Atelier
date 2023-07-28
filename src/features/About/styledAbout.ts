import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.secondColor};
    color: ${({ theme }) => theme.color.mainColor};
    min-height: 100vh;
    padding: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 10px;
        gap: 20px;
    };
`;

export const PhotosSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    max-width: 1500px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 10px;
    };
`;

export const Image = styled.img<{ smaller?: boolean }>`
    border-radius: 50%;
    width: 400px;
    height: 400px;
    border: 2px solid wheat;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 240px;
        height: 240px;    
    };

    ${({ smaller }) => smaller && css`
        width: 320px;
        height: 320px;

        @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
            display: none;
    };
    `};
`;

export const TextSection = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
`;

export const Title = styled.h1`
    font-size: 44px;
    font-weight: normal;
    font-style: italic;
    text-align: center;
    margin: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px ;
        margin: 20px;
    };
`;

export const TextsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: grid;
        gap: 20px;
    };

`;

export const TextElement = styled.p`
    font-size: 28px;
    text-align: center;
    font-weight: normal;
    font-style: italic;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
        margin: 0;
    };
`;

