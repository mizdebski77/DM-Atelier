import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Wrapper = styled.nav`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 20px 64px;
`;

export const LogoLink = styled(Link)`

`;

export const Logo = styled.img`
    width: 460px;
`;

export const LinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 64px;
    margin: 0 40px;
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
