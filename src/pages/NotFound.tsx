
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Trigger animations after a brief delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <div className="container-custom text-center">
        <div className="max-w-lg mx-auto">
          <h1 
            className={`text-brand-navy text-9xl font-bold mb-4 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
            style={{ animationDuration: '0.8s' }}
          >
            404
          </h1>
          
          <h2 
            className={`text-3xl font-bold mb-6 text-brand-navy opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`} 
            style={{ animationDelay: '0.2s', animationDuration: '0.8s' }}
          >
            Page Not Found
          </h2>
          
          <p 
            className={`text-gray-600 mb-8 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.4s', animationDuration: '0.8s' }}
          >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <Link 
            to="/" 
            className={`btn-primary inline-block opacity-0 ${isLoaded ? 'animate-fade-in' : ''} hover:scale-105 transition-transform btn-press-effect`}
            style={{ animationDelay: '0.6s', animationDuration: '0.8s' }}
          >
            Back to Homepage
          </Link>
        </div>
      </div>
      
      {/* Animated shapes */}
      <div className={`absolute top-40 left-20 w-20 h-20 rounded-full bg-brand-green/20 opacity-0 ${
        isLoaded ? 'animate-float' : ''
      }`} style={{ animationDelay: '0.8s' }}></div>
      
      <div className={`absolute bottom-40 right-20 w-24 h-24 rounded-full bg-brand-navy/10 opacity-0 ${
        isLoaded ? 'animate-float' : ''
      }`} style={{ animationDelay: '1.2s', animationDuration: '4s' }}></div>
    </div>
  );
};

export default NotFound;
