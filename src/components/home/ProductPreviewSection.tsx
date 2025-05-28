
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductPreviewSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title animate-fade-in">Our Featured Product</h2>
          <p className="section-subtitle animate-fade-in [animation-delay:200ms]">
            Discover our premium quality rice that meets international standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
          <div className="card overflow-hidden group animate-fade-in">
            <div className="relative h-60 overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Basmati Rice" 
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" 
              />
              <div className="absolute top-4 left-4 bg-brand-green text-white py-1 px-3 rounded-full text-sm">
                Premium
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-brand-navy">Basmati Rice 1121</h3>
            <p className="text-gray-600 mb-4">Long grain, aromatic rice popular internationally.</p>
            <Link to="/products" className="text-brand-green font-medium flex items-center hover:text-brand-navy transition-colors duration-300">
              Learn More
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary inline-flex items-center">
            View Details
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductPreviewSection;
