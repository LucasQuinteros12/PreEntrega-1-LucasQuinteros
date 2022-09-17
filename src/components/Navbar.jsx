import React from 'react';
import Form from './Form';
import Dropdow from './Dropdow';
import Sections from './Sections';
const Navbar = () => {
    const listDropdow = ["Hombre", "Mujer", "Unisex", "Niños"];
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-black bg-warning">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav me-auto">
                                <Sections />
                                <Dropdow lista={listDropdow}/>
                            </ul>
                            <Form busqueda = "Buscar Producto"/>
                        </div>
                    </div>
                </nav>
            </>
        );
}

export default Navbar;
