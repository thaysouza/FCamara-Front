import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Footer from './Components/Footer';
import Routes from './routes';

function App() {
  return (
    <>
      <Router>
        <Routes />
        <Footer />
      </Router>
    </>
  );
}

export default App;

