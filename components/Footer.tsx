
import React from 'react';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-gray-300 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos los derechos reservados.</p>
        <p className="text-xs mt-1">Soluciones Tecnológicas Innovadoras para tu Empresa.</p>
        {/* Placeholder for social media or other links */}
        {/* <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Twitter</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
