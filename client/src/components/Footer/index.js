import React from 'react';

const Footer = () => {
  return (
    <section>
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
        &copy;{new Date().getFullYear()} JunyaQ
      </div>
    </footer>
    </section>
  );
};

export default Footer;