
import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CTASection: React.FC = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>({ 
    threshold: 0.3
  });

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-brand-lightGreen animate-gradient-flow"></div>
      
      {/* Animated shapes */}
      <div className={`absolute top-0 left-0 w-full h-32 opacity-0 ${sectionVisible ? 'animate-fade-in' : ''}`} 
           style={{ animationDelay: '0.2s' }}>
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 animate-float"></div>
        <div className="absolute top-20 right-40 w-16 h-16 rounded-full bg-white/5 animate-float" 
             style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container-custom relative z-10 text-center text-white">
        <h2 
          className={`text-3xl md:text-4xl font-bold mb-6 opacity-0 ${sectionVisible ? 'animate-fade-in' : ''}`} 
          style={{ animationDelay: '0.3s' }}
        >
          Ready to Start Exporting with Us?
        </h2>
        
        <p 
          className={`text-lg mb-8 max-w-2xl mx-auto opacity-0 ${sectionVisible ? 'animate-fade-in' : ''}`} 
          style={{ animationDelay: '0.5s' }}
        >
          Join hundreds of businesses that trust R&D Ventures for their global export needs.
        </p>
        
        <div 
          className={`opacity-0 ${sectionVisible ? 'animate-fade-in' : ''}`} 
          style={{ animationDelay: '0.7s' }}
        >
          <Link 
            to="/contact" 
            className="bg-white text-brand-green hover:bg-brand-navy hover:text-white py-3 px-8 rounded-md transition-all duration-300 font-medium inline-block transform hover:scale-105 hover:shadow-xl btn-press-effect"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
      
      {/* Bottom animated shapes */}
      <div className={`absolute bottom-0 right-0 w-full h-32 opacity-0 ${sectionVisible ? 'animate-fade-in' : ''}`}
           style={{ animationDelay: '0.4s' }}>
        <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-white/10 animate-float"
             style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-20 left-40 w-16 h-16 rounded-full bg-white/5 animate-float"
             style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default CTASection;
