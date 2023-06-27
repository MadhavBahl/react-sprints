import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

import './CarouselBasic.css';

const CarouselBasic = ({ slides = ['Slide1', 'Slide2', 'Slide3'] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const transitions = useTransition([activeIndex], {
        from: { opacity: 0, display: 'none' },
        enter: { opacity: 1, display: 'block' },
        leave: { opacity: 0, display: 'none' },
    });

    const nextSlide = () => {
        setActiveIndex((activeIndex + 1) % slides.length);
    };

    const previousSlide = () => {
        setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className='carousel-container'>
            <button onClick={previousSlide}>Previous</button>
            <div className='slides'>
                {transitions((styles, index) => (
                    <animated.div style={styles}>{slides[index]}</animated.div>
                ))}
            </div>
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default CarouselBasic;
