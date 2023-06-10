import React from 'react';

import './App.css';
import UseSpring from './Fun/UseSpring';
import UseTransition from './Fun/UseTransition';
import FunWithColors from './Fun/FunWithColors';
import FunWithColorsAuto from './Fun/FunWithColorsAuto';

const App = () => {
    return (
        <div className=''>
            {/* <UseSpring /> */}
            {/* <UseTransition /> */}
            {/* <FunWithColors /> */}
            <FunWithColorsAuto />
        </div>
    );
};

export default App;
