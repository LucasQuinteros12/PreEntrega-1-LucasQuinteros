import React from 'react';
import CartCounter from '../layouts/CartCounter';
const ProductDetails = ({ producto }) => {
    return (
        <>
            <div className='d-flex align-items-center justify-content-center h-100'>
                <div className="cardDetails">
                    <img src={"../img/" + producto.img} className="img-fluid rounded-start" alt={producto.id} />
                </div>
                <div className="detailContainer">
                    <div className="card-body">
                        <p className="card-text cardName">{producto.nombre}</p>
                        <h5 className="card-title">{producto.marca}</h5>
                        <p className="card-text">Marca: {producto.modelo}</p>
                        <p className="card-text">Stock: {producto.stock}</p>
                        <p className="card-text">Precio: ${producto.precio}</p>
                        <button className='btnVerProducto'>Comprar Producto</button>
                        <CartCounter/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductDetails;
