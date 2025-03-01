import React, {memo, useContext} from 'react';
import {DarkModeContext} from '../../context/darkModeContext';

const Footer = () => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <>
            <footer className={darkMode ? "footerDark text-center text-white" : "text-center text-white"}>
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
                        {/* Twitter */}
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button"><i className="fab fa-twitter" /></a>
                        {/* Google */}
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button"><i className="fab fa-google" /></a>
                        {/* Instagram */}
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button"><i className="fab fa-instagram" /></a>
                        {/* Linkedin */}
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
                        {/* Github */}
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button"><i className="fab fa-github" /></a>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright:
                    <a className="text-white" href="https://port-folio-lyart.vercel.app/" target="blanck"> Lucas Quinteros</a>
                </div>
                {/* Copyright */}
            </footer>

        </>
    );
}

export default memo(Footer);
