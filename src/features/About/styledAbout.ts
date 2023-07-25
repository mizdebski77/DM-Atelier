import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.secondColor};
    color: ${({ theme }) => theme.color.mainColor};
    min-height: 100vh;
    padding: 40px;
`;

export const PhotosSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    max-width: 1500px;
    margin: 0 auto;
`;

export const Image = styled.img<{ smaller?: boolean }>`
    border-radius: 50%;
    width: 400px;
    height: 400px;
    border: 2px solid wheat;

    ${({ smaller }) => smaller && css`
        width: 320px;
        height: 320px;
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
`;

export const TextsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 80px;
`;

export const TextElement = styled.p`
    font-size: 28px;
    text-align: center;
    font-weight: normal;
    font-style: italic;
`;

