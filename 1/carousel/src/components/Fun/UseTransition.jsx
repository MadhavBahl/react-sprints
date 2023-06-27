import React from 'react';
import { useTransition, animated } from 'react-spring';

const DATA = [1, 2, 3];

const UseTransition = () => {
    const transitions = useTransition(DATA, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 1000 },
    });

    return (
        <div className='play'>
            <h1>UseTransition</h1>
            <br />

            {transitions((styles, item) => (
                <animated.div
                    style={{
                        ...styles,
                        fontSize: '50px',
                    }}
                >
                    {item}
                </animated.div>
            ))}
        </div>
    );
};

export default UseTransition;
