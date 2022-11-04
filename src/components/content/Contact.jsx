import React ,{useContext}from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
const Contact = () => {
    const {darkMode} = useContext(DarkModeContext);

    const datosFormulario = React.useRef();

    const consultarForm = (e) => {
        e.preventDefault();
        const datForm = new FormData(datosFormulario.current);
        console.log(Object.fromEntries(datForm));
        e.target.reset();
    }


    return (

        <div className={darkMode ? 'contactContainerDark' : 'contactContainer'}>
            <div className={darkMode ? "container containerFormDark" : "container containerForm"}>
                <form onSubmit={consultarForm} ref={datosFormulario} >
                    <div className="mb-4">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" name="nombre" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="mb-4 ">
                        <textarea name="consulta" rows={9} cols={68} placeholder="Escriba aqui su consulta..." className='text-area'></textarea>
                    </div>
                    <button type="submit" className={darkMode ? "btnVerProductoDark" : "btnVerProducto"}>Enviar</button>
                </form>
            </div>

        </div>
    );
}

export default Contact;
