import React from 'react';
import logo from '../../img/logo.jpg'

const Header = () => {
  return (
    <section>
    <header className="bg-success mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      <img src={logo} alt="Logo" className='logo'/>
        <h1>Star Wars Coffee</h1>
      </div>
    </header>
    </section>
  );
};

export default Header;