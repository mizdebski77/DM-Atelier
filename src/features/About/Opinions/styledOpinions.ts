import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";

export const Wrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
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
        background: ${({ theme }) => theme.color.mainColor};
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

export const Title = styled.h2`
    font-size: 44px;
    font-weight: normal;
    font-style: italic;
    text-align: center;
    margin: 40px;
`;
