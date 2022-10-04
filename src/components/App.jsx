import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Navbar from './content/Navbar';
import Home from './content/Home';
import Cart from './content/Cart';
import About from './content/About';
import Contact from './content/Contact';
import Product from './content/Product';
import Footer from './content/Footer';
import Categoria from './content/Categoria';

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