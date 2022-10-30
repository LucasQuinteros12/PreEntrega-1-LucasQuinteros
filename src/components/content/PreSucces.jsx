import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { createOrdenDeCompra } from '../../utils/firebase';
const PreSucces = () => {
    const { darkMode } = useContext(DarkModeContext);
    const datosFormulario = React.useRef();

    const [datos, setDatos] = useState(createOrdenDeCompra());

    
    const consultarForm = (e) => {
        const {name, value} = e.target;
        setDatos({...datos, [name]: value});
    }

    const guardarDatos = (e) => {
        e.preventDefault();
        try {
            createOrdenDeCompra(...datos)
        } catch (error) {
            console.log(error);
        }
        setDatos(...createOrdenDeCompra())
    }


    return (
        <div className='succesContainer'>
            <div className={darkMode ? 'contactContainerDark' : 'contactContainer'}>
                <div className={darkMode ? "container containerFormDark" : "container containerForm"}>
                    <form onSubmit={guardarDatos} ref={datosFormulario} >
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" name="nombre" required 
                            onChange={consultarForm} value={datos.nombre}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellido" className="form-label">Apellido</label>
                            <input type="text" className="form-control" name="apellido"  required 
                            onChange={consultarForm} value={datos.apellido}/>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="dni" className="form-label">Dni</label>
                            <input type="number" className="form-control" name="dni" required 
                            onChange={consultarForm} value={datos.dni}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" required
                            onChange={consultarForm} value={datos.email}/>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="direccion" className="form-label">Direccion </label>
                            <input type="direccion" className="form-control" name="direccion" required 
                            onChange={consultarForm} value={datos.direccion}/>
                        </div>
                        <button type="submit" className={darkMode ? "btnVerProductoDark" : "btnVerProducto"}><Link>Comprar</Link></button>
                        <Link to={'/'}><button type="submit" className={darkMode ? "btnVerProductoDark" : "btnVerProducto"}>Cancelar</button></Link>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default PreSucces;
