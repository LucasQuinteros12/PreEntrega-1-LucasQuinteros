import React from 'react';
import Navbar from './content/Navbar';
import Cards from './layouts/Cards';
import Home from './content/Home';
import '../styles/App.css';
import CartWidget from './layouts/CartWidget';
import ItemListContainer from './layouts/ItemListContainer';


const App = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer greeting={"Seleccione alguno de estos productos"}/>
            <Cards/>
            <Home/>
        </>
    );
}

export default App;
