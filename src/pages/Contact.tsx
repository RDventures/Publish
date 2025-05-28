
import React, { useEffect } from 'react';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import FAQ from '@/components/contact/FAQ';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {/* Contact Hero - Simplified */}
      <section
        className="relative py-32 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(21, 39, 71, 0.8), rgba(21, 39, 71, 0.8)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
        }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Get in touch with our team for inquiries, quotes, or any export-related questions.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section
      <section className="py-10">
        <div className="container-custom">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe 
              title="R&D Ventures Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74110193967824!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1682599918000!5m2!1sen!2sin"
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section> */}

      {/* <FAQ /> */}
    </div>
  );
};

export default Contact;
