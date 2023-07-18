import React, { useState } from 'react';
import { FullScreenImage, FullScreenWrapper, GalleryWrapper, Image, ImageWrapper, MainWrapper, Pics, Title, Wrapper } from './styledGallery';
import ex1 from '../../common/Images/ex1.jpg';
import ex2 from '../../common/Images/3.jpg';
import ex3 from '../../common/Images/4.jpg';
import ex4 from '../../common/Images/ex3.jpg';


export const Gallery = () => {

    const [fullScreen, setFullScreen] = useState<boolean>(false);
    const [fullScreenSrc, setFullScreenSrc] = useState<string>("");
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);

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
    ];

    const openFullScreen = (src: string, index: number) => {
        setFullScreenSrc(src);
        setCurrentPhotoIndex(index);
        setFullScreen(true);
    }

    const closeFullScreen = () => {
        setFullScreen(false)
    };

    return (
        <>

            <Wrapper>
                <MainWrapper>
                    <Title>Galeria zdjęć</Title>
                </MainWrapper>

                <GalleryWrapper>
                    {data.map((img) => (
                        <Pics key={img.id}>
                            <Image src={img.imgsrc} onClick={() => openFullScreen(img.imgsrc, img.id)}
                            />
                        </Pics>
                    ))}
                </GalleryWrapper>
            </Wrapper>

            <FullScreenWrapper fullScreenPhoto={fullScreen} >
                <ImageWrapper>
                    <FullScreenImage src={fullScreenSrc} />
                </ImageWrapper>
            </FullScreenWrapper>

        </>
    );
};

