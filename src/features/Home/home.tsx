import React from 'react';
import {  Wrapper } from './styledHome';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from './Sections/Header/header';
import { About } from './Sections/About/about';

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
            <About />
        </Wrapper>
    );
};

