
import React from 'react';

const faqs = [
  {
    question: "What types of products do you export?",
    answer: "We export a wide range of products including agricultural goods, spices & herbs, textiles, handicrafts, and organic products. Our catalog is continuously expanding to meet global market demands."
  },
  {
    question: "Do you offer sample products before bulk orders?",
    answer: "Yes, we provide samples for most of our products. This allows our clients to assess the quality before placing larger orders. Sample costs and shipping fees may apply depending on the product and destination."
  },
  {
    question: "What shipping methods do you use?",
    answer: "We use various shipping methods including sea freight, air freight, and express courier services depending on the order size, urgency, and client preference. We work with reputable logistics partners to ensure timely delivery."
  },
  {
    question: "What are your minimum order quantities?",
    answer: "Minimum order quantities vary by product category. We're flexible and can accommodate both small and large orders. Please contact our team with your specific requirements for detailed information."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our export services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="card"
            >
              <h3 className="text-lg font-bold mb-3 text-brand-navy">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
