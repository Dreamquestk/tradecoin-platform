'use client';

import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { MARKETPLACE_CATEGORIES } from '@/utils/constants';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Product } from '@/types';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Dell XPS 13 Laptop',
    description: 'High-performance ultrabook',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    category: 'Computers',
    seller: { id: '1', name: 'Tech Store', rating: 4.8, location: 'New York', verified: true },
    rating: 4.8,
    reviews: 234,
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone model',
    price: 999,
    image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=400&h=300&fit=crop',
    category: 'Phones',
    seller: { id: '2', name: 'Mobile Hub', rating: 4.9, location: 'Los Angeles', verified: true },
    rating: 4.9,
    reviews: 512,
  },
  {
    id: '3',
    name: 'Vintage Leather Jacket',
    description: 'Premium vintage jacket',
    price: 350,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=400&h=300&fit=crop',
    category: 'Fashion',
    seller: { id: '3', name: 'Fashion Forward', rating: 4.7, location: 'Chicago', verified: true },
    rating: 4.7,
    reviews: 156,
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Noise-cancelling wireless',
    price: 380,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    category: 'Electronics',
    seller: { id: '4', name: 'Audio Plus', rating: 4.9, location: 'Boston', verified: true },
    rating: 4.9,
    reviews: 432,
  },
  {
    id: '5',
    name: 'MacBook Pro 16"',
    description: 'M3 Max processor',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    category: 'Computers',
    seller: { id: '5', name: 'Apple Reseller', rating: 5.0, location: 'San Francisco', verified: true },
    rating: 5.0,
    reviews: 678,
  },
  {
    id: '6',
    name: 'Samsung 65" 4K TV',
    description: 'Smart TV with AI upscaling',
    price: 800,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
    category: 'Electronics',
    seller: { id: '6', name: 'Electronics Plus', rating: 4.6, location: 'Miami', verified: true },
    rating: 4.6,
    reviews: 289,
  },
  {
    id: '7',
    name: 'Modern Sofa Set',
    description: 'Contemporary design',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    category: 'Furniture',
    seller: { id: '7', name: 'Furniture Hub', rating: 4.7, location: 'Denver', verified: true },
    rating: 4.7,
    reviews: 145,
  },
  {
    id: '8',
    name: 'Organic Coffee Beans',
    description: 'Premium blend',
    price: 45,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=400&h=300&fit=crop',
    category: 'Food',
    seller: { id: '8', name: 'Coffee Roastery', rating: 4.9, location: 'Seattle', verified: true },
    rating: 4.9,
    reviews: 567,
  },
  {
    id: '9',
    name: 'Gaming Chair Pro',
    description: 'Ergonomic design',
    price: 450,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=300&fit=crop',
    category: 'Sports',
    seller: { id: '9', name: 'Gaming Gear', rating: 4.8, location: 'Austin', verified: true },
    rating: 4.8,
    reviews: 234,
  },
];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedCategory, searchTerm, priceRange]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
          <p className="text-xl text-white/90">Explore thousands of products and find exactly what you need</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-slate-900 dark:text-white">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 text-slate-900 dark:text-white flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4" /> Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      !selectedCategory
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    All Categories
                  </button>
                  {MARKETPLACE_CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-slate-900 dark:text-white">Price Range</h3>
                <div className="space-y-2">
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400">Min: {priceRange[0]} TC</label>
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400">Max: {priceRange[1]} TC</label>
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-slate-600 dark:text-slate-400">No products found</p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
