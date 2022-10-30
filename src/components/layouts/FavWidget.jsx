import React,{useContext} from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
const FavWidget = () => {

    const {darkMode} = useContext(DarkModeContext)

    return (
        <div>

            <Link className="nav-link" to="/favoritos">
                <button className={darkMode ? 'btnSectionsDark' : 'btnSections'}>
                    <FaHeart size={20} className={darkMode ? 'iconsDark' : 'icons'} />
                </button>
            </Link>

        </div>
    );
}

export default FavWidget;
