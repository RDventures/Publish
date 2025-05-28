
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Home, Info, Package } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-6 border-t border-brand-green/30 shadow-inner">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="animate-fade-in [animation-delay:100ms]">
            <div className="flex items-center mb-6">
              <div className="flex items-center bg-white rounded-full p-2 shadow-lg">
                <img
                  src="/lovable-uploads/15969076-dd16-4160-bc3d-536537e58339.png"
                  alt="R&D Ventures Logo"
                  className="h-12 md:h-14 rounded-full"
                  style={{ boxShadow: '0 2px 12px rgba(40, 90, 60, 0.15)' }}
                />
              </div>
              <span className="ml-3 text-2xl font-bold text-brand-green font-montserrat tracking-tight drop-shadow">
                R&D Ventures
              </span>
            </div>
            <p className="mb-6 text-brand-gray text-sm">
              Your trusted partner for global export solutions. We provide high-quality products with reliable service to businesses worldwide.
            </p>
            <div className="flex space-x-3">
              {/* Socials could be dynamic */}
              {/* <a href="#" aria-label="Facebook" className="bg-white/10 text-white hover:bg-brand-green hover:text-brand-navy rounded-full p-2 border border-transparent hover:border-brand-green transition">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Twitter" className="bg-white/10 text-white hover:bg-brand-green hover:text-brand-navy rounded-full p-2 border border-transparent hover:border-brand-green transition">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-white/10 text-white hover:bg-brand-green hover:text-brand-navy rounded-full p-2 border border-transparent hover:border-brand-green transition">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" aria-label="Instagram" className="bg-white/10 text-white hover:bg-brand-green hover:text-brand-navy rounded-full p-2 border border-transparent hover:border-brand-green transition">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a> */}
            </div>
          </div>
          <div className="animate-fade-in [animation-delay:200ms]">
            <h3 className="text-xl font-bold mb-6 text-brand-green font-montserrat tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-green transition-colors duration-300 flex items-center">
                  <Home size={16} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-green transition-colors duration-300 flex items-center">
                  <Package size={16} className="mr-2" />
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-green transition-colors duration-300 flex items-center">
                  <Info size={16} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-green transition-colors duration-300 flex items-center">
                  <Mail size={16} className="mr-2" />
                  Contact
                </Link>
              </li>


              {/* <li>
                <Link to="/" className="hover:text-brand-green transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-brand-green transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="animate-fade-in [animation-delay:300ms]">
            <h3 className="text-xl font-bold mb-6 text-brand-green font-montserrat tracking-wide">Product Categories</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/products" className="hover:text-brand-green transition-colors duration-300">Makhana</Link>
              </li>
              {/* <li>
                <Link to="/products" className="hover:text-brand-green transition-colors duration-300">Spices & Herbs</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-green transition-colors duration-300">Agricultural Products</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-green transition-colors duration-300">Handicrafts</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-green transition-colors duration-300">Organic Products</Link>
              </li> */}
            </ul>
          </div>
          <div className="animate-fade-in [animation-delay:400ms]">
            <h3 className="text-xl font-bold mb-6 text-brand-green font-montserrat tracking-wide">Contact</h3>
            <ul className="space-y-4 text-sm">
              {/* <li className="flex">
                <Home size={18} className="mr-3 flex-shrink-0" />
                <span>123 Export Street, Business District, Mumbai, India</span>
              </li>
              <li>
                <a href="tel:+911234567890" className="hover:text-brand-green transition-colors duration-300 flex items-center">
                  <Phone size={18} className="mr-3" />
                  +91 1234 567 890
                </a>
              </li> */}
              <li>
                <a href="mailto:info@rdventures.com" className="hover:text-brand-green transition-colors duration-300 flex items-center">
                  <Mail size={18} className="mr-3" />
                  info@rndventures.co.in
                </a>
              </li>
              <li>
                <a href="https://www.rndventures.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors duration-300 flex items-center">
                  <Globe size={18} className="mr-3" />
                  www.rndventures.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-brand-green/50 my-8" />
        <div className="text-center text-sm opacity-80">
          <p>
            &copy; {new Date().getFullYear()} <span className="font-bold tracking-wide">R&D Ventures</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
