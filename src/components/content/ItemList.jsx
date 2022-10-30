import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { getProducto } from '../../utils/firebase';
import ProductDetails from './ItemDetailContainer';

const Product = () => {
    const {darkMode} = useContext(DarkModeContext);
    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod);
        });

    }, []);



    if (producto.length !== 0) {
        return (

            <div className={darkMode ? 'card cardDark' : 'card'}>
                <ProductDetails producto={producto} />
            </div>
        );
    }
}

export default Product;
