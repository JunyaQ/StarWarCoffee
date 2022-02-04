import React from 'react';
import logo from '../../img/logo.jpg'
import { BrowserRouter as Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
    <header className="bg-success mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <Link to="/home">
      <img src={logo} alt="Logo" className='logo'/>
      </Link>
     
      <Link to="/home">
        <h1>Star Wars Coffee</h1>
        </Link>
      </div>
    </header>
    </section>
  );
};

export default Header;