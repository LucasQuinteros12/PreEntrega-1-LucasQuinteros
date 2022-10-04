import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Dropdow = ({ lista }) => {

    const [list, setList] = useState([]);
    useEffect(() => {
        const listaDrop = lista.map((categoria, indice) =>
            <Link key={indice} className='dropdown-item btnCategories' to={`/categoria/${indice + 1}`}>{categoria}</Link>
        )
        setList(listaDrop)

    }, []);

    return (
        <>
            <li className="nav-item dropdown">
                <button className="nav-link btn btnSections" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-list icons"></i>
                </button>
                <div className="dropdown-menu">
                    {list}
                </div>
            </li>
        </>
    );
}

export default Dropdow;
