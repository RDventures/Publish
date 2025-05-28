import React, { useEffect, useRef } from 'react';

export type CatalogProduct = {
  id: number;
  name: string;
  description: string;
  image: string;
  details: string[];
};

const riceProducts: CatalogProduct[] = [
  {
    id: 1,
    name: "Basmati Rice 1121",
    description: "Long grain, aromatic rice popular internationally.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: [
      "Moisture < 13%",
      "Grain length: 8.30 mm+",
      "Whiteness: 38+ Kett",
      "Sortex cleaned, double polished"
    ]
  },
  {
    id: 2,
    name: "Sona Masoori Rice",
    description: "Lightweight, aromatic rice variety from southern India.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: [
      "Grain length: 5.0 mm+",
      "Low starch and easy to digest",
      "Ideal for daily meals"
    ]
  },
  {
    id: 3,
    name: "Parboiled Rice IR64",
    description: "Popular non-basmati parboiled rice for bulk export.",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    details: [
      "High yield, affordable",
      "Sortex cleaned, minimal broken grains"
    ]
  },
];

const ProductCatalog: React.FC = () => {
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const products = productsRef.current?.querySelectorAll('.product-card') ?? [];
    products.forEach((product) => {
      product.classList.add('opacity-0');
      observer.observe(product);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-brand-navy/95 to-brand-green/20">
      <div className="container-custom">
        <h2 className="section-title text-white drop-shadow-xl text-4xl mb-10 font-montserrat tracking-tight animate-fade-in">
          Rice Product Catalog
        </h2>
        <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {riceProducts.map((product, index) => (
            <div 
              key={product.id}
              className="product-card bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-brand-green/10 group"
              style={{ 
                minHeight: 400,
                animationDelay: `${index * 200}ms`
              }}
            >
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-5 shadow group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-xl font-bold text-brand-green mb-2 font-montserrat">{product.name}</h3>
              <p className="text-gray-700 mb-3">{product.description}</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4 pl-4 list-disc">
                {product.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
