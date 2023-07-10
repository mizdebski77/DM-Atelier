import { Link } from "react-router-dom";
import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Wrapper = styled.footer`
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 80px;
    min-height: 540px;
`;

export const Logo = styled.img`
    width: 320px;
`;

export const ContactWrapper = styled.div`
    display: grid;
`;

export const FooterTitle = styled.span`
    font-size: 36px;
    text-align: center;
    font-weight: bold;
`;

export const ContactElement = styled.p`
    font-size: 24px;
    margin: 10px;
    text-align: center;
`;

export const SVGLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`;

export const SVGLink = styled.a`
    transition: 1s;
    width: 32px;
    height: 32px;
    :hover{
        transform: rotate3d(2, 0, 1, 360deg);
        cursor: pointer;
    }

    :active{
        transform: scale(1.15);
    }
`;

export const Image = styled(SVG)`
    width: 32px;
`;