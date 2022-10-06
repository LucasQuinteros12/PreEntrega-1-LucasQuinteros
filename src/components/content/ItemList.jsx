import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/FuncionesUtiles';
import ProductDetails from './ItemDetailContainer';

const Product = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const producto1 = productos.find(productoArray => productoArray.id === parseInt(id));
                setProducto(producto1);
        })

    }, []);

    return (
    
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <ProductDetails producto={producto}/>
            </div>

        
    );
}

export default Product;
