import React, { useState } from 'react';
import { Links, LinksWrapper, Logo, LogoLink, PhoneLinksWrapper, PhoneNavbar, PhoneNavbarWrapper, Wrapper } from './styledNavbar';
import logo from '../Images/DM Logo.png'
import { Divide as Hamburger } from 'hamburger-react';
import { links } from './Links';
import { AnimatePresence } from 'framer-motion';

export const Navbar = () => {

    const [phoneNavbar, setPhoneNavbar] = useState<boolean>(false);
    const [scrolledNavbar, setScrolledNavbar] = useState<boolean>(false);

    const openPhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };

    const changedNavColor = () => {
        if (window.scrollY > 10) {
            setScrolledNavbar(true);
        } else {
            setScrolledNavbar(false)
        }
    };

    window.addEventListener("scroll", changedNavColor);


    return (
        <>
            <Wrapper scrolled={scrolledNavbar}>
                <LogoLink to="/Strona-Główna"><Logo src={logo} alt='Logo' /> </LogoLink>
                <LinksWrapper>
                    {links.map((link, index) => (
                        <Links key={index} to={link.link}>
                            {link.text}
                        </Links>
                    ))}
                </LinksWrapper>

                <PhoneNavbar onClick={openPhoneNavbar}>
                    <Hamburger color='#161616' size={28} />
                </PhoneNavbar>


            </Wrapper>
            <AnimatePresence>

                {phoneNavbar ? (
                    <PhoneNavbarWrapper
                        initial={{ height: 0 }}
                        animate={{
                            height: 320
                        }}
                        exit={{
                            height: 0,
                            transition: { delay: 1, duration: 0.3 }
                        }}
                    >
                        <PhoneLinksWrapper>
                            {links.map((link, index) => (
                                <Links key={index} to={link.link}>
                                    {link.text}
                                </Links>
                            ))}
                        </PhoneLinksWrapper>

                    </PhoneNavbarWrapper>
                ) : null}
            </AnimatePresence>



        </>

    );
};

