import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';

import vectorImg from './../../assets/vector2.webp';

import './Carousel.css';

const Carousel = ({ slides = ['Slide1', 'Slide2', 'Slide3'] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((active) => (active + 1) % slides.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

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
            <div onClick={previousSlide} className='btn prev'>
                &#10094;
            </div>
            <div className='slides'>
                {transitions((styles, index) => (
                    <animated.div
                        className='slide'
                        style={{
                            ...styles,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${slides[index]})`,
                        }}
                    />
                ))}
            </div>
            <div onClick={nextSlide} className='btn next'>
                &#10095;
            </div>

            <div className='vector-frame'>
                <img src={vectorImg} alt='style' className='vector' />
            </div>
        </div>
    );
};

export default Carousel;
