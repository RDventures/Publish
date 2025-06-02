
import React from 'react';
import { Mail, Phone, Home, Globe } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="lg:col-span-1">
      <div className="card bg-brand-navy text-white h-full">
        <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-8">
          Our team is ready to assist you with any inquiries about our export services or products.
        </p>

        <div className="space-y-6">
          {/* <div className="flex items-start">
            <Home className="mr-4 flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-semibold mb-1">Address</h3>
              <p>123 Export Street, Business District, Mumbai, India</p>
            </div>
          </div> */}

          {/* <div className="flex items-start">
            <Phone className="mr-4 flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p>+91 1234 567 890</p>
              <p>+91 9876 543 210</p>
            </div>
          </div> */}

          <div className="flex items-start">
            <Mail className="mr-4 flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p>info@rndventures.co.in</p>
              {/* <p>support@rdventures.com</p> */}
            </div>
          </div>

          {/* <div className="flex items-start">
            <Globe className="mr-4 flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-semibold mb-1">Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
            </div>
          </div> */}
        </div>

        <div className="mt-8">
          <h3 className="font-semibold mb-3">Connect With Us</h3>
{/*           <div className="flex space-x-4">
            <SocialLink href="#" icon="facebook" />
            <SocialLink href="#" icon="twitter" />
            <SocialLink href="#" icon="linkedin" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: 'facebook' | 'twitter' | 'linkedin';
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  const getIconPath = () => {
    switch (icon) {
      case 'facebook':
        return <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>;
      case 'twitter':
        return <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>;
      case 'linkedin':
        return (
          <>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <a 
      href={href} 
      className="bg-white text-brand-navy p-2 rounded-full hover:bg-brand-green hover:text-white transition-colors duration-300"
      aria-label={icon}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {getIconPath()}
      </svg>
    </a>
  );
};

export default ContactInfo;
