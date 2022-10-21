import React, { useContext, useEffect, useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';


const Cart = () => {
    const { carrito, vaciarCarrito, quitarProducto } = useContext(CarritoContext);
    const [carritoLocal, setCarritoLocal] = useState([]);


    useEffect(() => {
        const prodMostar = carrito.map(producto =>
            <>
                <div className="card" key={producto[0].id} style={{ width: '18rem' }}>
                    <img src={producto[1].imagen} className="card-img-top" alt={producto[1].nombre} />
                    <div className="card-body" key={producto[0].id}>
                        <p className="card-text cardName">{producto[1].nombre}</p>
                        <p className="card-text">$ {producto[1].precio}</p>
                        <p className="card-text">cantidad {producto[1].cantidad}</p>
                        <p className="card-text">Total: ${producto[1].precio * producto[1].cantidad}</p>

                        <button className='btnVerProducto' onClick={() => quitarProducto(producto)}>Eliminar</button>
                    </div>
                </div>
                <button className='btnVerProducto' onClick={() => vaciarCarrito(producto)}>Vaciar Carrito</button>
            </>
        )

        setCarritoLocal(prodMostar)

    }, [carrito]);

    const app = (carrito.length !== 0) ? <div className='row'> {carritoLocal} </div> : <h1>Carrito Vacio</h1>

    return app
}

export default Cart;
