import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore, getDocs, getDoc, doc} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "tienda-online-react-34755.firebaseapp.com",
  projectId: "tienda-online-react-34755",
  storageBucket: "tienda-online-react-34755.appspot.com",
  messagingSenderId: "675773965206",
  appId: "1:675773965206:web:475a35e7af829a76b8b3b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const cargarDB = async () => {
  const promise = await fetch('./json/productos.json');
  const productos = await promise.json()
  productos.forEach(async (producto) => {
    await addDoc(collection(db, "productos"), {
      nombre: producto.nombre,
      marca: producto.marca,
      modelo: producto.modelo,
      precio: producto.precio,
      stock: producto.stock,
      imagen: producto.img,
      categoria: producto.idCategoria
    });
  });
}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id));
  const prod = {id, ...producto.data()};
  return prod
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"));
  const items = productos.docs.map(producto => {
    return {id: producto.id, ...producto.data()}
  });
  return items;
}


const createOrdenDeCompra = async (nombre, apellido, email, dni, direccion) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
    nombre: nombre,
    apellido: apellido,
    email: email,
    dni: dni,
    direccion,
  })

  return ordenCompra
}  

const getOrdenCompra = async (id) =>{
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id));
  return ordenCompra
} 

export { cargarDB, getProductos, getProducto, createOrdenDeCompra, getOrdenCompra }; 