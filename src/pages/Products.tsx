// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { SearchIcon } from 'lucide-react';
// import ProductCatalog from '../components/ProductCatalog';

// // Mock product data - in a real app this would come from your MongoDB backend
// const productCategories = [
//   "All Products",
//   "Agricultural Products",
//   "Spices & Herbs",
//   "Textiles",
//   "Handicrafts",
//   "Organic Products"
// ];

// const productsData = [
//   {
//     id: 1,
//     name: "Premium Turmeric Powder",
//     category: "Spices & Herbs",
//     image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     description: "Organically grown turmeric with high curcumin content, processed and packed to preserve freshness and aroma.",
//     details: "Our premium turmeric powder is sourced from the finest farms in India. With a high curcumin content of 5-7%, this vibrant yellow spice offers exceptional quality for both culinary and wellness applications. Each batch undergoes rigorous testing to ensure purity and consistency."
//   },
//   {
//     id: 2,
//     name: "Handwoven Cotton Fabrics",
//     category: "Textiles",
//     image: "https://images.unsplash.com/photo-1601314167099-232775b3d6fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     description: "Ethically sourced cotton transformed into premium quality fabrics by skilled artisans.",
//     details: "Our handwoven cotton fabrics represent the pinnacle of traditional craftsmanship. Made from ethically sourced cotton, these fabrics feature intricate weaves and natural dyes. Perfect for fashion and home décor applications, they offer excellent durability and comfort while supporting traditional weaving communities."
//   },
//   {
//     id: 3,
//     name: "Artisanal Home Decor",
//     category: "Handicrafts",
//     image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     description: "Handcrafted items showcasing traditional craftsmanship and modern design elements.",
//     details: "Each piece in our artisanal home decor collection tells a unique story of cultural heritage and skilled craftsmanship. These decorative items blend traditional techniques with contemporary design sensibilities, creating standout pieces that add character to any space while supporting local artisan communities."
//   },
//   {
//     id: 4,
//     name: "Organic Basmati Rice",
//     category: "Agricultural Products",
//     image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     description: "Long-grain aromatic rice cultivated using organic farming methods.",
//     details: "Our organic basmati rice is grown in the pristine foothills of the Himalayas using traditional farming methods. This premium long-grain rice features an exquisite aroma and perfect texture when cooked. Certified organic and free from pesticides, it represents the finest quality basmati available for export."
//   },
//   {
//     id: 5,
//     name: "Handmade Paper Products",
//     category: "Handicrafts",
//     image: "https://images.unsplash.com/photo-1563592577-1fbf4ebba772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     description: "Eco-friendly stationery and packaging materials made from recycled paper.",
//     details: "Our handmade paper products combine sustainability with artistic excellence. Created using traditional papermaking techniques and recycled materials, these items include premium stationery, gift wrapping paper, and decorative elements. Each piece showcases unique textures and natural aesthetic appeal."
//   },
//   {
//     id: 6,
//     name: "Black Pepper",
//     category: "Spices & Herbs",
//     image: "https://images.unsplash.com/photo-1599909533315-4142be96079e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     description: "Carefully selected black peppercorns with rich aroma and balanced heat.",
//     details: "Sourced from the Malabar Coast, our black pepper is world-renowned for its complex flavor profile and aromatic qualities. Available as whole peppercorns or freshly ground, this essential spice undergoes rigorous quality control to ensure maximum flavor retention and purity for culinary applications worldwide."
//   },
//   {
//     id: 7,
//     name: "Organic Cotton T-shirts",
//     category: "Textiles",
//     image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     description: "Sustainably produced t-shirts made from GOTS certified organic cotton.",
//     details: "Our organic cotton t-shirts represent the perfect blend of sustainability and comfort. Made from GOTS certified organic cotton grown without harmful pesticides or synthetic fertilizers, these garments offer exceptional softness and durability. Available in various weights and styles, they're perfect for brands committed to ethical fashion."
//   },
//   {
//     id: 8,
//     name: "Organic Honey",
//     category: "Organic Products",
//     image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     description: "Pure, unfiltered honey sourced from organic apiaries in pristine forest regions.",
//     details: "Harvested from hives placed in unpolluted forest regions, our organic honey preserves all the natural enzymes and beneficial properties. This premium honey varies in color and flavor based on seasonal flowering plants, offering a true taste of nature's bounty. Each batch is tested for purity and packaged with minimal processing."
//   },
//   {
//     id: 9,
//     name: "Jute Bags",
//     category: "Handicrafts",
//     image: "https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     description: "Eco-friendly, biodegradable jute bags in various designs and sizes.",
//     details: "Our jute bag collection offers sustainable alternatives to plastic shopping bags. Made from natural jute fiber, these durable and stylish bags are biodegradable and reusable. Available in various sizes and designs, they can be customized with prints or embroidery for corporate or retail needs."
//   }
// ];

