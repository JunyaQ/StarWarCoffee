import React from 'react';
import logo from '../../img/logo.jpg'
import {Link,Router,BrowserRouter} from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <section>
    <header className="bg-success mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
     <img src={logo} alt="Logo" className='logo'/> 
     
     <BrowserRouter>
     <h1><Link to='/'  className='namebar' >Star Wars Coffee</Link></h1>
     </BrowserRouter>
       
  
      </div>
    </header>
    </section>
  );
};

export default Header;