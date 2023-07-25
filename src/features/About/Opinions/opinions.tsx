import React from 'react';
import { CustomSlide, CustomSwiper, Name, Opinion, Title, Wrapper } from './styledOpinions';
import { Navigation, EffectCoverflow, Pagination } from 'swiper/modules';
import { opinions } from '../../Home/Sections/Opinions/clitentsOpinions';
import { useInViewAnimation } from '../../../core/useInViewAnimation';
import { motion } from 'framer-motion';
import { sectionAnimation } from '../../../core/animations';

export const Opinions = () => {

    const { animation, ref } = useInViewAnimation(0.5);

    return (
        <Wrapper
            as={motion.div}
            ref={ref}
            variants={sectionAnimation}
            initial="hidden"
            animate={animation}
        >
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

