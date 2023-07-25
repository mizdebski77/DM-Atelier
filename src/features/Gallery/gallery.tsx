import React, { useState } from 'react';
import { CloseButton, CustomSlide, CustomSwiper, FullScreenImage, FullScreenWrapper, GalleryWrapper, Image, MainWrapper, Pics, Title, Wrapper } from './styledGallery';
import ex1 from '../../common/Images/ex1.jpg';
import ex2 from '../../common/Images/3.jpg';
import ex3 from '../../common/Images/4.jpg';
import ex4 from '../../common/Images/ex3.jpg';
import { AiOutlineClose } from 'react-icons/ai'
import { Navigation } from 'swiper/modules'
import { closeImage, closeWrapper, openImage, openWrapper } from '../../core/animations';
export const Gallery = () => {

    const [fullScreen, setFullScreen] = useState<boolean>(false);
    const [fullScreenSrc, setFullScreenSrc] = useState<string>("");

    const data = [
        {
            id: 1,
            imgsrc: ex1,
        },

        {
            id: 2,
            imgsrc: ex2,
        },
        {
            id: 3,
            imgsrc: ex3,
        },

        {
            id: 4,
            imgsrc: ex4,
        },
        {
            id: 5,
            imgsrc: ex4,
        },

        {
            id: 6,
            imgsrc: ex3,
        },
        {
            id: 7,
            imgsrc: ex2,
        },

        {
            id: 8,
            imgsrc: ex1,
        },
        {
            id: 9,
            imgsrc: ex2,
        },
        {
            id: 10,
            imgsrc: ex1,
        },

        {
            id: 11,
            imgsrc: ex3,
        },
        {
            id: 12,
            imgsrc: ex4,
        },

        {
            id: 13,
            imgsrc: ex2,
        },
        {
            id: 14,
            imgsrc: ex1,
        },
        {
            id: 15,
            imgsrc: ex2,
        },
        {
            id: 16,
            imgsrc: ex1,
        },

        {
            id: 17,
            imgsrc: ex3,
        },
        {
            id: 18,
            imgsrc: ex4,
        },

        {
            id: 19,
            imgsrc: ex2,
        },
    ];


    const openFullScreen = (src: string) => {
        setFullScreenSrc(src);
        setFullScreen(true);
    };

    const closeFullScreen = () => {
        setFullScreen(false);
        setFullScreenSrc("");
    };


    return (
        <>

            <Wrapper>
                <MainWrapper>
                    <Title>Galeria zdjęć</Title>
                </MainWrapper>

                <GalleryWrapper
                    
                >
                    {data.map((img) => (
                        <Pics key={img.id}>
                            <Image src={img.imgsrc} onClick={() => openFullScreen(img.imgsrc)} />
                        </Pics>
                    ))}
                </GalleryWrapper>
            </Wrapper>


            {fullScreenSrc && (
                <FullScreenWrapper
                    fullScreenPhoto={fullScreen}
                    initial={closeWrapper}
                    animate={fullScreen ? openWrapper : closeWrapper}
                    transition={{ duration: 0.5 }}
                >


                    <CustomSwiper<React.ComponentType<any>>
                        centeredSlides={true}
                        slidesPerView={1}
                        modules={[Navigation]}
                        spaceBetween={100}
                        loop={false}
                        navigation
                        grabCursor={true}
                        initialSlide={data.findIndex((img) => img.imgsrc === fullScreenSrc)}
                    >

                        {data.map((img) => (
                            <CustomSlide key={img.id}>
                                <FullScreenImage
                                    initial={closeImage}
                                    animate={fullScreen ? openImage : closeImage}
                                    transition={{ duration: 0.5 }}
                                    src={img.imgsrc}
                                />
                            </CustomSlide>
                        ))}
                    </CustomSwiper>
                    <CloseButton
                        onClick={() => closeFullScreen()}>
                        <AiOutlineClose size={35} />
                    </CloseButton>

                </FullScreenWrapper >)}

        </>
    );
};
