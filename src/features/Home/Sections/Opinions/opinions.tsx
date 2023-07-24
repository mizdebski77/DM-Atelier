import React from 'react';
import { ClientName, CustomSlider, Opinion, OpinionWrapper, Title, Wrapper } from './styledOpinions';
import { opinions } from './clitentsOpinions';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInViewAnimation } from '../../../../core/useInViewAnimation';
import { sectionAnimation } from '../../../../core/animations';

export const Opinions = () => {

    const { animation, ref } = useInViewAnimation(0.5);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        arrows: false,
    };


    return (
        <Wrapper
            ref={ref}
            variants={sectionAnimation}
            initial="hidden"
            animate={animation}
        >
            <Title>Opinie naszych klientów</Title>
            <CustomSlider {...settings}>
                {opinions.map((opinion) => (
                    <OpinionWrapper key={opinion.id}>
                        <ClientName>{opinion.name}</ClientName>
                        <Opinion>{opinion.contents}</Opinion>
                    </OpinionWrapper>
                ))}

            </CustomSlider>

        </Wrapper>
    );
};

