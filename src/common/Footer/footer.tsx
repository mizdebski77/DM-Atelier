import React from 'react';
import { ContactElement, ContactWrapper, FooterTitle, Image, Logo, LogoLink, SVGLink, SVGLinks, Socials, Wrapper } from './styledFooter';
import logo from '../Images/DM Logo.png';
import insta from '../Images/Socials/instagra,.svg'
import website from '../Images/Socials/webiste.svg'
import mail from '../Images/Socials/mail.svg'
import fb from '../Images/Socials/facebook.svg'
import { Link } from 'react-router-dom';



export const Footer = () => {

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Wrapper>
            <LogoLink to="./Strona-Główna" onClick={handleClick}>
                <Logo src={logo} />
            </LogoLink>
            <ContactWrapper>
                <FooterTitle>Kontakt:</FooterTitle>
                <ContactElement>Adres: Legionów Polskich 34</ContactElement>
                <ContactElement>Telefon: 501375604</ContactElement>
                <ContactElement>Nip: 534645234</ContactElement>
            </ContactWrapper>

            <Socials>
                <FooterTitle> Znajdziesz nas na:</FooterTitle>
                <SVGLinks>
                    <SVGLink><Image src={insta} /></SVGLink>
                    <SVGLink><Image src={website} /> </SVGLink>
                    <SVGLink><Image src={mail} /></SVGLink>
                    <SVGLink><Image src={fb} /></SVGLink>
                </SVGLinks>
            </Socials>
        </Wrapper>
    );
};
