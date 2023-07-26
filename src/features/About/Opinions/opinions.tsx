import React from 'react';
import { CustomSlide, CustomSwiper, Name, Opinion, Title, Wrapper } from './styledOpinions';
import { Navigation, EffectCoverflow, Pagination } from 'swiper/modules';
import { opinions } from '../../Home/Sections/Opinions/clitentsOpinions';

export const Opinions = () => {

    return (
        <Wrapper>
            <Title>
                Opinie naszych klientów</Title>

            <CustomSwiper<React.ComponentType<any>>
                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView={3}
                modules={[Navigation, EffectCoverflow, Pagination]}
                spaceBetween={100}
                pagination={{
                    clickable: true,
                }}
                navigation
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
            >
                {opinions.map((opinion) => (
                    <CustomSlide key={opinion.id}>
                        <Name>{opinion.name}</Name>
                        <Opinion>{opinion.contents}</Opinion>
                    </CustomSlide>
                ))}
            </CustomSwiper>

        </Wrapper>
    );
};

