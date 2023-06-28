import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Wrapper = styled.nav`
    width: 100%;
    align-items: center;
    padding: 20px 40px;
    gap: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 10px;
    };
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
        width: 200px;
    };
`;

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    margin: 0 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        gap: 20px;
        margin: 0;
    };
        
    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: none;
    }
  `;

const activeClassName = "active";

export const Links = styled(NavLink)`
    color: ${({ theme }) => theme.color.secondColor};
    text-decoration: none;
    font-size: 16px;
    text-align: center;
    border-radius: 20px;
    transition: 0.5s;
    text-underline-offset: 6px;
    padding: 12px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        color: ${({theme}) => theme.color.mainColor};
        padding: 10px;
        border-radius: 0;
    }

    &:hover {
        transform: translateY(-5px);
        text-decoration: underline;
    }

    &.${activeClassName} {
        background: ${({ theme }) => theme.color.secondColor};
        padding: 10px;
        color: ${({ theme }) => theme.color.mainColor};

        @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
            color: ${({theme}) => theme.color.mainColor};
            border-bottom: 1px solid ${({theme}) => theme.color.mainColor};
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

export const PhoneNavbarWrapper = styled.div`
    background: ${({theme}) => theme.color.secondColor};
    position: fixed;
    display: grid;
    gap: 20px;
    width: 100%;
    padding: 20px;

    @media (min-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: none;
  }
`;


