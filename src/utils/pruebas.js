import './firebase.js';
import { createOrdenDeCompra, getOrdenCompra } from './firebase.js';


const producto = {
    "idCategoria": 1,
    "nombre": "Notebook",
    "marca": "HP",
    "modelo": "XYZ",
    "precio": 100000,
    "stock": 30,
    "img": "https://firebasestorage.googleapis.com/v0/b/tienda-online-react-34755.appspot.com/o/Imagenes%2Fnotebook-lenovo.jpg?alt=media&token=f6e9f8cc-7007-47a4-9db9-64b7c57fb7f1"
}

/*  createProducto(producto).then(estado => console.log(estado)); */ 
/* getProducto("7my5WQBg9APAF3nHieti").then(producto => {
    const prod = producto[1]
    prod.stock -= 5
    updateProducto("7my5WQBg9APAF3nHieti", prod)
}); */




/* deleteProducto("aEskrwWktx0RACbBp4pr").then(estado => {
    console.log(estado);
    
}) */

/* createOrdenDeCompra(120000, "pepito", "perez", "pep@gmail.com", 3334213, "Av. Siempre Viva 123").then(orden => {
    console.log(orden);
    
}) */

/* getOrdenCompra("64QgCMO5fuZX1jsMniHJ").then(orden =>{
    console.log(orden.id)
}) */