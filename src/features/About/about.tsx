import React from 'react';
import { PhotosSection, TextSection, Wrapper, TextsWrapper, Image, Title, TextElement, CustomSwiper, CustomSlide, Name, Opinion } from './styledAbout';
import ex from '../../common/Images/example.jpg'
import { texts } from './texts';
import { opinions } from '../Home/Sections/Opinions/clitentsOpinions';
import { Navigation, EffectCoverflow, Pagination } from 'swiper/modules';

export const About = () => {
    return (
        <Wrapper>
            <PhotosSection>
                <Image smaller src={ex} />
                <Image src={ex} />
                <Image smaller src={ex} />
            </PhotosSection>

            <TextSection>
                <Title>D'M Atelier</Title>
                <TextsWrapper>
                    {texts.map((text) => (
                        <TextElement key={text.id}>{text.contents}</TextElement>

                    ))}
                </TextsWrapper>
            </TextSection>

            <TextSection>
                <Title>Opinie naszych klientów</Title>

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

            </TextSection>

        </Wrapper>
    );
};

