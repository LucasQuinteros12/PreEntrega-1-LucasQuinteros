import React, { useContext, useEffect, useState } from 'react';
import { FavContext } from '../../context/FavContext';

const Fav = () => {
    const { favoritos, quitarFavorito } = useContext(FavContext);
    const [favoritoLocal, setFavoritoLocal] = useState([]);

    useEffect(() => {
        const prodMostar = favoritos.map(producto =>

            <div className="cardHome" key={producto.id} style={{ width: '18rem' }}>
                <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                <div className="card-body" key={producto.id}>
                    <p className="card-text cardName">{producto.nombre}</p>
                    <h5 className="card-title">{producto.marca}</h5>
                    <p className="card-text">{producto.modelo}</p>
                    <p className="card-text">$ {producto.precio}</p>
                    <p className="card-text">Quedan {producto.stock}</p>
                    <button className='btnVerProducto' onClick={() => quitarFavorito(producto.id)}>Eliminar</button>
                </div>
            </div>)
        setFavoritoLocal(prodMostar)

    }, [favoritos]);

    const app = (favoritos.length !== 0) ? <div className='row'> {favoritoLocal} </div> : <div className='cartVacio'><h1 >No tenes favoritos. Añadi eso que te gusta</h1> <p style={{fontSize:'50px'}}>&#128525;</p> </div> 


    return app
}

export default Fav;
