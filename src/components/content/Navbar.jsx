import React from 'react';
import Form from '../layouts/Form';
import Dropdow from '../layouts/Dropdow';
import Sections from '../layouts/Sections';
import CartWidget from '../layouts/CartWidget';
import '../../styles/App.css';
const Navbar = () => {
    const listDropdow = ["Celulares", "Notebooks", "Televisores"];
    return (
        <>
            <nav className='navbar'>
                <div className='divContainer'>
                    <ul className='firstUl'>
                        <Sections />
                        <Dropdow lista={listDropdow} />
                    </ul>
                    <ul className='secondUl'>
                        <Form/>
                        <CartWidget/>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
