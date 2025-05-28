
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine if scrolled down enough for style change
      if (currentScrollPos > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Show/hide navbar on scroll up/down
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      setVisible(isScrollingUp || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-scroll-animation ${
        scrolled ? 'bg-white/90 shadow-lg py-2 backdrop-blur-md' : 'bg-transparent py-4'
      } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ borderBottom: scrolled ? '2px solid #4C8C4A22' : undefined }}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/15969076-dd16-4160-bc3d-536537e58339.png" 
            alt="R&D Ventures Logo" 
            className="h-11 md:h-14 transition-transform duration-300 hover:scale-105 rounded-full shadow-md"
          />
          <span className="ml-3 text-2xl font-black text-brand-navy font-montserrat tracking-tight drop-shadow-md">
            R&D <span className="text-brand-green font-bold">Ventures</span>
          </span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
          <NavLink to="/products" active={location.pathname.startsWith("/products")}>Products</NavLink>
          <NavLink to="/about" active={location.pathname.startsWith("/about")}>About Us</NavLink>
          <NavLink to="/contact" active={location.pathname.startsWith("/contact")}>Contact</NavLink>
        </nav>
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-navy btn-press-effect"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg animate-slide-in-bottom">
          <nav className="container-custom py-4 flex flex-col space-y-5">
            <MobileNavLink to="/" onClick={toggleMenu} active={location.pathname === "/"}>Home</MobileNavLink>
            <MobileNavLink to="/products" onClick={toggleMenu} active={location.pathname.startsWith("/products")}>Products</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu} active={location.pathname.startsWith("/about")}>About Us</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu} active={location.pathname.startsWith("/contact")}>Contact</MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children, active }: { to: string; children: React.ReactNode; active?: boolean }) => (
  <Link 
    to={to}
    className={`font-medium text-lg px-2 pb-1 transition-all duration-300 border-b-2 animated-link ${
      active ? 'text-brand-green border-brand-green' : 'text-brand-navy border-transparent hover:text-brand-green'
    } hover:border-brand-green`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  to,
  children,
  onClick,
  active
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) => (
  <Link 
    to={to} 
    className={`font-medium text-lg px-2 transition-all duration-300 border-l-4 ${
      active ? 'text-brand-green border-brand-green' : 'text-brand-navy border-transparent hover:text-brand-green'
    } hover:border-brand-green py-2 hover:translate-x-1`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
