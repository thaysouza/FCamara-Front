import React from 'react';
import logofcamara from "../img/grupo-fcamara-negativo.png";

import "../styles/footer.css"

const Footer = () => {
    return (
        <>

            <footer className="footer">
                <div className="l-footer">
                    <h1><img src={logofcamara} /></h1>
                </div>
                <div className="r-footer">
                    <i class="fab fa-facebook-square fa-lg"></i>
                    <i class="fab fa-instagram fa-lg" ></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </footer>

        </>
    );
};

export default Footer;