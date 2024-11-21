import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl">AYANO</Link>
            <p className="text-sm text-gray-500">© By Gola Templates</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/accounts/login" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/login" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com/login" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Pages Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase">Pages</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-500 hover:text-gray-700">HOME</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-gray-700">SERVICES</Link></li>
              <li><Link to="/studio" className="text-gray-500 hover:text-gray-700">STUDIO</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-gray-700">CONTACT</Link></li>
            </ul>
          </div>

          {/* CMS Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase">CMS</h3>
            <ul className="space-y-2">
              <li><Link to="/work" className="text-gray-500 hover:text-gray-700">WORK</Link></li>
              <li><Link to="/work-single" className="text-gray-500 hover:text-gray-700">WORK SINGLE</Link></li>
              <li><Link to="/blog" className="text-gray-500 hover:text-gray-700">BLOG</Link></li>
              <li><Link to="/blog-single" className="text-gray-500 hover:text-gray-700">BLOG SINGLE</Link></li>
            </ul>
          </div>

          {/* Utility Pages Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase">Utility Pages</h3>
            <ul className="space-y-2">
              <li><Link to="/404" className="text-gray-500 hover:text-gray-700">404 ERROR PAGE</Link></li>
              <li><Link to="/licensing" className="text-gray-500 hover:text-gray-700">LICENSING</Link></li>
            </ul>
            <div className="pt-4 space-y-2">
              <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium">Buy Template</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">More Templates</a>
              <a href="#" className="block text-gray-700 hover:text-gray-900">Made in Framer</a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-900">
            MORE TEMPLATES
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;