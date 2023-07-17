import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

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
<<<<<<< HEAD
    border: 2px solid wheat;
=======
    box-shadow: 4px 4px 10px ${({theme}) => theme.color.mainColor};
>>>>>>> features/about

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

export const CustomSwiper = styled(Swiper)`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
    
   
    .swiper-button-next {
      color: ${({ theme }) => theme.color.mainColor};
    }

    .swiper-button-prev {
      color: ${({ theme }) => theme.color.mainColor};
    }

    .swiper-pagination {
       position: static;
       margin-top: 20px;
    }

    .swiper-pagination-bullet {
        background: ${({theme}) => theme.color.mainColor};
    }
`;

export const CustomSlide = styled(SwiperSlide)`
    display: grid;
    border: 2px solid ${({ theme }) => theme.color.mainColor};
    margin: 0;
`;

export const Name = styled.span`
    text-align: center;
    font-size: 36px;
    margin: 20px;
`;

export const Opinion = styled.span`
    text-align: center;
    font-size: 24px;
    margin: 0 20px 20px 20px;
`;