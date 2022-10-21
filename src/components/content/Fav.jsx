import React, { useContext, useEffect, useState } from 'react';
import { FavContext } from '../../context/FavContext';

const Fav = () => {
    const { favoritos, quitarFavorito } = useContext(FavContext);
    const [favoritoLocal, setFavoritoLocal] = useState([]);

    useEffect(() => {
        const prodMostar = favoritos.map(producto =>

            <div className="card" key={producto[0].id} style={{ width: '18rem' }}>
                <img src={producto[1].imagen} className="card-img-top" alt={producto[1].nombre} />
                <div className="card-body" key={producto[0].id}>
                    <p className="card-text cardName">{producto[1].nombre}</p>
                    <h5 className="card-title">{producto[1].marca}</h5>
                    <p className="card-text">{producto[1].modelo}</p>
                    <p className="card-text">$ {producto[1].precio}</p>
                    <p className="card-text">Quedan {producto[1].stock}</p>
                    <button className='btnVerProducto' onClick={() => quitarFavorito(producto)}>Eliminar</button>
                </div>
            </div>)
        setFavoritoLocal(prodMostar)

    }, [favoritos]);

    const app = (favoritos.length !== 0) ? <div className='row'> {favoritoLocal} </div> : <h1>No Hay nada! Añadi eso que tanto te gusta</h1>

    return app
}

export default Fav;
