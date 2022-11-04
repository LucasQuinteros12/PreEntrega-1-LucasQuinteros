import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { CarritoContext } from '../../context/CarritoContext';
import { createOrdenDeCompra } from '../../utils/firebase';

const PreSucces = () => {
    const datosFormulario = React.useRef();
    const {vaciarCarrito} = useContext(CarritoContext);
    const { darkMode } = useContext(DarkModeContext);

    const consultarForm = (e) => {
        e.preventDefault();
        const datForm = new FormData(datosFormulario.current);
        console.log(Object.fromEntries(datForm));
        e.target.reset();
    }

  


    return (
        <div className='succesContainer'>
            <div className={darkMode ? 'contactContainerDark' : 'contactContainer'}>
                <div className={darkMode ? "container containerFormDark" : "container containerForm"}>
                    <form onSubmit={consultarForm} ref={datosFormulario} >
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" name="nombre" required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellido" className="form-label">Apellido</label>
                            <input type="text" className="form-control" name="apellido" required
                        />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="dni" className="form-label">Dni</label>
                            <input type="number" className="form-control" name="dni" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" required/>
                        
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="direccion" className="form-label">Direccion </label>
                            <input type="direccion" className="form-control" name="direccion" required
                            />
                        </div>
                        <button type="submit" className={darkMode ? "btnVerProductoDark" : "btnVerProducto"} style={{margin:"12px"}} ><Link to={'/Success'} onClick={() => vaciarCarrito()} className='nav-link'>Comprar</Link></button>
                        <Link to={'/'}><button type="submit" className={darkMode ? "btnVerProductoDark" : "btnVerProducto"}>Cancelar</button></Link>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default PreSucces;
