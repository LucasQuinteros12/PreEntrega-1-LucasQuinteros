import React, {useContext, useEffect, useState}from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const Cart = () => {
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext);
    const [carritoLocal, setCarritoLocal] = useState([]);
    useEffect(() => {
        console.log(carritoLocal);
    }, []);

    return (
        <>
         
        </>
    );
}

export default Cart;
