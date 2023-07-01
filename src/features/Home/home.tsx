import React from 'react';
import { CustomSlider, Header, Image, Paragraph, Title, Wrapper } from './styledHome';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ex1 from '../../common/Images/Example Images/pngwing.com (1).png'
export const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <Wrapper>
            <Header>
                <Title>D'M Atelier <Paragraph>z miłości do barmaństwa</Paragraph> </Title>
                <CustomSlider {...settings}>
                    <Image src={ex1} />
                    <Image src={ex1} />
                    <Image src={ex1} />\
                </CustomSlider>
            </Header>

        </Wrapper>
    );
};

