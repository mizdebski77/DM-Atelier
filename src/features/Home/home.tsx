import React from 'react';
import { Wrapper } from './styledHome';
import { Header } from './Sections/Header/header';
import { About } from './Sections/About/about';
import { Opinions } from './Sections/Opinions/opinions';
import { Gallery } from './Sections/Gallery/gallery';

const Home = () => {
    return (
        <Wrapper>
            <Header />
            <About />
            <Opinions /> 
            <Gallery />
        </Wrapper>
    );
};

export default Home;

