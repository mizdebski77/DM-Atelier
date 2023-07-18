import styled from "styled-components";
import background from './Images/background.png'
import { motion } from "framer-motion";

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

export const FullScreenWrapper = styled(motion.section)<{ fullScreenPhoto: boolean }>`
    display: ${({ fullScreenPhoto }) => (fullScreenPhoto ? 'block' : 'none')};
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    padding: 40px;
`;

export const CloseButton = styled.span`
  position: absolute;
  color: white;
  transition: 0.3s;
  cursor: pointer;
  right: 80px;

  :hover {
    transform: scale(1.2);
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
