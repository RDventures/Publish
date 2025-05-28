
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPreviewSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-navy transform -skew-y-6 origin-left scale-110"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About R&D Ventures</h2>
            <p className="mb-6 text-gray-300">
              We are R&D Ventures, a growing export company dedicated to connecting high-quality Indian products with global markets. With a strong focus on reliability and transparency, we aim to build lasting relationships with clients worldwide.
            </p>
            <p className="mb-8 text-gray-300">
              We currently specialize in premium Makhana (fox nuts), sourced from trusted farmers and processed under strict hygiene standards to ensure quality and freshness in every shipment.
            </p>
            <p className="mb-8 text-gray-300">
              Our goal is simple — to deliver excellence in every order. We’re committed to timely delivery, clear communication, and becoming a trusted name in international trade.
            </p>
            {/* <Link to="/about" className="btn-secondary inline-flex items-center">
              Our Story
              <ArrowRight size={16} className="ml-2" />
            </Link> */}

<Link
  to="/about"
  className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full bg-brand-green text-white border-2 border-brand-green hover:bg-transparent hover:text-brand-green hover:border-2 hover:border-brand-green hover:shadow-2xl transform hover:translate-y-1 transition-all duration-300"
>
  Our Story
  <ArrowRight size={16} className="ml-2" />
</Link>







          </div>
          <div className="order-1 lg:order-2 animate-fade-in [animation-delay:300ms]">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 border-2 border-brand-green rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="R&D Ventures Office"
                className="rounded-lg w-full h-auto z-10 relative"
              />
              <div className="absolute -bottom-4 -right-4 w-64 h-64 border-2 border-brand-green rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
