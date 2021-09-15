import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './Components/Footer';
import Routes from './routes';

function App() {
  return (
    <>
      
      <Router>
        <ToastContainer autoClose={3000} theme='colored' />
        <Routes />
      </Router>
      <Footer />
    </>
  );
}

export default App;
