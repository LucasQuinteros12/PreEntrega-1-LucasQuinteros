import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../utils/FuncionesUtiles';

const Categoria = () => {
    const [productos, setProductos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const productosCategoria = productos.filter(producto => producto.idCategoria === parseInt(id));
            const cardProducto = productosCategoria.map(producto =>
                <div className="cardCategorias">
                    <div className="card" key={producto.id} style={{ width: '18rem' }}>
                        <img src={"../img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">{producto.marca}</p>
                            <p className="card-text">{producto.modelo}</p>
                            <p className="card-text">$ {producto.precio}</p>
                            <p className="card-text">Quedan {producto.stock}</p>
                            <button className='btn btnVerProducto'><Link className='nav-link' to={"/producto/" + producto.id}>Ver producto</Link></button>
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
