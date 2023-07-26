import styled from "styled-components";
import background from './Images/background.png'
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

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

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      height: 200px;
  };
`;

export const Title = styled.h1`
    position: absolute;
    color: ${({ theme }) => theme.color.mainColor};
    font-size: 88px;
    font-weight: normal;
    font-style: italic;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      font-size: 36px;
  };
`;

export const GalleryWrapper = styled.div`
    column-count: 4;
    max-width: 1500px;
    margin: 0 auto;
    padding: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      column-count: 2;
      padding: 10px;
  };
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

      @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        transform: none;
      };
    }
`;

export const FullScreenWrapper = styled(motion.section) <{ fullScreenPhoto: boolean }>`
    display: ${({ fullScreenPhoto }) => (fullScreenPhoto ? 'block' : 'none')};
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    padding: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 10px;
    };
`;

export const CloseButton = styled.button`
  position: fixed;
  z-index: 1;
  top: 20px;
  color: white;
  transition: 0.3s;
  cursor: pointer;
  right: 80px;
  background: transparent;
  border: none;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    right: 10px;
  };
  :hover {
    transform: scale(1.2);

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        transform: none;
      };
  }
`;

export const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
`;

export const FullScreenImage = styled(motion.img)`
    max-height: 100%;
    max-width: 100%;
    user-select: none;
`;

export const CustomSwiper = styled(Swiper) <{ fullScreenPhoto: boolean }>`
    width: 100%;
    height: 100%;
`;

export const CustomSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
`;