// const Products = () => {
//   const [activeCategory, setActiveCategory] = useState("All Products");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState(productsData);
//   const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
//   const [animateProducts, setAnimateProducts] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     // Add staggered animation effect
//     const timer = setTimeout(() => {
//       setAnimateProducts(true);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     // Filter products based on category and search query
//     const filtered = productsData.filter(product => {
//       const matchesCategory = activeCategory === "All Products" || product.category === activeCategory;
//       const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesCategory && matchesSearch;
//     });

//     setFilteredProducts(filtered);
//   }, [activeCategory, searchQuery]);

//   const handleViewDetails = (id: number) => {
//     setSelectedProduct(id === selectedProduct ? null : id);

//     // If a product is selected, scroll to it after a small delay
//     if (selectedProduct !== id) {
//       setTimeout(() => {
//         const element = document.getElementById(`product-${id}`);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         }
//       }, 100);
//     }
//   };

//   return (
//     <div>
//       {/* Products Hero */}
//       <section 
//         className="relative py-32 flex items-center justify-center bg-cover bg-center animate-fade-in"
//         style={{ 
//           backgroundImage: 'linear-gradient(rgba(21, 39, 71, 0.8), rgba(21, 39, 71, 0.8)), url(https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
//         }}
//       >
//         <div className="container-custom text-center text-white">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Products</h1>
//           <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
//             Discover our range of high-quality products meeting international standards and sustainability practices.
//           </p>
//         </div>
//       </section>

//       {/* New dedicated RICE catalog section with animation */}
//       <div className="animate-slide-in-bottom [animation-delay:300ms]">
//         <ProductCatalog />
//       </div>

