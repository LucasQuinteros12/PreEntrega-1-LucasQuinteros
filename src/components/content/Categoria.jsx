import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductos } from '../../utils/firebase';

const Categoria = () => {
    const [productos, setProductos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProductos().then(productos => {
            const productosCategoria = productos.filter(producto => producto[1].categoria === parseInt(id));
            const cardProducto = productosCategoria.map(producto =>
                <div className="cardCategorias">
                    <div className="card" key={producto[0]} style={{ width: '18rem' }}>
                        <img src={producto[1].imagen} className="card-img-top" alt={producto[1].nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto[1].nombre}</h5>
                            <p className="card-text">{producto[1].marca}</p>
                            <p className="card-text">{producto[1].modelo}</p>
                            <p className="card-text">$ {producto[1].precio}</p>
                            <p className="card-text">Quedan {producto[1].stock}</p>
                            <button className='btn btnVerProducto'><Link className='nav-link' to={"/producto/" + producto[0]}>Ver producto</Link></button>
                        </div>
                    </div>
                </div>


            )
            setProductos(cardProducto)
        })
    }, [id]);

    return (
        <div className='Row'>
            {productos}
        </div>
    );
}

export default Categoria;
