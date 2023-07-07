import React from 'react';
import { ClientName, CustomSlider, Opinion, OpinionWrapper, Title, Wrapper } from './styledOpinions';
import { opinions } from './clitentsOpinions';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Opinions = () => {

    return (
        <Wrapper>
            <Title>Opinie naszych klientów</Title>
            <CustomSlider>
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

