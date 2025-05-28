
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from '../animations/PageTransition';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add animation class to the layout when it mounts
    document.body.classList.add('layout-loaded');
    
    // Set loaded state after a small delay for entrance animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50); // Reduced from 100ms to 50ms for faster initial load
    
    return () => {
      document.body.classList.remove('layout-loaded');
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-screen transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main className="flex-grow pt-16">
        <PageTransition animation="fade" duration={200}>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
