import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ShoppingCartIcon,
  ShieldCheckIcon,
  TruckIcon,
  PackageIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { products } from '../data/mockData';
interface ProductDetailPageProps {
  addToCart: () => void;
}
export function ProductDetailPage({ addToCart }: ProductDetailPageProps) {
  const { id } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isAdded, setIsAdded] = useState(false);
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-cream pt-20">
        <h1 className="font-heading text-4xl text-brand-green mb-4">
          Product Not Found
        </h1>
        <Link to="/products" className="text-brand-orange hover:underline">
          Return to Products
        </Link>
      </div>);

  }
  const handleAddToCart = () => {
    addToCart();
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };
  return (
    <PageTransition>
      <main className="pt-28 pb-24 bg-brand-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-brand-brown/60 hover:text-brand-green mb-8 transition-colors">
            
            <ArrowLeftIcon className="w-4 h-4" /> Back
          </button>

          <div className="bg-white rounded-3xl shadow-sm border border-brand-green/5 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Gallery */}
              <div className="p-8 lg:p-12 bg-brand-cream/30 flex flex-col">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-inner flex-1 max-h-[500px]">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-90`} />
                  
                  <div className="absolute inset-0 flex items-center justify-center text-9xl drop-shadow-2xl">
                    {product.icon}
                  </div>
                </div>
                {/* Thumbnails placeholder */}
                <div className="flex gap-4 mt-6">
                  {[1, 2, 3].map((i) =>
                  <div
                    key={i}
                    className={`w-20 h-20 rounded-xl bg-gradient-to-br ${product.gradient} opacity-${i === 1 ? '90 ring-2 ring-brand-orange ring-offset-2' : '50 cursor-pointer hover:opacity-70'} flex items-center justify-center text-2xl`}>
                    
                      {product.icon}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8 lg:p-12 flex flex-col">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-brand-green/5 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full">
                    {product.category}
                  </span>
                </div>

                <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-green mb-4">
                  {product.name}
                </h1>

                <div className="text-3xl font-bold text-brand-orange mb-6">
                  ₹{product.price}{' '}
                  <span className="text-lg text-brand-brown/50 font-normal">
                    / kg
                  </span>
                </div>

                <p className="text-brand-brown/80 text-lg mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Actions */}
                <div className="mb-10 p-6 bg-brand-cream/50 rounded-2xl border border-brand-green/10">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center bg-white rounded-full border border-brand-green/20 overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-3 text-brand-green hover:bg-brand-green/5 transition-colors">
                        
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        readOnly
                        className="w-16 text-center font-bold text-brand-green outline-none" />
                      
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-3 text-brand-green hover:bg-brand-green/5 transition-colors">
                        
                        +
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className={`flex-1 flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${isAdded ? 'bg-green-500 text-white' : 'bg-brand-green hover:bg-brand-green/90 text-white shadow-lg hover:shadow-brand-green/20 hover:-translate-y-0.5'}`}>
                      
                      <ShoppingCartIcon className="w-5 h-5" />
                      {isAdded ? 'Added to Cart!' : 'Add to Cart'}
                    </button>
                  </div>

                  <div className="mt-4 text-center">
                    <Link
                      to="/wholesale"
                      className="text-brand-orange font-medium hover:underline text-sm">
                      
                      Need more than 50kg? Request a Bulk Quote
                    </Link>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto">
                  <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-white border border-brand-green/5">
                    <ShieldCheckIcon className="w-6 h-6 text-brand-gold" />
                    <span className="text-xs font-medium text-brand-brown/80">
                      100% Pure
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-white border border-brand-green/5">
                    <PackageIcon className="w-6 h-6 text-brand-gold" />
                    <span className="text-xs font-medium text-brand-brown/80">
                      Vacuum Sealed
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-white border border-brand-green/5">
                    <TruckIcon className="w-6 h-6 text-brand-gold" />
                    <span className="text-xs font-medium text-brand-brown/80">
                      Pan-India Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="border-t border-brand-green/10">
              <div className="flex border-b border-brand-green/10 px-8">
                {['description', 'specifications', 'wholesale'].map((tab) =>
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-medium text-sm uppercase tracking-wider transition-colors relative ${activeTab === tab ? 'text-brand-green' : 'text-brand-brown/50 hover:text-brand-green/80'}`}>
                  
                    {tab}
                    {activeTab === tab &&
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange" />

                  }
                  </button>
                )}
              </div>

              <div className="p-8 lg:p-12 min-h-[300px]">
                {activeTab === 'description' &&
                <motion.div
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}
                  className="prose prose-brand max-w-none">
                  
                    <h3 className="font-heading text-2xl text-brand-green mb-4">
                      About this spice
                    </h3>
                    <p className="text-brand-brown/80 leading-relaxed text-lg">
                      {product.longDescription}
                    </p>
                  </motion.div>
                }

                {activeTab === 'specifications' &&
                <motion.div
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}>
                  
                    <h3 className="font-heading text-2xl text-brand-green mb-6">
                      Product Specifications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 max-w-3xl">
                      <div className="flex justify-between py-3 border-b border-brand-green/10">
                        <span className="text-brand-brown/60">Origin</span>
                        <span className="font-medium text-brand-green">
                          {product.origin}
                        </span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-brand-green/10">
                        <span className="text-brand-brown/60">Grade</span>
                        <span className="font-medium text-brand-green">
                          {product.grade}
                        </span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-brand-green/10">
                        <span className="text-brand-brown/60">Shelf Life</span>
                        <span className="font-medium text-brand-green">
                          12 Months
                        </span>
                      </div>
                      <div className="flex justify-between py-3 border-b border-brand-green/10">
                        <span className="text-brand-brown/60">Packaging</span>
                        <span className="font-medium text-brand-green">
                          Food-grade Vacuum Pouches
                        </span>
                      </div>
                    </div>
                  </motion.div>
                }

                {activeTab === 'wholesale' &&
                <motion.div
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}>
                  
                    <h3 className="font-heading text-2xl text-brand-green mb-6">
                      Bulk Pricing Tiers
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-brand-cream/50">
                            <th className="p-4 font-semibold text-brand-green border-b border-brand-green/10">
                              Quantity
                            </th>
                            <th className="p-4 font-semibold text-brand-green border-b border-brand-green/10">
                              Price per kg
                            </th>
                            <th className="p-4 font-semibold text-brand-green border-b border-brand-green/10">
                              Savings
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-4 border-b border-brand-green/5">
                              1 - 4 kg
                            </td>
                            <td className="p-4 border-b border-brand-green/5 font-medium">
                              ₹{product.price}
                            </td>
                            <td className="p-4 border-b border-brand-green/5 text-brand-brown/50">
                              -
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b border-brand-green/5">
                              5 - 9 kg
                            </td>
                            <td className="p-4 border-b border-brand-green/5 font-medium">
                              ₹{Math.floor(product.price * 0.95)}
                            </td>
                            <td className="p-4 border-b border-brand-green/5 text-green-600 font-medium">
                              5% Off
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 border-b border-brand-green/5">
                              10 - 49 kg
                            </td>
                            <td className="p-4 border-b border-brand-green/5 font-medium">
                              ₹{Math.floor(product.price * 0.9)}
                            </td>
                            <td className="p-4 border-b border-brand-green/5 text-green-600 font-medium">
                              10% Off
                            </td>
                          </tr>
                          <tr className="bg-brand-orange/5">
                            <td className="p-4 font-bold text-brand-orange">
                              50+ kg (Wholesale)
                            </td>
                            <td className="p-4 font-bold text-brand-orange">
                              Custom Quote
                            </td>
                            <td className="p-4">
                              <Link
                              to="/wholesale"
                              className="text-brand-orange underline text-sm">
                              
                                Request Quote
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>);

}