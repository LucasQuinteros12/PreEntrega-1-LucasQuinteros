import React, { useContext } from 'react';
import '../../styles/App.css';
import { Link } from 'react-router-dom';
import Sections from '../layouts/Sections';
import Dropdow from '../layouts/Dropdow';
import CartWidget from '../layouts/CartWidget';
import { DarkModeContext } from '../../context/darkModeContext';
import FavWidget from '../layouts/FavWidget';
import DarkModeWidget from '../layouts/DarkModeWidget';



const Navbar = () => {
  const { darkMode } = useContext(DarkModeContext);
  const listDropdow = ["Notebooks", "Celulares", "Televisores"];
  return (
    <>
      <nav className='navBar'>
        <div className={darkMode ? 'navContainer navDark' : 'navContainer'}>
          <ul className='left'>
            <Sections className='sectionsContainer' />
            <Dropdow lista={listDropdow} />
          </ul>
          <Link to="/"><h1 className='title'>Tienda Online</h1></Link>
          <ul className={darkMode ? 'rightDark' : 'right'}>
            <li>
              <DarkModeWidget/>
            </li>
            <li>
              <FavWidget />
            </li>
            <li>
              <CartWidget />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
