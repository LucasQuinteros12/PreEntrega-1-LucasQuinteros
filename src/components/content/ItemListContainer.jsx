import React, { useState, useEffect, useContext } from 'react';
import { getProductos } from '../../utils/firebase';
import { DarkModeContext } from '../../context/darkModeContext';
import { FavContext } from '../../context/FavContext';
import { Link } from 'react-router-dom';
const Home = () => {
    const [producto, setProductos] = useState([])
    const {darkMode} = useContext(DarkModeContext);
    const {agregarFavorito} = useContext(FavContext);

    useEffect(() => {
        getProductos().then(productos => {
            const cardProducto = productos.map(producto =>
                
                <div className={darkMode ? "cardDarkHome" : "cardHome"} key={producto.id} style={{ width: '18rem' }}>
                    <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body" key={producto}>
                        <p className="card-text cardName">{producto.nombre}</p>
                        <h5 className="card-title">{producto.marca}</h5>
                        <p className="card-text">{producto.modelo}</p>
                        <p className="card-text">$ {producto.precio}</p>
                        <p className="card-text">Quedan {producto.stock}</p>
                        <button className={darkMode ? 'btnVerProductoDark' : 'btnVerProducto'}><Link className='nav-link' to={`/producto/${producto.id}`}>Ver producto</Link></button>
                        <button className={darkMode ? 'btnVerProductoDark' : 'btnVerProducto'} onClick={() => agregarFavorito(producto)}>Agregar a favoritos</button>
                    </div>
                </div>
            )
            setProductos(cardProducto)
        })
    }, []);


    return (
        <div className={darkMode ? 'darkMode Row' : 'Row' }>
            {producto}
        </div>
    );
}
export default Home;
