import React from 'react';
import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { DarkModeContext } from '../../context/darkModeContext';
const ProductDetails = ({ producto }) => {
    const { darkMode } = useContext(DarkModeContext);
    
    const [cantidad, setCantidad] = useState(1);

    const { agregarProducto } = useContext(CarritoContext);

    const cantProducto = (operation) => {
        if (operation === '+') {
            if (cantidad < producto.stock) {
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
            <div className={darkMode ? 'cardContainerDark' : 'cardContainer'}>
                <div className= "imageContainer" >
                    <img src={producto.imagen} className="imgCardDetail"  alt={producto.nombre} />
                </div>
                <div className="detailContainer">
                    <div className="card-body">
                        <p className={darkMode ? "card-text cardNameDark" : "card-text cardName" }>{producto.marca}</p>
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">Modelo: {producto.modelo}</p>
                        <p className="card-text">Stock: {producto.stock}</p>
                        <p className="card-text">${producto.precio}</p>
                        <div className='counterContainer'>
                            <button className={darkMode ? 'btnVerProductoDark counter' : 'btnVerProducto counter'} onClick={() => cantProducto("+")}>+</button>
                            <p className='card-text'>{cantidad}</p>
                            <button className={darkMode ? 'btnVerProductoDark counter' : 'btnVerProducto counter'} onClick={() => cantProducto("-")}>-</button>
                        </div>
                        <button className={darkMode ? 'btnVerProductoDark' : 'btnVerProducto'} onClick={() => agregarProducto(producto, cantidad)}>Comprar Producto</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductDetails;
