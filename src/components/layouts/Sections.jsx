import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTshirt, FaInfo } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link active" to="/">
                    <button className='btnSections'>
                        <FaHome size={25} className='icons' />
                    </button>

                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/producto">
                    <button className='btnSections'>
                        <FaTshirt size={25} className='icons' />
                    </button>

                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                    <button className='btnSections'>
                        <GoMail size={25} className='icons' />
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">
                    <button className='btnSections'>
                        <FaInfo size={25} className='icons' />
                    </button>
                </Link>
            </li>
        </>
    );
}

export default Sections;
