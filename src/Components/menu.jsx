import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
import Logo from '../img/grupo-fcamara-laranja.png';
import logout from '../img/logout.png';

const Menu = () => {
  function toggleMenu(event) {
    if (event.type === 'touchstart') {
      event.preventDefault();
    }
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  return (
    <>
      <header id='header' className="colorOrange">
        <div className='area-logo-nav'>
          <img className='img-logo' src={Logo} alt='Logo' />
        </div>

        <nav id='nav'>
          <button
            id='btn-mobile'
            area-label='Abrir Menu'
            aria-haspopup='true'
            aria-controls='menu'
            area-expanded='false'
            onClick={toggleMenu}
            onTouchStart={toggleMenu}>
            <span id='hamburger-button'></span>
          </button>
          <ul id='menu' role='menu'>
            <li>
              <Link className='link-menu ' to='/unidade'>
                Agendamento
              </Link>
            </li>
            <li>
              <Link className='link-menu link-button' to='/perfil'>
                Perfil
              </Link>
            </li>

            <li>
            <img className="logout" src={logout} alt='Logo logout' />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Menu;
