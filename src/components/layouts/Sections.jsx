import React ,{memo, useContext} from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfo } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { DarkModeContext } from '../../context/darkModeContext';
const Sections = () => {

    const {darkMode} = useContext(DarkModeContext)

    return (
        <>
            <li className="nav-item">
                <Link className="nav-link active" to="/">
                    <button className={darkMode ? 'btnSectionsDark' : 'btnSections'}>
                        <FaHome size={20} className={darkMode ? 'iconsDark' : 'icons'} />
                    </button>

                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                    <button className={darkMode ? 'btnSectionsDark' : 'btnSections'}>
                        <GoMail size={20} className={darkMode ? 'iconsDark' : 'icons'} />
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">
                    <button className={darkMode ? 'btnSectionsDark' : 'btnSections'}>
                        <FaInfo size={20} className={darkMode ? 'iconsDark' : 'icons'} />
                    </button>
                </Link>
            </li>
        </>
    );
}

export default memo(Sections);
