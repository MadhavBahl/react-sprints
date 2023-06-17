import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';

import './Hero.css';

const Hero = () => {
    const [showHeading, setShowHeading] = useState(false);

    const transitions = useTransition([showHeading], {
        from: { opacity: 0, transform: 'translateY(-50px)' },
        enter: { opacity: 1, transform: 'translateY(0px)' },
        leave: { opacity: 0, transform: 'translateY(-50px)' },
        config: { duration: 800 },
    });

    useEffect(() => {
        setShowHeading(true);
    }, []);

    return (
        <div className='hero-container'>
            {transitions((styles, item) => (
                <animated.div style={styles}>
                    {item && (
                        <div className=''>
                            <h1 className='hero-heading'>
                                Welcome to the Carousel
                            </h1>
                            <p className='hero-subheading'>
                                This is a sample landing page with carousels!
                            </p>
                        </div>
                    )}
                </animated.div>
            ))}
        </div>
    );
};

export default Hero;
