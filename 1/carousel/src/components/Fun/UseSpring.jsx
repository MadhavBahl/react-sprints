import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const UseSpring = () => {
    const [currentPosition, setCurrentPosition] = useState(0);

    // const spring = useSpring({
    //     from: { x: 0 },
    //     to: { x: 500 },
    //     config: { duration: 1000 },
    // });

    const [spring2, api] = useSpring(() => ({
        from: { x: currentPosition },
        onChange: (ev) => {
            // console.log(ev.value.x);
            setCurrentPosition(ev.value.x);
        },
        config: { duration: 2000 },
    }));

    const handleMouseEnter = () => {
        api.start({
            from: { x: currentPosition },
            to: { x: 500 },
        });
    };

    const handleMouseLeave = () => {
        api.start({
            from: { x: currentPosition },
            to: { x: 0 },
        });
    };

    return (
        <div className='play'>
            <h2>useSpring</h2>
            <br />

            <animated.div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    ...spring2,
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
