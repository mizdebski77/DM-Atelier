import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 20px;
`;

export const Logo = styled.img`
    width: 400px;
`;

export const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Links = styled(NavLink)`
    color: ${({theme}) => theme.color.secondColor};
    text-decoration: none;

    :active {
        color: red;
    }
`;