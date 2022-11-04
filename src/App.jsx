import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { DarkModeProvider } from './context/darkModeContext';
import Navbar from './components/content/Navbar';
import Home from './components/content/ItemListContainer';
import Cart from './components/content/Cart';
import About from './components/content/About';
import Contact from './components/content/Contact';
import Product from './components/content/ItemList';
import Footer from './components/content/Footer';
import Categoria from './components/content/Categoria';
import Fav from './components/content/Fav';
import PreSucces from './components/content/PreSucces';
import Success from './components/content/Success';


const App = () => {
    return (
        <>
            <DarkModeProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/producto/:id" element={<Product />}/>
                        <Route path="/categoria/:id" element={<Categoria />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/contacto" element={<Contact />}/>
                        <Route path="/carrito" element={<Cart />}/>
                        <Route path="/favoritos" element={<Fav />}/>
                        <Route path="/preSucces" element={<PreSucces />}/>
                        <Route path="/success" element={<Success />}/>
                        <Route path="*" element={<h1> Error 404 </h1>}/>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </DarkModeProvider>

        </>
    );
}


export default App;