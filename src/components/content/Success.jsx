import React ,{useContext}from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
const Succes = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={darkMode ? 'successContainerDark' : 'successContainer'}>
            <h1 className={darkMode ? 'successDark' : 'success'}>Compra realizada con exito! &#9989;</h1>
            <h4 className='spanSuccess'>Pronto recibiras un mail con toda la informacion sobre tu compra &#10024;</h4>
        </div>
    );
}

export default Succes;