//       {/* Products Filter Section with animation */}
//       <section className="py-10 bg-gray-50 animate-slide-in-bottom [animation-delay:400ms]">
//         <div className="container-custom">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2">
//               {productCategories.map((category) => (
//                 <button
//                   key={category}
//                   className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-300 ${
//                     activeCategory === category
//                       ? "bg-brand-green text-white"
//                       : "bg-white text-gray-700 hover:bg-gray-100"
//                   }`}
//                   onClick={() => setActiveCategory(category)}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//             <div className="relative w-full md:w-64">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-green"
//               />
//               <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Grid with staggered animations */}
//       <section className="py-16">
//         <div className="container-custom">
//           {filteredProducts.length === 0 ? (
//             <div className="text-center py-20 animate-fade-in">
//               <h3 className="text-xl font-medium text-gray-600">No products found matching your criteria.</h3>
//               <button 
//                 onClick={() => {
//                   setActiveCategory("All Products");
//                   setSearchQuery("");
//                 }}
//                 className="mt-4 text-brand-green hover:text-brand-navy"
//               >
//                 Clear filters
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProducts.map((product, index) => (
//                 <div
//                   key={product.id}
//                   id={`product-${product.id}`}
//                   className={`card overflow-hidden group ${
//                     selectedProduct === product.id ? "col-span-1 md:col-span-2 lg:col-span-3" : ""
//                   } ${animateProducts ? "animate-scale-in" : "opacity-0"}`}
//                   style={{ animationDelay: `${(index % 9) * 100 + 500}ms` }}
//                 >
//                   {selectedProduct === product.id ? (
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                       <div className="overflow-hidden rounded-lg">
//                         <img 
//                           src={product.image} 
//                           alt={product.name} 
//                           className="w-full h-full object-cover" 
//                         />
//                       </div>
//                       <div>
//                         <div className="mb-4">
//                           <span className="bg-brand-green text-white py-1 px-3 rounded-full text-sm">
//                             {product.category}
//                           </span>
//                         </div>
//                         <h3 className="text-2xl font-bold mb-4 text-brand-navy">{product.name}</h3>
//                         <p className="text-gray-700 mb-6 leading-relaxed">
//                           {product.details}
//                         </p>
//                         <div className="space-y-4">
//                           <h4 className="font-semibold text-brand-navy">Key Features:</h4>
//                           <ul className="list-disc pl-5 space-y-2 text-gray-600">
//                             <li>Premium quality export standard</li>
//                             <li>Rigorous quality control process</li>
//                             <li>Sustainable and ethical sourcing</li>
//                             <li>Customizable packaging options</li>
//                           </ul>
//                         </div>
//                         <div className="mt-8 flex space-x-4">
//                           <Link 
//                             to="/contact" 
//                             className="btn-primary"
//                           >
//                             Request Quote
//                           </Link>
//                           <button 
//                             onClick={() => handleViewDetails(product.id)}
//                             className="btn-secondary bg-gray-200 text-gray-800 hover:bg-gray-300"
//                           >
//                             Close Details
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <>
//                       <div className="relative h-60 overflow-hidden">
//                         <img 
//                           src={product.image} 
//                           alt={product.name} 
//                           className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" 
//                         />
//                         <div className="absolute top-4 left-4 bg-brand-green text-white py-1 px-3 rounded-full text-sm">
//                           {product.category}
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-bold mt-4 mb-2 text-brand-navy">{product.name}</h3>
//                       <p className="text-gray-600 mb-4">{product.description}</p>
//                       <button 
//                         onClick={() => handleViewDetails(product.id)}
//                         className="text-brand-green font-medium hover:text-brand-navy transition-colors duration-300 underline underline-offset-4"
//                       >
//                         View Details
//                       </button>
//                     </>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section with animation */}
//       <section className="py-16 bg-brand-navy text-white animate-slide-in-bottom">
//         <div className="container-custom text-center">
//           <h2 className="text-3xl font-bold mb-6 animate-fade-in">Don't See What You're Looking For?</h2>
//           <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
//             We can source and export a wide range of products beyond what's listed here. Contact us with your specific requirements.
//           </p>
//           <Link 
//             to="/contact" 
//             className="btn-secondary animate-fade-in [animation-delay:400ms]"
//           >
//             Contact Our Team
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Products;



















// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

// import Makhana1 from "../Pictures/Makhana_1.jpeg";
// import Makhana2 from "../Pictures/Makhana_2.jpeg";
// import Makhana3 from "../Pictures/Makhana_3.jpeg";

// const Products = () => {
//   const images = [Makhana1, Makhana2, Makhana3];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isSliding, setIsSliding] = useState(false);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       slideNext();
//     }, 4000);
//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, []);

//   const slideNext = () => {
//     setIsSliding(true);
//     setTimeout(() => setIsSliding(false), 600);
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const slidePrev = () => {
//     setIsSliding(true);
//     setTimeout(() => setIsSliding(false), 600);
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <section className="bg-gray-100 py-16 px-4 md:px-10">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Image Carousel */}
//         <div className="relative w-full max-w-xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-300 bg-white">
//           <div className="aspect-square">
//             <img
//               src={images[currentIndex]}
//               alt={`Makhana - Image ${currentIndex + 1}`}
//               className={`w-full h-full object-cover transition-opacity duration-500 ${isSliding ? "opacity-80" : "opacity-100"
//                 }`}
//               loading="lazy"
//               draggable={false}
//             />
//           </div>

//           {/* Arrows */}
//           {images.length > 1 && (
//             <>
//               <button
//                 onClick={slidePrev}
//                 className="absolute top-1/2 left-3 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
//               >
//                 <ArrowLeft size={20} />
//               </button>
//               <button
//                 onClick={slideNext}
//                 className="absolute top-1/2 right-3 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
//               >
//                 <ArrowRight size={20} />
//               </button>
//             </>
//           )}

//           {/* Dots */}
//           <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
//             {images.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentIndex(i)}
//                 className={`w-3 h-3 rounded-full ${i === currentIndex ? "bg-green-600" : "bg-gray-400"
//                   }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <div className="text-gray-800 space-y-6">
//           <h1 className="text-4xl font-bold text-gray-900">
//             Premium Foxnut (Makhana)
//           </h1>
//           <p className="text-lg leading-relaxed">
//             Our export-quality Makhana is sourced directly from the fertile
//             lands of Bihar, India. A healthy superfood with a global demand,
//             perfect for retail and bulk buyers seeking purity, taste, and
//             nutrition in one.
//           </p>
//           <ul className="space-y-2">
//             {[
//               "100% Natural & Organic",
//               "Gluten-Free & Vegan",
//               "Rich in Protein & Antioxidants",
//               "Low-Calorie, High-Fiber Snack",
//             ].map((point) => (
//               <li key={point} className="flex items-center gap-2 text-green-800">
//                 <CheckCircle2 size={20} /> {point}
//               </li>
//             ))}
//           </ul>
//           <Link
//             to="/inquiry"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition font-medium"
//           >
//             Inquire Now <ArrowRight size={18} />
//           </Link>
//         </div>
//       </div>

//       {/* Additional Sections */}
//       <div className="mt-20 space-y-12 max-w-6xl mx-auto">
//         {/* About */}
//         <Section title="About Our Makhana">
//           Sourced from Bihar’s certified farms, our makhana ensures freshness, natural farming practices, and zero additives. It’s roasted to perfection for international buyers who value healthy snacks.
//         </Section>

//         {/* Grid Info */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <InfoCard title="Nutritional Highlights" items={[
//             "100% Natural & Organic",
//             "Gluten-Free & Vegan",
//             "Rich in Protein, Fiber, and Antioxidants",
//             "No Preservatives or Additives",
//           ]} />
//           <InfoCard title="Health Benefits" items={[
//             "Aids in Weight Management",
//             "Boosts Heart Health",
//             "Supports Digestion",
//             "Balances Blood Sugar",
//             "Anti-Aging Properties",
//           ]} />
//         </div>

//         {/* Packaging */}
//         <Section title="Packaging & Supply">
//           We offer flexible pack sizes (100g to 1kg) in vacuum-sealed, export-standard packaging. Bulk and private-label solutions available.
//           <ul className="list-disc pl-5 mt-2 text-gray-700">
//             <li>100g, 250g, 500g, 1kg options</li>
//             <li>Custom packaging for international orders</li>
//           </ul>
//         </Section>

//         {/* Why Us */}
//         <Section title="Why Choose Us?">
//           <ul className="list-disc pl-5 text-gray-700">
//             <li>Direct-from-farm sourcing</li>
//             <li>Global shipping & certifications</li>
//             <li>Flexible MOQ for new buyers</li>
//             <li>Private labeling & branding options</li>
//           </ul>
//         </Section>
//       </div>
//     </section>
//   );
// };

// // Reusable Section Wrapper
// const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
//   <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm">
//     <h2 className="text-2xl font-semibold mb-3">{title}</h2>
//     <div className="text-gray-700 text-base">{children}</div>
//   </div>
// );

// // Reusable Info Card
// const InfoCard = ({ title, items }: { title: string; items: string[] }) => (
//   <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm">
//     <h3 className="text-xl font-semibold text-green-700 mb-3">{title}</h3>
//     <ul className="space-y-2 text-green-900">
//       {items.map((item) => (
//         <li key={item} className="flex items-center gap-2">
//           <CheckCircle2 size={20} className="text-green-600" /> {item}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// export default Products;














import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

import Makhana1 from "../Pictures/Makhana_1.jpeg";
import Makhana2 from "../Pictures/Makhana_2.jpeg";
import Makhana3 from "../Pictures/Makhana_3.jpeg";

const Products = () => {
  const images = [Makhana1, Makhana2, Makhana3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      slideNext();
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const slideNext = () => {
    setIsSliding(true);
    setTimeout(() => setIsSliding(false), 600);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const slidePrev = () => {
    setIsSliding(true);
    setTimeout(() => setIsSliding(false), 600);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Carousel */}
        <div className="relative w-full max-w-xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-300 bg-white">
          <div className="aspect-square">
            <img
              src={images[currentIndex]}
              alt={`Makhana - Image ${currentIndex + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isSliding ? "opacity-80" : "opacity-100"
              }`}
              loading="lazy"
              draggable={false}
            />
          </div>

          {/* Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={slidePrev}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={slideNext}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
              >
                <ArrowRight size={20} />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-green-600" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="text-gray-800 space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Premium Foxnut (Makhana)
          </h1>
          <p className="text-lg leading-relaxed">
            Our export-quality Makhana is sourced directly from the fertile
            lands of Bihar, India. A healthy superfood with a global demand,
            perfect for retail and bulk buyers seeking purity, taste, and
            nutrition in one.
          </p>
          <ul className="space-y-2">
            {[
              "100% Natural & Organic",
              "Gluten-Free & Vegan",
              "Rich in Protein & Antioxidants",
              "Low-Calorie, High-Fiber Snack",
            ].map((point) => (
              <li key={point} className="flex items-center gap-2 text-green-800">
                <CheckCircle2 size={20} /> {point}
              </li>
            ))}
          </ul>
          <Link
            to="/inquiry"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition font-medium"
          >
            Inquire Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="mt-20 space-y-12 max-w-6xl mx-auto">
        {/* About */}
        <Section title="About Our Makhana">
        Makhana, also known as Fox Nuts or Lotus Seeds, is a traditional Indian superfood now gaining global recognition for its incredible health benefits and versatility. Sourced from the nutrient-rich regions of Bihar, our Makhana is cultivated using sustainable farming practices and carefully processed to maintain its natural purity and crisp texture. It is a guilt-free snack that perfectly blends taste and nutrition, making it a preferred choice for health-conscious consumers worldwide. Light, crunchy, and packed with essential nutrients, our Makhana can be enjoyed roasted, spiced, or added to dishes and desserts. Whether you're a retailer, wholesaler, or brand looking for a premium-quality export product, our Makhana offers the ideal balance of quality and value. We ensure strict hygiene standards, customized packaging, and reliable global shipping to meet your business needs. Let your customers experience the goodness of an ancient Indian snack, now available globally.

</Section>

        {/* Grid Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title="Nutritional Highlights" items={[
            "100% Natural & Organic",
            "Gluten-Free & Vegan",
            "Rich in Protein, Fiber, and Antioxidants",
            "No Preservatives or Additives",
          ]} />
          <InfoCard title="Health Benefits" items={[
            "Aids in Weight Management",
            "Boosts Heart Health",
            "Supports Digestion",
            "Balances Blood Sugar",
            "Anti-Aging Properties",
          ]} />
        </div>

        {/* Packaging */}
        {/* <Section title="Packaging & Supply">
          We offer flexible pack sizes (100g to 1kg) in vacuum-sealed, export-standard packaging. Bulk and private-label solutions available.
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>100g, 250g, 500g, 1kg options</li>
            <li>Custom packaging for international orders</li>
          </ul>
        </Section> */}

        {/* Why Us */}
        <Section title="Why Choose Us?">
          <ul className="list-disc pl-5 text-gray-700">
            <li>Direct-from-farm sourcing</li>
            <li>Global shipping & certifications</li>
            <li>Flexible MOQ for new buyers</li>
            <li>Private labeling & branding options</li>
          </ul>
        </Section>
      </div>
    </section>
  );
};

// Reusable Section Wrapper
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm">
    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
    <div className="text-gray-700 text-base">{children}</div>
  </div>
);

// Reusable Info Card
const InfoCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm">
    <h3 className="text-xl font-semibold text-green-700 mb-3">{title}</h3>
    <ul className="space-y-2 text-green-900">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <CheckCircle2 size={20} className="text-green-600" /> {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Products;
