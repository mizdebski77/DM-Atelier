import React, { useState } from 'react';
import { Links, LinksWrapper, Logo, LogoLink, PhoneNavbar, PhoneNavbarWrapper, Wrapper } from './styledNavbar';
import logo from '../Images/DM Logo.png'
import { Divide as Hamburger } from 'hamburger-react';
import { links } from './Links';
import { motion } from 'framer-motion';

export const Navbar = () => {

    const [phoneNavbar, setPhoneNavbar] = useState<boolean>(false);
    const [scrolledNavbar, setScrolledNavbar] = useState<boolean>(false);

    const openPhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };

    const changedNavColor = () => {
        if (window.scrollY > 50) {
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
                    <Hamburger color='#161616' size={34} />
                </PhoneNavbar>


            </Wrapper>
            {phoneNavbar ? (
                <motion.div
                    initial={{ opacity: 0, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <PhoneNavbarWrapper>
                        {links.map((link, index) => (
                            <Links key={index} to={link.link}>
                                {link.text}
                            </Links>
                        ))}
                    </PhoneNavbarWrapper>
                </motion.div>
            ) : null}


        </>

    );
};

