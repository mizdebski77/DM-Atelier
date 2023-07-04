import React from 'react';
import { AboutImage, AboutSection, AboutSlider, AboutText, AboutTitle, AboutWrapper, OppionsWrapper, Wrapper } from './styledHome';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from './Sections/Header/header';
export const Home = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        fade: true,
        arrows: false,
    };
    return (
        <Wrapper>
            <Header />

            <AboutWrapper>
                <AboutTitle>Czym się zajmujemy?</AboutTitle>
                <AboutSection>
                    <AboutText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus adipisci illum distinctio ex rem ea, eligendi laudantium autem a minima deleniti tenetur quasi error pariatur, nihil dolores amet est.</AboutText>
                    <AboutSlider {...settings}>
                        {/* <AboutImage src={ex1} />
                        <AboutImage src={ex2} /> */}
                    </AboutSlider>
                </AboutSection>
            </AboutWrapper>

            <OppionsWrapper>
                xd
            </OppionsWrapper>

        </Wrapper>
    );
};

