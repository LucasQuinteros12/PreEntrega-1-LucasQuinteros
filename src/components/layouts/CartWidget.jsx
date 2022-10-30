import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { CarritoContext } from '../../context/CarritoContext';
import { DarkModeContext } from '../../context/darkModeContext';



const CartWidget = () => {
    const { carrito } = useContext(CarritoContext);

    const contadorCarrito = () => {
        let contador = 0;
        carrito.forEach((producto) => {
            contador += producto.cantidad;
        });
        return contador;
    }
    const {darkMode} = useContext(DarkModeContext)

    return (
        <>
            <Link to="/carrito">
                <button className={darkMode ? 'btnSectionsDark' : 'btnSections'}>
                    
                    <Badge badgeContent={contadorCarrito()} color="secondary" >
                        <ShoppingCartOutlinedIcon size={20} className={darkMode ? 'iconsDark' : 'icons'} />
                    </Badge>
                    
                </button>
            </Link>
        </>
    );
}

export default CartWidget;
