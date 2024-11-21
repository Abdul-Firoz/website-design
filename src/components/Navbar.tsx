import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Sun } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com/accounts/login" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com/login" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
              <Facebook size={20} />
            </a>
            <a href="https://linkedin.com/login" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-500 hover:text-gray-700">HOME</Link>
            <Link to="/projects" className="text-gray-500 hover:text-gray-700">PROJECTS</Link>
            <Link to="/services" className="text-gray-500 hover:text-gray-700">SERVICES</Link>
            <Link to="/" className="text-2xl font-light">AYANO</Link>
            <Link to="/studio" className="text-gray-500 hover:text-gray-700">STUDIO</Link>
            <Link to="/news" className="text-gray-500 hover:text-gray-700">NEWS</Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-700">CONTACT</Link>
          </div>
          
          <button className="text-gray-500 hover:text-gray-700">
            <Sun size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;