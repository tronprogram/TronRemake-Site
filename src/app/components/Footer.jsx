import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p> {new Date().getFullYear()} <a href='https://teamtbd-site.vercel.app'>Team TBD.</a> Todos los derechos de TRON son de Walt Disney.</p> <span>Realizado por la técnica de programación del grado 11 del colegio Carlos Vicente Rey.</span>
      </div>
    </footer>
  );
};

export default Footer;