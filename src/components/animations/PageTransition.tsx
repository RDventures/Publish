
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
  duration?: number;
  animation?: 'fade' | 'slide' | 'scale';
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  duration = 200, // Faster transitions for more professional feel
  animation = 'fade'
}) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
      
      // Use requestAnimationFrame to ensure smoother transition
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        
        // Use requestAnimationFrame to ensure the DOM has updated before fading in
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTransitionStage('fadeIn');
          });
        });
      }, duration); 
      
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation, duration]);

  // Get animation class based on animation type
  const getAnimationClass = () => {
    switch (animation) {
      case 'slide':
        return `page-transition-slide ${transitionStage}`;
      case 'scale':
        return `page-transition-scale ${transitionStage}`;
      case 'fade':
      default:
        return `page-transition ${transitionStage}`;
    }
  };

  return (
    <div 
      className={getAnimationClass()}
      style={{ 
        transitionDuration: `${duration}ms`,
        animationDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
