import React from 'react';

const Contact = () => {

    const datosFormulario = React.useRef();

    const consultarForm = (e) => {
        e.preventDefault();
        const datForm = new FormData(datosFormulario.current);
        console.log(Object.fromEntries(datForm));

    }


    return (

        <>
            <div className="container">
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
                        <textarea name="consulta" rows={10} cols={50} defaultChecked={"Escribi tu consulta aqui"}></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark">Enviar</button>
                </form>
            </div>

        </>
    );
}

export default Contact;
