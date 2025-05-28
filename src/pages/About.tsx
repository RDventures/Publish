

// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const About = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div>
//       {/* About Hero Section */}
//       <section
//         className="relative py-32 flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(21, 39, 71, 0.8), rgba(21, 39, 71, 0.8)), url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
//         }}
//       >
//         <div className="container-custom text-center text-white">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About R&D Ventures</h1>
//           <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
//             Your trusted partner for global export solutions since 2010.
//           </p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-16 md:py-24">
//         <div className="container-custom">
//           {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative"> */}
//           {/* <div className="relative z-10 animate-fade-in p-6 bg-brand-navy bg-opacity-70 rounded-lg">
//             <h2 className="section-title text-white text-5xl mb-6">Our Story</h2>
//             <p className="text-gray-300 mb-6 text-xl">
//               R&D Ventures began with a simple mission: to connect high-quality Indian products with global markets. Founded in 2010 by a team of international trade experts, our company quickly established itself as a reliable export partner.
//             </p>
//             <p className="text-gray-300 mb-6 text-xl">
//               What started as a small operation focused on agricultural products has grown into a comprehensive export business spanning multiple product categories and serving clients across 30+ countries on 5 continents.
//             </p>
//             <p className="text-gray-300 text-xl">
//               Throughout our journey, we've remained committed to our core values of quality, reliability, sustainability, and ethical business practices. These principles guide every aspect of our operations, from sourcing and quality control to logistics and customer service.
//             </p>
//           </div> */}






// <div className="relative z-10 animate-fade-in p-10 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
//   <h2 className="section-title text-white text-5xl font-bold mb-6 text-center">Our Story</h2>
  
//   <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-5">
//     <p>
//       R&D Ventures was founded with a clear mission: to connect high-quality Indian products with global markets. Established in 2010 by a team of international trade experts, we quickly earned a reputation as a reliable partner in the export industry.
//     </p>
//     <p>
//       What began as a small operation focused on agricultural exports has grown into a comprehensive business, spanning multiple industries and serving clients across more than 30 countries and five continents.
//     </p>
//     <p>
//       At R&D Ventures, we uphold the highest standards of quality, reliability, and ethical business practices. These principles shape every aspect of our work, from sourcing and production to logistics and customer service. Our commitment to sustainability continues to drive our growth and innovation.
//     </p>
//   </div>
// </div>


//           {/* </div> */}
//         </div>
//       </section>

    
//       {/* Values Section */}
//       <section className="py-20">
//         <div className="container-custom">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="section-title animate-fade-in">Our Core Values</h2>
//             <p className="section-subtitle animate-fade-in [animation-delay:200ms]">
//               The principles that guide our business decisions and relationships
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 title: "Quality",
//                 description: "We are committed to delivering products that meet the highest international standards and exceed customer expectations."
//               },
//               {
//                 title: "Integrity",
//                 description: "We conduct business with honesty, transparency, and adherence to ethical practices in all our dealings."
//               },
//               {
//                 title: "Reliability",
//                 description: "We honor our commitments, ensure timely deliveries, and build long-term relationships based on trust."
//               },
//               {
//                 title: "Sustainability",
//                 description: "We promote environmentally responsible practices throughout our supply chain and operations."
//               }
//             ].map((value, index) => (
//               <div
//                 key={index}
//                 className="card hover:border hover:border-brand-green transition-all duration-300 animate-fade-in"
//                 style={{ animationDelay: `${(index + 1) * 100}ms` }}
//               >
//                 <h3 className="text-xl font-bold mb-4 text-brand-navy">{value.title}</h3>
//                 <p className="text-gray-600">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section
//       <section className="py-20 bg-gray-50">
//         <div className="container-custom">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="section-title animate-fade-in">Our Leadership Team</h2>
//             <p className="section-subtitle animate-fade-in [animation-delay:200ms]">
//               Meet the experts behind R&D Ventures' success
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Rajesh Sharma",
//                 position: "Founder & CEO",
//                 image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//                 bio: "With 20+ years of experience in international trade, Rajesh leads our vision and strategic initiatives."
//               },
//               {
//                 name: "Priya Patel",
//                 position: "Operations Director",
//                 image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//                 bio: "Priya oversees our supply chain, logistics, and quality control processes across all product categories."
//               },
//               {
//                 name: "David Kumar",
//                 position: "International Relations",
//                 image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//                 bio: "David manages our global partnerships and regulatory compliance across different markets."
//               }
//             ].map((member, index) => (
//               <div
//                 key={index}
//                 className="card overflow-hidden group animate-fade-in"
//                 style={{ animationDelay: `${(index + 1) * 100}ms` }}
//               >
//                 <div className="relative h-72 mb-6 overflow-hidden">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover object-center transition-transform group-hover:scale-105 duration-500"
//                   />
//                 </div>
//                 <h3 className="text-xl font-bold mb-1 text-brand-navy">{member.name}</h3>
//                 <p className="text-brand-green font-medium mb-4">{member.position}</p>
//                 <p className="text-gray-600">{member.bio}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Achievements */}
//       {/* <section className="py-20">
//         <div className="container-custom">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="section-title animate-fade-in">Our Achievements</h2>
//             <p className="section-subtitle animate-fade-in [animation-delay:200ms]">
//               Recognized globally for excellence and reliability
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { title: "ISO Certified", description: "We are ISO 9001 certified for quality management." },
//               { title: "Global Reach", description: "Operating in 30+ countries and growing." },
//               { title: "Award-Winning", description: "Received numerous industry awards for excellence in service and quality." }
//             ].map((achievement, index) => (
//               <div
//                 key={index}
//                 className="card p-8 animate-fade-in"
//                 style={{ animationDelay: `${(index + 1) * 100}ms` }}
//               >
//                 <h3 className="text-2xl font-bold mb-4 text-brand-navy">{achievement.title}</h3>
//                 <p className="text-gray-600">{achievement.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>  */}

