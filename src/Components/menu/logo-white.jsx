import React from 'react';
import '../../styles/nav.css';
import Logo from '../../img/logof-white.png';


const LogoWhite = () => {
    return (
        <>
            <div className='area-logo-nav'>
                <img className='img-logo' src={Logo} alt='Logo' />
            </div>

        </>
    );
};

export default LogoWhite;