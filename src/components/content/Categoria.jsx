import React, {useContext, useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductos } from '../../utils/firebase';
import { DarkModeContext } from '../../context/darkModeContext';

const Categoria = () => {
    const [productos, setProductos] = useState([]);
    const { id } = useParams();
    const {darkMode} = useContext(DarkModeContext);

    useEffect(() => {
        getProductos().then(productos => {
            const productosCategoria = productos.filter(producto => producto.categoria === parseInt(id));
            const cardProducto = productosCategoria.map(producto =>
                <div className="cardCategorias">
                    <div className={darkMode ? "cardDarkHome" : "cardHome"} key={producto} style={{ width: '18rem' }}>
                        <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">{producto.marca}</p>
                            <p className="card-text">{producto.modelo}</p>
                            <p className="card-text">$ {producto.precio}</p>
                            <p className="card-text">Quedan {producto.stock}</p>
                            <button className={darkMode ? 'btnVerProductoDark' : 'btnVerProducto'}><Link className='nav-link' to={"/producto/" + producto[0]}>Ver producto</Link></button>
                        </div>
                    </div>
                </div>


            )
            setProductos(cardProducto)
        })
    }, [id]);

    return (
        <div className={darkMode ? 'darkMode Row' : 'Row'}>
            {productos}
        </div>
    );
}

export default Categoria;
