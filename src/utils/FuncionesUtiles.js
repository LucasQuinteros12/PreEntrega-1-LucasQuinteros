import CartCounter from "../components/layouts/CartCounter"

export const consultarBDD = async () => {
    const response = await fetch('./json/productos.json')
    const productos = await response.json()
    const cardProducto = productos.map(producto => 
        <div className="card cardProductos" key={producto.id}>
            <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.marca}</p>
                <p className="card-text">{producto.presentacion}</p>
                <button className='btn btn-dark'> Ver Producto</button>
                <CartCounter />
            </div>
        </div>
    
    )
    return cardProducto
}