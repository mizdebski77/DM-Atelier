import React from 'react';
import { Container, CustomSlider, Image, Text, Title, Wrapper } from './styledAbout';
import ex1 from "../../../../common/Images/Example Images/png-transparent-martini-glass-filled-with-liquid-and-ice-cubes-bacardi-cocktail-vodka-martini-drink-glass-wine-glass-cocktail.png";
import { useInViewAnimation } from '../../../../core/useInViewAnimation';
import { motion } from 'framer-motion';
import { leftAnimation, opacityAnimation, rightAnimation } from '../../../../core/animations';

export const About = () => {
    const { animation, ref } = useInViewAnimation(0.5);

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
            <Title
                as={motion.h2}
                ref={ref}
                variants={rightAnimation}
                initial="hidden"
                animate={animation}
            >Czym się zajmujemy?</Title>
            <Container>

                <Text
                    as={motion.span}
                    ref={ref}
                    variants={leftAnimation}
                    initial="hidden"
                    animate={animation}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus adipisci illum distinctio ex rem ea, eligendi laudantium autem a minima deleniti tenetur quasi error pariatur, nihil dolores amet est.</Text>

                <CustomSlider {...settings}>
                    <Image
                        as={motion.img}
                        ref={ref}
                        variants={opacityAnimation}
                        initial="hidden"
                        animate={animation}
                        src={ex1} />
                </CustomSlider>
            </Container>

        </Wrapper>

    );
};

