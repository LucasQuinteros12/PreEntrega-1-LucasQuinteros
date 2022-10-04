import React from 'react';
import { Link } from 'react-router-dom';
import Dropdow from '../layouts/Dropdow';
import Sections from '../layouts/Sections';
import CartWidget from '../layouts/CartWidget';
import '../../styles/App.css';
const Navbar = () => {
    const listDropdow = ["Celulares", "Notebooks", "Televisores"];
    return (
        <>
           <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav me-auto">
                    <Sections/>
                    <Dropdow lista = {listDropdow}/>
                  </ul>
                  
                </div>
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/carrito"><CartWidget/></Link>
                  </li>
                    
                </ul>
              </div>
            </nav>
        </>
    );
}

export default Navbar;
