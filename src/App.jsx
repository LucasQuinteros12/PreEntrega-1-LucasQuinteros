import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/content/Navbar';
import Home from './components/content/ItemListContainer';
import Cart from './components/content/Cart';
import About from './components/content/About';
import Contact from './components/content/Contact';
import Product from './components/content/ItemList';
import Footer from './components/content/Footer';
import Categoria from './components/content/Categoria';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/producto/:id" element={<Product/>}/>
                    <Route path="/categoria/:id" element={<Categoria/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacto" element={<Contact/>}/>
                    <Route path="/carrito" element={<Cart/>}/>

                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}


export default App;