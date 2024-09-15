import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Paul Okweso</div>
        
        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Links for larger screens */}
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <a href="#home" className="block md:inline-block text-gray-800 hover:text-blue-600 px-4 py-2">Home</a>
          <a href="#about" className="block md:inline-block text-gray-800 hover:text-blue-600 px-4 py-2">About</a>
          <a href="#projects" className="block md:inline-block text-gray-800 hover:text-blue-600 px-4 py-2">Projects</a>
          <a href="#contact" className="block md:inline-block text-gray-800 hover:text-blue-600 px-4 py-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
