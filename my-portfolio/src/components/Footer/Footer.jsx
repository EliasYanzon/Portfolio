import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center md:text-left">
          <p>Mi ubicación</p>
        </div>
        <div className="space-x-4">
          <a href="https://www.linkedin.com/in/elias-yanzon-6167b4254/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/EliasYanzon" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <div className="text-center py-2">
        <p className="text-gray-500">© {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;