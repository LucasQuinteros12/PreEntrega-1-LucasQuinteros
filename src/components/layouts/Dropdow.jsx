import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const Dropdow = ({ lista }) => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <button className='btnSections'>
                        <RiArrowDropDownLine size={35} className='icons' />
                    </button>
                </a>
                <div className="dropdown">
                    <button className='dropdown-item btn btn1'><Link className='btnCategories' to={`/categoria/1`}>{lista[0]}</Link></button>
                    <button className='dropdown-item btn'><Link className='btnCategories' to={`/categoria/2`}>{lista[1]}</Link></button>
                    <button className='dropdown-item btn'><Link className='btnCategories' to={`/categoria/3`}>{lista[2]}</Link></button>
                </div>
            </li>
        </>
    );
}

export default Dropdow;
