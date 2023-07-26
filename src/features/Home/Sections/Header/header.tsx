
import React from 'react';
import { CustomSlider, Image, Paragraph, Title, Wrapper } from './styledHeader';
import ex1 from "../../../../common/Images/Example Images/png-transparent-martini-glass-filled-with-liquid-and-ice-cubes-bacardi-cocktail-vodka-martini-drink-glass-wine-glass-cocktail.png";
import { useInViewAnimation } from '../../../../core/useInViewAnimation';
import { motion } from 'framer-motion';
import { opacityAnimation } from '../../../../core/animations';

export const Header = () => {

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


            >D'M Atelier <Paragraph>z miłości do barmaństwa</Paragraph> </Title>
            <CustomSlider {...settings}>
                <Image
                    src={ex1}
                    as={motion.img}
                    ref={ref}
                    variants={opacityAnimation}
                    initial="hidden"
                    animate={animation}
                    alt='Header Image'
                />
            </CustomSlider>
        </Wrapper>
    );
};

