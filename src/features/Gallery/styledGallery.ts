import styled from "styled-components";
import background from './Images/background.png'

export const Wrapper = styled.section`
    min-height: 100vh;
    background: ${({ theme }) => theme.color.secondColor};
`;

export const MainWrapper = styled.div`
    margin: 0 auto;
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    position: absolute;
    color: ${({ theme }) => theme.color.mainColor};
    font-size: 88px;
    font-weight: normal;
    font-style: italic;
`;

export const GalleryWrapper = styled.div`
    column-count: 4;
    max-width: 1500px;
    margin: 0 auto;
    padding: 40px;
`;

export const Pics = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    cursor: pointer;
    transition: 0.3s linear;

    :hover {
        transform: scale(1.04);

    }


`;