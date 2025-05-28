
import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ProductPreviewSection from '../components/home/ProductPreviewSection';
import AboutPreviewSection from '../components/home/AboutPreviewSection';
import CTASection from '../components/home/CTASection';
import AnimatedSection from '../components/animations/AnimatedSection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add animation class to body when component mounts
    document.body.classList.add('animate-fade-in');
    
    return () => {
      // Remove animation class when component unmounts
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <HeroSection />
      
      <AnimatedSection 
        animation="animate-fade-in" 
        direction="up" 
        delay={300} 
        threshold={0.2}
      >
        <FeaturesSection />
      </AnimatedSection>
      
      <AnimatedSection 
        animation="animate-fade-in" 
        direction="left" 
        delay={200} 
        threshold={0.2}
      >
        {/* <ProductPreviewSection /> */}
      </AnimatedSection>
      
      <AnimatedSection 
        animation="animate-fade-in" 
        direction="right" 
        delay={200} 
        threshold={0.2}
      >




<section className="py-20 bg-gray-200">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title animate-fade-in">Our Mission & Vision</h2>
            <p className="section-subtitle animate-fade-in [animation-delay:200ms]">
              Guided by clear principles in everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card text-center py-12 animate-fade-in">
              <div className="bg-brand-navy inline-flex items-center justify-center w-20 h-20 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-navy">Our Mission</h3>
              <p className="text-gray-600 px-6">
                To facilitate global trade by connecting high-quality Indian products with international markets, fostering sustainable business relationships, and contributing to economic growth while maintaining the highest standards of quality and service.
              </p>
            </div>

            <div className="card text-center py-12 animate-fade-in [animation-delay:300ms]">
              <div className="bg-brand-green inline-flex items-center justify-center w-20 h-20 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8a6 6 0 0 1-9-5"></path><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path><rect x="2" y="9" width="4" height="12" rx="1"></rect><rect x="10" y="5" width="4" height="16" rx="1"></rect><rect x="18" y="11" width="4" height="10" rx="1"></rect>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-navy">Our Vision</h3>
              <p className="text-gray-600 px-6">
                To become the most trusted export partner globally, known for excellence in product quality, ethical business practices, and customer-focused solutions. We aim to expand our reach to 50+ countries while maintaining our commitment to sustainability and community development.
              </p>
            </div>
          </div>
        </div>
      </section>








        <AboutPreviewSection />
      </AnimatedSection>
      
      <AnimatedSection 
        animation="animate-fade-in" 
        direction="up" 
        delay={200} 
        threshold={0.1}
      >
        <CTASection />
      </AnimatedSection>
    </div>
  );
};

export default Home;
