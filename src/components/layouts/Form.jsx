import React from 'react';

const Form = ({busqueda}) => {
    return (
        <>
            <form className="d-flex">
                <input className="form-control me-sm-2" type="text" placeholder="Search..." />
                <button className="btnBuscar  my-2 my-sm-0" type="submit">Search</button>
            </form>
        </>
    );
}

export default Form;
