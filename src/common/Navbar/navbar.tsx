import React, { useState } from 'react';
import { Links, LinksWrapper, Logo, LogoLink, PhoneLinksWrapper, PhoneNavbar, PhoneNavbarWrapper, Wrapper } from './styledNavbar';
import logo from '../Images/DM Logo.png'
import { Divide as Hamburger } from 'hamburger-react';
import { links } from './Links';
import { AnimatePresence, motion } from 'framer-motion';
import { LinksAnimation, PhoneLinksWrapperAnimation, PhoneWrapperAnimation } from '../../core/animations';

export const Navbar = () => {

    const [phoneNavbar, setPhoneNavbar] = useState<boolean>(false);

    const openPhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };


    return (
        <>
            <Wrapper>
                <LogoLink to="/Strona-Główna"><Logo src={logo} alt='Logo' /> </LogoLink>
                <LinksWrapper>
                    {links.map((link, index) => (
                        <Links key={index} to={link.link} onClick={() => window.scrollTo(0, 0)}>
                            {link.text}
                        </Links>
                    ))}
                </LinksWrapper>
                <PhoneNavbar onClick={openPhoneNavbar}>
                    <Hamburger color='#161616' size={28} />
                </PhoneNavbar>
            </Wrapper>

            <AnimatePresence>
                {phoneNavbar && (
                    <PhoneNavbarWrapper
                        initial="hidden"
                        animate={phoneNavbar ? "visible" : "hidden"}
                        exit="hidden"
                        variants={PhoneWrapperAnimation}
                    >
                        <PhoneLinksWrapper
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={PhoneLinksWrapperAnimation}
                        >
                            {links.map((link, index) => (
                                <Links
                                    key={index} to={link.link} onClick={() => window.scrollTo(0, 0)}
                                    >
                                    {link.text}
                                </Links>

                            ))}
                        </PhoneLinksWrapper>

                    </PhoneNavbarWrapper>
                )}
            </AnimatePresence>



        </>

    );
};

