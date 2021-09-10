import React from 'react';
import logofcamara from '../img/grupo-fcamara-negativo.png';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { SiGlassdoor } from 'react-icons/si';
import { FiYoutube } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

import '../styles/footer.css';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='l-footer'>
          <h1>
            <img src={logofcamara} alt='' />
          </h1>
        </div>
        <div className='r-footer'>
          <a
            href='https://pt-br.facebook.com/grupo.fcamara/'
            target='_blank'
            rel='noreferrer noopener'>
            {' '}
            <FiFacebook />
          </a>

          <a
            href='https://www.linkedin.com/company/grupofcamara/'
            target='_blank'
            rel='noreferrer noopener'>
            {' '}
            <FiLinkedin />
          </a>

          <a
            href='https://www.instagram.com/grupo.fcamara/'
            target='_blank'
            rel='noreferrer noopener'>
            {' '}
            <FiInstagram />
          </a>

          <a
            href='https://www.youtube.com/channel/UCHsQ04xha1YKv48dSzQFlpw'
            target='_blank'
            rel='noreferrer noopener'>
            {' '}
            <FiYoutube />
          </a>

          <a
            href='https://www.glassdoor.com.br/Avalia%C3%A7%C3%B5es/Grupo-FCamara-Avalia%C3%A7%C3%B5es-E668818.htm'
            target='_blank'
            rel='noreferrer noopener'>
            {' '}
            <SiGlassdoor />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
