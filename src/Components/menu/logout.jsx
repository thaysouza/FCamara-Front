import React from 'react';
import '../../styles/nav.css';
import logout from '../../img/logout.png';
import api from '../../services/api.service';
import { useHistory } from 'react-router';


const Logout = () => {
    const history = useHistory();

    const handleClick = () => {
        api.logout();
        history.push('/');
    }
    return (
        <>

            <div className='area-logo-logout' onClick={handleClick}>
                <img className="logout" src={logout} alt='Logo logout' />
            </div>

        </>
    );
};

export default Logout;