//     </div>
//   );
// };

// export default About;

























import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* About Hero Section */}
      <section
        className="relative py-32 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(21, 39, 71, 0.8), rgba(21, 39, 71, 0.8)), url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
        }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About R&D Ventures</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
            Your trusted partner for global export solutions since 2010.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative"> */}
          {/* <div className="relative z-10 animate-fade-in p-6 bg-brand-navy bg-opacity-70 rounded-lg">
            <h2 className="section-title text-white text-5xl mb-6">Our Story</h2>
            <p className="text-gray-300 mb-6 text-xl">
              R&D Ventures began with a simple mission: to connect high-quality Indian products with global markets. Founded in 2010 by a team of international trade experts, our company quickly established itself as a reliable export partner.
            </p>
            <p className="text-gray-300 mb-6 text-xl">
              What started as a small operation focused on agricultural products has grown into a comprehensive export business spanning multiple product categories and serving clients across 30+ countries on 5 continents.
            </p>
            <p className="text-gray-300 text-xl">
              Throughout our journey, we've remained committed to our core values of quality, reliability, sustainability, and ethical business practices. These principles guide every aspect of our operations, from sourcing and quality control to logistics and customer service.
            </p>
          </div> */}






<div className="relative z-10 animate-fade-in p-10 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
  <h2 className="section-title text-white text-5xl font-bold mb-6 text-center">Our Story</h2>
  
  <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-5">
    <p>
    We are dedicated to delivering high-quality food products to global markets. As a dynamic and innovative export company, we pride ourselves on bridging the gap between local producers and international consumers, ensuring every product meets the highest standards of quality and freshness.    </p>
    <p>
    Founded with a vision to revolutionize the food export industry, we focus on building sustainable partnerships, providing exceptional service, and driving mutual growth for our clients and suppliers. Whether it’s sourcing premium products or managing seamless logistics, we go above and beyond to deliver excellence at every step.

</p>
    <p>
    Throughout our journey, we've remained committed to our core values of quality, reliability, sustainability, and ethical business practices. These principles guide every aspect of our operations, from sourcing and quality control to logistics and customer service.
    </p>
  </div>
</div>


          {/* </div> */}
        </div>
      </section>

    
      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title animate-fade-in">Our Core Values</h2>
            <p className="section-subtitle animate-fade-in [animation-delay:200ms]">
              The principles that guide our business decisions and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality",
                description: "We are committed to delivering products that meet the highest international standards and exceed customer expectations."
              },
              {
                title: "Integrity",
                description: "We conduct business with honesty, transparency, and adherence to ethical practices in all our dealings."
              },
              {
                title: "Reliability",
                description: "We honor our commitments, ensure timely deliveries, and build long-term relationships based on trust."
              },
              {
                title: "Sustainability",
                description: "We promote environmentally responsible practices throughout our supply chain and operations."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="card hover:border hover:border-brand-green transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-4 text-brand-navy">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

    </div>
  );
};

export default About;



















