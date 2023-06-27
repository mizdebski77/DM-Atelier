import React, { useState } from 'react';
import { Links, LinksWrapper, Logo, LogoLink, PhoneNavbar, Wrapper } from './styledNavbar';
import logo from '../Images/DM Logo.png'
import { Divide as Hamburger } from 'hamburger-react';

export const Navbar = () => {

    const [phoneNavbar, setPhoneNavbar] = useState<Boolean>(false);
    const openPhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };

    console.log(phoneNavbar)


    return (
        <Wrapper>
            <LogoLink to="/Strona-Główna"><Logo src={logo} alt='Logo' /> </LogoLink>
            <LinksWrapper>
                <Links to="/Strona-Główna">Strona Główna</Links>
                <Links to="/Oferta">Oferta</Links>
                <Links to="O-firmie">O firmie</Links>
                <Links to="Kontakt">Kontakt</Links>
            </LinksWrapper>
            <PhoneNavbar onClick={openPhoneNavbar}>
                <Hamburger color='#f9f5f0' size={24} />

            </PhoneNavbar>


        </Wrapper>
    );
};

