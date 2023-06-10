import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';

import './FunWithColors.css';

const COLORS = ['ORANGE', 'PINK', 'PURPLE'];

/**
 * 500ms -> Transitions in
 * 500ms -> Just stays there
 * 500ms -> Transitions out
 * 500ms -> It shows nothing
 */

const FunWithColorsAuto = () => {
    // const transitions = useTransition(DATA, {
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 },
    //     config: { duration: 1000 },
    // });
    const [activeIndex, setActiveIndex] = useState(0);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % COLORS.length);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        setColors(COLORS[activeIndex]);

        setTimeout(() => {
            setColors([]);
        }, 1000);
    }, [activeIndex]);

    const transitions2 = useTransition(colors, {
        from: { opacity: 0, transform: 'perspective(600px) rotateX(180deg)' },
        enter: { opacity: 1, transform: 'perspective(600px) rotateX(0deg)' },
        leave: { opacity: 0, transform: 'perspective(600px) rotateX(180deg)' },
        config: { duration: 500 },
    });

    return (
        <div className='play'>
            <h1>Fun with Colors</h1>
            <br />

            <div className='color-container'>
                {transitions2((styles, item) => (
                    <animated.div
                        className={`color ${item}`}
                        style={{
                            ...styles,
                            fontSize: '50px',
                        }}
                    >
                        {item}
                    </animated.div>
                ))}
            </div>
        </div>
    );
};

export default FunWithColorsAuto;
