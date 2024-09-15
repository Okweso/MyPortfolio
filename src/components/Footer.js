import React from 'react';
import { FaFacebookF, FaTiktok, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://web.facebook.com/paul.okweso" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.tiktok.com/@okweso?_t=8pi1TyuONRV&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaTiktok size={24} />
          </a>
          <a href="https://www.linkedin.com/in/paul-okweso-94933a230/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://github.com/Okweso" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            <FaGithub size={24} />
          </a>
        </div>

        {/* Copyright and Info */}
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
          <p>Designed & Built by Paul Okweso</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
