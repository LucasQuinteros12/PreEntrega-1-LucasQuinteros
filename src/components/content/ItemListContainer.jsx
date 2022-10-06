import React, { useState, useEffect } from 'react';
import { consultarBDD } from '../../utils/FuncionesUtiles';
import { Link } from 'react-router-dom';
const Home = () => {
    const [producto, setProductos] = useState([])

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
        <div className='Row'>
            {producto}
        </div>
    );
}
export default Home;
