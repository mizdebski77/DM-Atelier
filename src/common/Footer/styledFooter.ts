import styled from "styled-components";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";

export const Wrapper = styled.footer`
    display: flex;
    align-items:center;
    justify-content: space-around;
    padding: 20px;
    height: 480px;
    border-top: 1px solid ${({theme}) => theme.color.secondColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: grid;
        padding: 10px;
        justify-content: center;
    };
`;

export const LogoLink = styled(Link)`
    display: flex;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 320px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 200px;
    };
`;

export const ContactWrapper = styled.div`
    display: grid;
`;

export const FooterTitle = styled.span`
    font-size: 36px;
    text-align: center;
    font-weight: bold;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    };
`;

export const ContactElement = styled.p`
    font-size: 24px;
    margin: 10px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;

export const Socials = styled.div`
    display: grid;
    justify-content: center;
    gap: 16px;
`;

export const SVGLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        margin: 0;
    };
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