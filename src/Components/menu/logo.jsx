import React from 'react';
import '../../styles/nav.css';
import LogoOrange from '../../img/logof.png';

const Logo = () => {
    return (
        <>
            <div className='area-logo-nav'>
                <img className='img-logo' src={LogoOrange} alt='Logo' />
            </div>

        </>
    );
};

export default Logo;