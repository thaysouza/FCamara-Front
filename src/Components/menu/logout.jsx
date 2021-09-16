import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav.css';
import logout from '../../img/logout.png';


const Logout = () => {
    return (
        <>

            <div className='area-logo-logout'>
                <img className="logout" src={logout} alt='Logo logout' />
            </div>

        </>
    );
};

export default Logout;