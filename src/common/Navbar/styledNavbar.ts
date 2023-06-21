import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Wrapper = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    gap: 20px;
`;

export const LogoLink = styled(Link)`
    margin: 0 0 0 40px;
`;

export const Logo = styled.img`
    width: 280px;
`;

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
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
    min-width: 140px;    

    &:hover {
        transform: translateY(-5px);
        text-decoration: underline;
    }

    &.${activeClassName} {
        background: ${({ theme }) => theme.color.secondColor};
        padding: 10px;
        color: ${({ theme }) => theme.color.mainColor};

        &:hover {
            transform: none;
            text-decoration: none;
        }
    }
`;
