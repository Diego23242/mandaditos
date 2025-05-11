import React, { useState } from 'react';

const LayoutHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">MZ</span>
          </div>
          <h1 className="text-xl font-bold text-gray-800">Mandaditos Zepeda</h1>
        </div>
        
        <button 
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          <div className="w-6 flex flex-col space-y-1">
            <span className={`h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`h-0.5 bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>

        <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 shadow-lg md:shadow-none' : 'opacity-0 md:opacity-100 -translate-y-full md:translate-y-0'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            <li>
              <a href="#servicios" className="block py-2 px-4 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Servicios
              </a>
            </li>
            <li>
              <a href="#nosotros" className="block py-2 px-4 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="block py-2 px-4 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;