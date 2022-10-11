import React, { useState, useEffect, useContext } from 'react';
import { consultarBDD } from '../../utils/FuncionesUtiles';
import { DarkModeContext } from '../../context/darkModeContext';
import { Link } from 'react-router-dom';
const Home = () => {
    const [producto, setProductos] = useState([])

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    useEffect(() => {
        consultarBDD('./json/productos.json').then(productos => {

            const cardProducto = productos.map(producto =>

                <div className="card" key={producto.id} style={{ width: '18rem' }}>
                    <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body" key={producto.id}>
                        <p className="card-text cardName">{producto.nombre}</p>
                        <h5 className="card-title">{producto.marca}</h5>
                        <p className="card-text">{producto.modelo}</p>
                        <p className="card-text">$ {producto.precio}</p>
                        <p className="card-text">Quedan {producto.stock}</p>
                        <button className='btnVerProducto'><Link className='nav-link' to={"/producto/" + producto.id}>Ver producto</Link></button>
                    </div>
                </div>


            )
            setProductos(cardProducto)
        })
    }, []);


    return (
        <div className={darkMode ? 'darkMode row' : 'row' }>
            {producto}
        </div>
    );
}
export default Home;
