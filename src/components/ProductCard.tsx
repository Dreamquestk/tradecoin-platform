'use client';

import Image from 'next/image';
import { Star, MapPin, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-slate-200 dark:border-slate-700">
      {/* Image */}
      <div className="relative h-48 bg-slate-100 dark:bg-slate-700 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite
                ? 'fill-red-500 text-red-500'
                : 'text-slate-400 hover:text-red-500'
            } transition-colors`}
          />
        </button>
        <div className="absolute top-3 left-3 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-gold-400 text-gold-400'
                    : 'text-slate-300 dark:text-slate-600'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-slate-600 dark:text-slate-400">({product.reviews})</span>
        </div>

        {/* Seller Info */}
        <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 mb-3">
          <MapPin className="w-4 h-4" />
          <span>{product.seller.location}</span>
          {product.seller.verified && (
            <span className="ml-auto text-primary-600 font-semibold">✓ Verified</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            {product.price}
          </span>
          <span className="text-sm text-slate-600 dark:text-slate-400">TC</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </button>
          <button className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all">
            Offer
          </button>
        </div>
      </div>
    </div>
  );
}
