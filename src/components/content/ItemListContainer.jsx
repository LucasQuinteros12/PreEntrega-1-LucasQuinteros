import React, { useState, useEffect, useContext } from 'react';
import { getProductos } from '../../utils/firebase';
import { DarkModeContext } from '../../context/darkModeContext';
import { FavContext } from '../../context/FavContext';
import { Link } from 'react-router-dom';
const Home = () => {
    const [producto, setProductos] = useState([])
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const {agregarFavorito} = useContext(FavContext);

    useEffect(() => {
        getProductos().then(productos => {
            const cardProducto = productos.map(producto =>
                
                <div className="card" key={producto[0].id} style={{ width: '18rem' }}>
                    <img src={producto[1].imagen} className="card-img-top" alt={producto[1].nombre} />
                    <div className="card-body" key={producto[0]}>
                        <p className="card-text cardName">{producto[1].nombre}</p>
                        <h5 className="card-title">{producto[1].marca}</h5>
                        <p className="card-text">{producto[1].modelo}</p>
                        <p className="card-text">$ {producto[1].precio}</p>
                        <p className="card-text">Quedan {producto[1].stock}</p>
                        <button className='btnVerProducto'><Link className='nav-link' to={`/producto/${producto[0]}`}>Ver producto</Link></button>
                        <button className='btnVerProducto' onClick={() => agregarFavorito(producto)}>Agregar a favoritos</button>
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
