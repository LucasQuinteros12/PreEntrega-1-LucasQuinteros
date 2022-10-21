import React from 'react';
import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
const ProductDetails = ({ producto }) => {
    const [cantidad, setCantidad] = useState(1);

    const {agregarProducto} = useContext(CarritoContext);

    const cantProducto = (operation) => {
        if (operation === '+') {
            if (cantidad < producto[1].stock) {
                setCantidad(cantidad + 1);
            }
        } else {
            if (cantidad > 1) {
                setCantidad(cantidad - 1);
            }
        }
    }
    
    


    
    return (
        <>
            <div className='d-flex align-items-center justify-content-center h-100'>
                <div className="cardDetails">
                    <img src={producto[1].imagen} className="img-fluid rounded-start" alt={producto[1].nombre} />
                </div>
                <div className="detailContainer">
                    <div className="card-body">
                        <p className="card-text cardName">{producto[1].nombre}</p>
                        <h5 className="card-title">{producto[1].marca}</h5>
                        <p className="card-text">Modelo: {producto[1].modelo}</p>
                        <p className="card-text">Stock: {producto[1].stock}</p>
                        <p className="card-text">Precio: ${producto[1].precio}</p>
                        <button className='btn btnVerProducto' onClick={() => cantProducto("+")}>+</button>
                        <p className='card-text'>{cantidad}</p>
                        <button className='btn btnVerProducto' onClick={() => cantProducto("-")}>-</button>
                        <button className='btn btnVerProducto' onClick={() => agregarProducto(producto, cantidad)}>Comprar Producto</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductDetails;
