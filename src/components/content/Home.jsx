import React, { useState, useEffect } from 'react';
import CartCounter from '../layouts/CartCounter';
import { consultarBDD } from '../../utils/FuncionesUtiles';
const Home = () => {
    const [producto, setProductos] = useState([])

    useEffect(() => {
        consultarBDD().then(producto => setProductos(producto))
    }, []);

    return (
        <div className='row'>
            {producto}
        </div>
    );
}
export default Home;
