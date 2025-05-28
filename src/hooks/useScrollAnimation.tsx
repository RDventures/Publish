
import { useEffect, useRef, useState } from 'react';

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
  duration?: number;
};

export function useScrollAnimation<T extends HTMLElement>(
  options: AnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animationClass = 'animate-fade-in',
    delay = 0,
    direction = 'none',
    once = true,
    duration = 600
  } = options;
  
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add(animationClass);
            
            // Apply delay and duration if specified - ensure target is HTMLElement
            if (entry.target instanceof HTMLElement) {
              if (delay > 0) {
                entry.target.style.animationDelay = `${delay}ms`;
              }
              
              if (duration !== 600) {
                entry.target.style.animationDuration = `${duration}ms`;
              }
            }
            
            // Apply direction-specific class - more subtle transforms
            if (direction === 'up') {
              entry.target.classList.add('from-bottom');
            } else if (direction === 'down') {
              entry.target.classList.add('from-top');
            } else if (direction === 'left') {
              entry.target.classList.add('from-right');
            } else if (direction === 'right') {
              entry.target.classList.add('from-left');
            }
            
            // Unobserve if only triggering once
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
            entry.target.classList.remove(animationClass);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, animationClass, delay, direction, once, duration]);
  
  return { ref: elementRef, isVisible };
}
