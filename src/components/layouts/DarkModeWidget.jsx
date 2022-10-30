import React,{useContext}from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { FaMoon } from 'react-icons/fa';
const DarkModeWidget = () => {
    const {darkMode,toggleDarkMode } = useContext(DarkModeContext);

    return (
        <>
            <button className={darkMode ? 'btnSectionsDark' : 'btnSections'} onClick={() => toggleDarkMode()}>
                <FaMoon size={20} className={darkMode ? 'iconsDark' : 'icons'} />
            </button>
        </>
    );
}

export default DarkModeWidget;
