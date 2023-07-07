import React from 'react';
import { ClientName, CustomSlider, Opinion, OpinionWrapper, Title, Wrapper } from './styledOpinions';
import { opinions } from './clitentsOpinions';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Opinions = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
    };

    return (
        <Wrapper>
            <Title>Opinie naszych klientów</Title>
            <CustomSlider {...settings}>
                {opinions.map((opinion) => (
                    <OpinionWrapper>
                        <ClientName>{opinion.name}</ClientName>;
                        <Opinion>{opinion.contents}</Opinion>;
                    </OpinionWrapper>
                ))}

            </CustomSlider>

        </Wrapper>
    );
};

