import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Wrapper = styled.nav <{ scrolled: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    position: sticky;
    z-index: 10;
    top:0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 10px;
    };

    ${({ scrolled }) => scrolled && css`
        background: ${({ theme }) => theme.color.mainColor};
        border-bottom: 1px solid ${({ theme }) => theme.color.secondColor};
    `};
`;

export const LogoLink = styled(Link)`
    margin: 0 0 0 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        margin: 0;
    };
`;

export const Logo = styled.img`
    width: 240px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 160px;
    };
`;

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
    margin: 0 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: none;
    }
  `;

const activeClassName = "active";

export const Links = styled(NavLink)`
    color: ${({ theme }) => theme.color.secondColor};
    text-decoration: none;
    font-size: 20px;
    text-align: center;
    border-radius: 20px;
    transition: 0.5s;
    text-underline-offset: 6px;
    padding: 10px 12px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
        padding: 16px;
    };

    &:hover {
        transform: translateY(-5px);
        text-decoration: underline;
    };

    &.${activeClassName} {
        background: ${({ theme }) => theme.color.secondColor};
        color: ${({ theme }) => theme.color.mainColor};

        @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
            color: ${({ theme }) => theme.color.mainColor};
            background: transparent;
            border-bottom: 1px solid ${({ theme }) => theme.color.mainColor};
            border-radius: 0px;
         }

        &:hover {
            transform: none;
            text-decoration: none;
        }
    }
`;

export const PhoneNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;
    

   @media (min-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: none;
  }
`;

export const PhoneNavbarWrapper = styled(motion.div)`
    background: ${({ theme }) => theme.color.thirdColor};
    position: fixed;
    width: 100%;
    z-index: 10;

    @media (min-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: none;
    }
`;

export const PhoneLinksWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
`;
