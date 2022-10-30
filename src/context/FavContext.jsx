import React, {createContext, useState} from 'react';

const FavContext = createContext()

const FavoritosProvider = (props) => {

    const [favoritos, setFavoritos] = useState([]);

    const agregarFavorito = (prod) =>{
        const aux = favoritos;
        let indice = aux.findIndex(producto => producto.id === prod.id);

        if(indice === -1){
           const prodFav = {...prod}
           aux.push(prodFav);
        }
        setFavoritos([...aux]);
    }

    const quitarFavorito = (prod) =>{
        const aux = favoritos;
        let indice = aux.findIndex(producto => producto.id === prod.id);

        aux.splice(indice, 1);
        setFavoritos([...aux]);
    }

    return (
        <>
            <FavContext.Provider value={{favoritos, agregarFavorito, quitarFavorito}}>
                {props.children}
            </FavContext.Provider>
        </>
    );
}

export {FavContext, FavoritosProvider};
