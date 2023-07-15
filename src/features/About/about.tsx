import React from 'react';
import { PhotosSection, TextSection, Wrapper, TextsWrapper, Image, Title, TextElement } from './styledAbout';
import ex from '../../common/Images/example.jpg'
import { texts } from './texts';


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

            </TextSection>
        </Wrapper>
    );
};

