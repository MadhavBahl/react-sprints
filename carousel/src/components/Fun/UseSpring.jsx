import React from 'react';
import { useSpring, animated } from 'react-spring';

const UseSpring = () => {
    const spring = useSpring({
        from: { x: 0 },
        to: { x: 500 },
        config: { duration: 1000 },
    });

    return (
        <div className='play'>
            <h2>useSpring</h2>
            <br />

            <animated.div
                style={{
                    ...spring,
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    marginLeft: '5px',
                }}
            />
        </div>
    );
};

export default UseSpring;
