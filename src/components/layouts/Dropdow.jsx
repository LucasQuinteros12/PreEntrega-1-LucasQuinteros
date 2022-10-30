import React,{ useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';


const Dropdow = ({ lista }) => {

    const [list, setList] = useState([]);
    useEffect(() => {
        const listaDrop = lista.map((categoria, indice) =>
            <Link key={indice} className={darkMode ? 'dropdown-item btnCategoriesDark' : 'dropdown-item btnCategories'} to={`/categoria/${indice + 1}`}>{categoria}</Link>
        )
        setList(listaDrop)

    }, []);

    const {darkMode} = useContext(DarkModeContext)

    return (
        <>
            <li className="nav-item dropdown">
                <button className={darkMode ? "nav-link btn btnSectionsDark" : 'nav-link btn btnSections'} data-bs-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">
                    <i className={darkMode ? "fas fa-list iconsDark" : 'fas fa-list icons' }></i>
                </button>
                <div className="dropdown-menu">
                    {list}
                </div>
            </li>
        </>
    );
}

export default Dropdow;
