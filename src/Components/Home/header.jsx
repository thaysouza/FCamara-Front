import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav.css';
import Logo from '../../img/grupo-fcamara-laranja.png';

const Header = () => {
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
      <header id='header'>
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
              <Link className='link-menu' to='/'>
                Lorem Ipsum
              </Link>
            </li>
            <li>
              <Link className='link-menu' to='/cadastro'>
                Cadastre-se
              </Link>
            </li>
            <li>
              <Link className='link-menu link-button' to='/login'>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <script src='home.js'></script>
    </>
  );
};

export default Header;
