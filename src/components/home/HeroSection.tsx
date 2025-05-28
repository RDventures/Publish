
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// import HomePageImage from "../../Pictures/Home_page.png";


// const HeroSection: React.FC = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Trigger animations after component mounts
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{
//       backgroundImage: 'linear-gradient(rgba(21, 39, 71, 0.85), rgba(21, 39, 71, 0.85)), url(https://images.unsplash.com/photo-1505578183665-8bf9a1d78979?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
//     }}>
//       <div className="container-custom text-center text-white relative z-10">
//         <div className="max-w-3xl mx-auto space-y-6">
//           <h1 
//             className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
//             style={{ animationDelay: '0.3s', animationDuration: '0.8s' }}
//           >
//             Rice Export
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-lightGreen animate-pulse-subtle">
//               Excellence
//             </span>
//           </h1>

//           <p 
//             className={`text-lg md:text-xl mb-8 text-gray-200 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
//             style={{ animationDelay: '0.6s', animationDuration: '0.8s' }}
//           >
//             Delivering premium quality rice products to global markets with reliability and exceptional service.
//           </p>

//           <div 
//             className={`flex flex-col sm:flex-row justify-center gap-4 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
//             style={{ animationDelay: '0.9s', animationDuration: '0.8s' }}
//           >
//             <Link 
//               to="/products" 
//               className="btn-primary hover:scale-105 transition-all duration-300 btn-press-effect"
//             >
//               Explore Products
//             </Link>
//             <Link 
//               to="/contact" 
//               className="btn-secondary hover:scale-105 transition-all duration-300 btn-press-effect"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Animated background elements */}
//       <div className={`absolute bottom-10 left-10 w-20 h-20 rounded-full bg-brand-green/20 opacity-0 ${
//         isLoaded ? 'animate-float' : ''
//       }`} style={{ animationDelay: '0.2s' }}></div>

//       <div className={`absolute top-20 right-10 w-16 h-16 rounded-full bg-brand-lightGreen/20 opacity-0 ${
//         isLoaded ? 'animate-float' : ''
//       }`} style={{ animationDelay: '0.5s' }}></div>

//       <div className={`absolute bottom-40 right-20 w-12 h-12 rounded-full bg-white/10 opacity-0 ${
//         isLoaded ? 'animate-float' : ''
//       }`} style={{ animationDelay: '0.8s' }}></div>
//     </section>
//   );
// };

// export default HeroSection;







import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomePageImage from "../../Pictures/Home_page.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${HomePageImage})`,
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-blur-sm z-0" />

      {/* Text Content */}
      <div className="container-custom text-center relative z-10 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '-0.5px',
            }}
          >
            Driving Innovation in{" "}
            <span className="text-brand-green">Global Trade</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl font-medium text-gray-800" initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Supplying Premium Makhana to the World — Straight from India’s Heartland.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to="/products"
              className="btn-primary hover:scale-105 transition-all duration-300 btn-press-effect"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="btn-secondary hover:scale-105 transition-all duration-300 btn-press-effect"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
