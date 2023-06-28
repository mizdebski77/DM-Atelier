import React, { useState } from 'react';
import { Links, LinksWrapper, Logo, LogoLink, PhoneNavbar, PhoneNavbarWrapper, Wrapper } from './styledNavbar';
import logo from '../Images/DM Logo.png'
import { Divide as Hamburger } from 'hamburger-react';
import { links } from './Links';

export const Navbar = () => {

    const [phoneNavbar, setPhoneNavbar] = useState<Boolean>(false);

    const openPhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };

    console.log(links)


    return (
        <>
            <Wrapper>
                <LogoLink to="/Strona-Główna"><Logo src={logo} alt='Logo' /> </LogoLink>
                <LinksWrapper>
                    {links.map((link, index) => (
                        <Links key={index} to={link.link}>
                            {link.text}
                        </Links>
                    ))}
                </LinksWrapper>

                <PhoneNavbar onClick={openPhoneNavbar}>
                    <Hamburger color='#161616' size={34} />
                </PhoneNavbar>


            </Wrapper>
            {phoneNavbar === true ? (
                <PhoneNavbarWrapper>
                    {links.map((link, index) => (
                        <Links key={index} to={link.link}>
                            {link.text}
                        </Links>
                    ))}
                </PhoneNavbarWrapper>
            ) : null}


        </>

    );
};

