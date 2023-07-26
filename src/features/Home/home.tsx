import React from 'react';
import { Wrapper } from './styledHome';
import { Header } from './Sections/Header/header';
import { About } from './Sections/About/about';
import { Opinions } from './Sections/Opinions/opinions';
import { Gallery } from './Sections/Gallery/gallery';
import { motion } from 'framer-motion';
import { useInViewAnimation } from '../../core/useInViewAnimation';
import { opacityAnimation } from '../../core/animations';

const Home = () => {

    const { animation, ref } = useInViewAnimation(0.5);


    return (
        <Wrapper
            as={motion.div}
            ref={ref}
            variants={opacityAnimation}
            initial="hidden"
            animate={animation}
        >
            <Header />
            <About />
            <Opinions />
            <Gallery />
        </Wrapper>
    );
};

export default Home;

