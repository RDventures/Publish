
import React from 'react';
import { Globe, Package, Mail, Phone } from 'lucide-react';

const featuresData = [
  {
    icon: <Globe size={40} className="text-brand-green " />,
    title: "Global Reach",
    description: "Connecting businesses across continents with reliable export solutions"
  },
  {
    icon: <Package size={40} className="text-brand-green" />,
    title: "Quality Products",
    description: "Strictly controlled quality standards ensuring premium products"
  },
  {
    icon: <Mail size={40} className="text-brand-green" />,
    title: "Fast Communication",
    description: "Responsive team ready to assist with all your inquiries"
  },
  {
    icon: <Phone size={40} className="text-brand-green" />,
    title: "Dedicated Support",
    description: "Customer-focused service throughout your journey with us"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title animate-fade-in">Why Choose R&D Ventures?</h2>
          <p className="section-subtitle animate-fade-in [animation-delay:200ms]">
            We bring quality, reliability, and global expertise to every business relationship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="card text-center p-8 hover:border-brand-green hover:border animate-fade-in" 
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="mx-auto mb-4 flex items-center justify-center">  {/* //change it  */}
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-navy">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
