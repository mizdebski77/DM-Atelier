import React from 'react';
import { PhotosSection, TextSection, Wrapper, TextsWrapper, Image, Title, TextElement} from './styledAbout';
import ex from '../../common/Images/example.jpg'
import { texts } from './texts';
import { useInViewAnimation } from '../../core/useInViewAnimation';
import { motion } from 'framer-motion';
import { leftAnimation, rightAnimation } from '../../core/animations';
import { Opinions } from './Opinions/opinions';


export const About = () => {

    const { animation, ref } = useInViewAnimation(0.5);

    return (
        <Wrapper>
            <PhotosSection
                as={motion.div}
                ref={ref}
                variants={rightAnimation}
                initial="hidden"
                animate={animation}
            >
                <Image smaller src={ex} />
                <Image src={ex} />
                <Image smaller src={ex} />
            </PhotosSection>

            <TextSection
                as={motion.div}
                ref={ref}
                variants={leftAnimation}
                initial="hidden"
                animate={animation}
            >
                <Title>D'M Atelier</Title>
                <TextsWrapper>
                    {texts.map((text) => (
                        <TextElement key={text.id}>{text.contents}</TextElement>

                    ))}
                </TextsWrapper>
            </TextSection>
            <Opinions />


        </Wrapper>
    );
};

