import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CarritoProvider } from './context/CarritoContext';
import { FavoritosProvider } from './context/FavContext';
import './styles/index.css';
import './utils/pruebas.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoritosProvider>
        <CarritoProvider>
            <App />
        </CarritoProvider>
    </FavoritosProvider>
);