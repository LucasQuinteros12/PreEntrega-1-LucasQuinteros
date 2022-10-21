import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../utils/firebase';
import ProductDetails from './ItemDetailContainer';

const Product = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod);
        });

    }, []);

    if (producto.length !== 0) {
        return (

            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <ProductDetails producto={producto} />
            </div>
        );
    }
}

export default Product;
