import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;  // Changed from company to country
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: '', // Initialize with an empty country value
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formStatus.type) {
      setFormStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw new Error(error.message || 'Failed to send message');
      }

      setFormStatus({
        type: 'success',
        message: "Thank you for your message! We've received your inquiry and will get back to you soon."
      });

      toast({
        title: "Message sent successfully!",
        description: "We've received your message and will get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '', // Reset country as well
        message: ''
      });
    } catch (error) {
      console.error("Error sending form:", error);

      setFormStatus({
        type: 'error',
        message: "There was a problem sending your message. Please try again later or contact us directly."
      });

      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-dismiss message after 5 seconds
  useEffect(() => {
    if (formStatus.type) {
      const timer = setTimeout(() => {
        setFormStatus({ type: null, message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  // Scroll to top when status changes
  useEffect(() => {
    if (formStatus.type) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [formStatus]);

  // Country list (can be expanded with more countries)
  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana',
    'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile',
    'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)', 'Congo (Congo-Kinshasa)', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic',
    'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini',
    'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
    'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica',
    'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
    'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands',
    'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (formerly Burma)',
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau',
    'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis',
    'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone',
    'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden',
    'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
    'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu',
    'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];
  

  return (
    <div className="lg:col-span-2">
      <div className="card">
        <h2 className="text-2xl font-bold mb-6 text-brand-navy">Send Us a Message</h2>

        {/* Alerts */}
        {formStatus.type === 'success' && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <AlertTitle className="text-green-800">Thank you!</AlertTitle>
            <AlertDescription className="text-green-700">
              {formStatus.message}
            </AlertDescription>
          </Alert>
        )}

        {formStatus.type === 'error' && (
          <Alert className="mb-6 bg-red-50 border-red-200">
            <AlertTitle className="text-red-800">Something went wrong</AlertTitle>
            <AlertDescription className="text-red-700">
              {formStatus.message}
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
            </div>

            {/* Country dropdown */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country *
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
              >
                <option value="">Select a country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary inline-flex items-center ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Submit
                  <ArrowRight size={16} className="ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
