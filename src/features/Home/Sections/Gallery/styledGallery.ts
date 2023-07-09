import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Wrapper = styled.section`
    background: ${({theme}) => theme.color.secondColor};
    width: 100%;
    padding: 20px;
`;


export const Container = styled.div`
    max-width: 1700px;
    margin: 0 auto;
    background: ${({theme}) => theme.color.secondColor};
    padding: 20px;
`;

export const Title = styled.h4`
    font-size: 48px;
    font-style: italic;
    font-weight: normal;
    text-align: center;
    margin: 0;
    margin: 20px;
    color: ${({theme}) => theme.color.mainColor};
`;

export const CustomSwiper = styled(Swiper)`
  width: 800px;

    .swiper-cube-shadow:before {
      background: ${({theme}) => theme.color.mainColor};
      filter: blur(90px);
    }

    .swiper-button-next {
      color: ${({theme}) => theme.color.mainColor};
      position: fixed;
    }

    .swiper-button-prev {
      color: ${({theme}) => theme.color.mainColor};
      position: fixed;
    }
`;

export const CustomSlider = styled(SwiperSlide)`

`;

export const Image = styled.img`
  width: 100%;`;  