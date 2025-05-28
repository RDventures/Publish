
import React, { useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
  staggerChildren?: boolean;
  tag?: keyof JSX.IntrinsicElements;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'animate-fade-in',
  direction = 'none',
  duration = 600,
  threshold = 0.1,
  staggerChildren = false,
  tag: Tag = 'div'
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            
            // Add animation class
            element.classList.add(animation);
            element.classList.remove('opacity-0');
            
            // Handle staggered children animation
            if (staggerChildren) {
              element.classList.add('in-view');
            }
            
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );
    
    const currentElement = sectionRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animation, staggerChildren, threshold]);

  // Create direction-based classes - with more subtle translations
  const getDirectionClass = () => {
    switch (direction) {
      case 'up': return 'transform translate-y-4';
      case 'down': return 'transform -translate-y-4';
      case 'left': return 'transform translate-x-4';
      case 'right': return 'transform -translate-x-4';
      default: return '';
    }
  };

  const animationStyles = {
    animationDelay: delay ? `${delay}ms` : undefined,
    transitionDuration: `${duration}ms`,
  };

  const baseClasses = `opacity-0 transition-all ${getDirectionClass()} ${className}`;
  const staggerClass = staggerChildren ? 'stagger-animation' : '';

  // Use createElement instead of JSX to avoid type issues with dynamic elements
  return React.createElement(
    Tag,
    {
      ref: Tag === 'div' ? sectionRef : undefined,
      className: `${baseClasses} ${staggerClass}`,
      style: animationStyles
    },
    children
  );
};

export default AnimatedSection;
