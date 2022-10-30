import React, {useContext}from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
const About = () => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div className={darkMode ? 'darkMode' : ''}>
           <h1>About</h1>
        </div>
    );
}

export default About;
