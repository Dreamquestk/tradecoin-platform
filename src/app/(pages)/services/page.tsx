'use client';

import { useState, useMemo } from 'react';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICE_CATEGORIES } from '@/utils/constants';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Service } from '@/types';

const mockServices: Service[] = [
  {
    id: '1',
    title: 'Professional Logo Design',
    description: 'Custom logo design service',
    price: 150,
    provider: { id: '1', name: 'Alex Designer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', rating: 4.9, verified: true },
    category: 'Graphic Design',
    responseTime: '2 hours',
    reviews: 89,
  },
  {
    id: '2',
    title: 'Website Development',
    description: 'Full-stack web development',
    price: 500,
    provider: { id: '2', name: 'Dev Master', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop', rating: 5.0, verified: true },
    category: 'Web Development',
    responseTime: '1 hour',
    reviews: 127,
  },
  {
    id: '3',
    title: 'Social Media Marketing',
    description: 'Grow your social presence',
    price: 300,
    provider: { id: '3', name: 'Marketing Pro', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop', rating: 4.8, verified: true },
    category: 'Marketing',
    responseTime: '30 minutes',
    reviews: 203,
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description: 'React Native & Flutter apps',
    price: 1000,
    provider: { id: '4', name: 'Mobile Expert', avatar: 'https://images.unsplash.com/photo-1519085360771-9852ef158deb?w=300&h=300&fit=crop', rating: 4.9, verified: true },
    category: 'Mobile App Development',
    responseTime: '2 hours',
    reviews: 156,
  },
  {
    id: '5',
    title: 'Home Tuition - Math',
    description: 'Expert math coaching',
    price: 25,
    provider: { id: '5', name: 'Math Tutor', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop', rating: 4.7, verified: true },
    category: 'Home Tuition',
    responseTime: '4 hours',
    reviews: 98,
  },
  {
    id: '6',
    title: 'Photography Service',
    description: 'Professional photo shoots',
    price: 200,
    provider: { id: '6', name: 'Photo Pro', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', rating: 4.8, verified: true },
    category: 'Photography',
    responseTime: '1 hour',
    reviews: 167,
  },
  {
    id: '7',
    title: 'Plumbing Services',
    description: 'Emergency plumbing repair',
    price: 75,
    provider: { id: '7', name: 'Plumb Master', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop', rating: 4.6, verified: true },
    category: 'Plumbing',
    responseTime: '30 minutes',
    reviews: 234,
  },
  {
    id: '8',
    title: 'Electrical Installation',
    description: 'Safe electrical work',
    price: 100,
    provider: { id: '8', name: 'Electrician Pro', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', rating: 4.9, verified: true },
    category: 'Electrical',
    responseTime: '1 hour',
    reviews: 312,
  },
  {
    id: '9',
    title: 'Legal Consultation',
    description: 'Expert legal advice',
    price: 150,
    provider: { id: '9', name: 'Attorney', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop', rating: 5.0, verified: true },
    category: 'Legal Services',
    responseTime: '2 hours',
    reviews: 145,
  },
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  const filteredServices = useMemo(() => {
    return mockServices.filter((service) => {
      const matchesCategory = !selectedCategory || service.category === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedCategory, searchTerm, priceRange]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-xl text-white/90">Hire expert professionals for any task</p>
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
                    placeholder="Search services..."
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
                <div className="space-y-2 max-h-64 overflow-y-auto">
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
                  {SERVICE_CATEGORIES.map((category) => (
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
                      max="2000"
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
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-3">
            {filteredServices.length > 0 ? (
              <>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                  Showing {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-slate-600 dark:text-slate-400">No services found</p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
