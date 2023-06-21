import React from 'react';
import { Links, LinksWrapper, Logo, LogoLink, Wrapper } from './styledNavbar';
import logo from '../Images/DM Logo.png'

export const Navbar = () => {
    return (
        <Wrapper>
            <LogoLink to="/Strona-Główna"><Logo src={logo} alt='Logo'/> </LogoLink>
            <LinksWrapper>
                <Links to="/Strona-Główna">Strona Główna</Links>
                <Links to="/Oferta">Oferta</Links>
                <Links to="O-firmie">O firmie</Links>
                <Links to="Kontakt">Kontakt</Links>
            </LinksWrapper>
        </Wrapper>
    );
};

