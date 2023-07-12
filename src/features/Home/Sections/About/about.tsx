import React from 'react';
import { Container, CustomSlider, Image, Text, Title, Wrapper } from './styledAbout';
import ex1 from "../../../../common/Images/Example Images/png-transparent-martini-glass-filled-with-liquid-and-ice-cubes-bacardi-cocktail-vodka-martini-drink-glass-wine-glass-cocktail.png";

export const About = () => {

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
            <Title>Czym się zajmujemy?</Title>
            <Container>

                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus adipisci illum distinctio ex rem ea, eligendi laudantium autem a minima deleniti tenetur quasi error pariatur, nihil dolores amet est.</Text>

                <CustomSlider {...settings}>
                    <Image src={ex1} />
                </CustomSlider>
            </Container>

        </Wrapper>

    );
};

