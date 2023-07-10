import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 20px;
    min-height: 480px;
`;

export const Container = styled.div`
    max-width: 1700px;
    margin: 0 auto;
    background: ${({ theme }) => theme.color.secondColor};
`;

export const Title = styled.h4`
    font-size: 40px;
    font-style: italic;
    font-weight: normal;
    text-align: center;
    margin: 20px 20px 40px;
    color: ${({ theme }) => theme.color.mainColor};
`;

export const CustomSwiper = styled(Swiper)`
  max-width: 1500px;
  width: 100%;
  padding: 40px;

    .swiper-slide-active{
      opacity: 1;
      scale: 1.2;
    }

    .swiper-button-next {
      color: ${({ theme }) => theme.color.mainColor};
      position: fixed;
    }

    .swiper-button-prev {
      color: ${({ theme }) => theme.color.mainColor};
      position: fixed;
    }
`;

export const CustomSlider = styled(SwiperSlide)`
  opacity: 0.3;
  scale: 0.8;
`;

export const Image = styled.img`
  width: 100%;
`;