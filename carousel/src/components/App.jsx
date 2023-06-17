import React from 'react';
import UseSpring from './Fun/UseSpring';
import UseTransition from './Fun/UseTransition';
import FunWithColors from './Fun/FunWithColors';
import FunWithColorsAuto from './Fun/FunWithColorsAuto';
import CarouselBasic from './Carousel/CarouselBasic';
import CarouselBasicImage from './Carousel/CarouselBasicImage';
import Hero from './Hero/Hero';
import ContentSection from './ContentSection/ContentSection';
import Footer from './Footer/Footer';

import './App.css';

import img1 from './../assets/img1.jpg';
import img2 from './../assets/img2.jpg';
import img3 from './../assets/img3.jpg';
import img4 from './../assets/img4.jpg';
import img5 from './../assets/img5.jpg';

const SLIDES = [img1, img2, img3, img4, img5];

const App = () => {
    return (
        <div className=''>
            {/* <UseSpring /> */}
            {/* <UseTransition /> */}
            {/* <FunWithColors /> */}
            {/* <FunWithColorsAuto /> */}
            {/* <CarouselBasic /> */}
            {/* <CarouselBasicImage slides={SLIDES} /> */}
            <Hero />

            <ContentSection />

            <Footer />
        </div>
    );
};

export default App;
