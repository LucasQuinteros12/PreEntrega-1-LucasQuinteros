import React, { useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { DarkModeContext } from '../../context/darkModeContext';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { carrito, vaciarCarrito, quitarProducto } = useContext(CarritoContext);
    const [carritoLocal, setCarritoLocal] = useState([]);
    const {darkMode} = useContext(DarkModeContext);
    const calcularTotal = () => {
        let total = 0;
        carrito.forEach((producto) => {
            total += producto.precio * producto.cantidad;
        });
        return total;
    }
    useEffect(() => {
        const prodMostar = carrito.map(producto =>
            <>
                <div className={darkMode ? "cardCartDark" : "cardHome"} key={producto.id} style={{ width: '18rem' }}>
                    <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body" key={producto.id}>
                        <p className="card-text cardName">{producto.nombre}</p>
                        <p className="card-text">$ {producto.precio}</p>
                        <p className="card-text">Cantidad: {producto.cantidad}</p>
                        <p className="card-text">SubTotal: ${producto.precio * producto.cantidad}</p>

                        <button className={darkMode ? 'btnVerProductoDark' : 'btnVerProducto'} onClick={() => quitarProducto(producto.id)}>Eliminar</button>

                    </div>
                </div>
               
            </>
        )

        setCarritoLocal(prodMostar)

    }, [carrito]);
    
    const app = (carrito.length !== 0) ? <div className={darkMode ? 'darkMode Row cartDark' : 'Row cart'}> {carritoLocal} <div className={darkMode ? 'calcularTotalDark' : 'calcularTotal'}><h5 className='card-text'>Total: ${calcularTotal()}</h5></div> <div className='btnCarritoContainer'><button className={darkMode ? 'btnVaciarCarritoDark' : 'btnVaciarCarrito'} onClick={() => vaciarCarrito()}>Vaciar Carrito</button> <button className={darkMode ? 'terminarCompraDark' : 'terminarCompra'}><Link className='nav-link' to={'/preSucces'}>Finalizar Compra</Link></button></div></div> : <div className='cartVacio'><h1 >Aun no tiene productos en el carrito.</h1> <p style={{fontSize:'50px'}}>&#128546;</p> </div> 

    return app
}

export default Cart;
