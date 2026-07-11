'use client';

import Image from 'next/image';
import { Star, Clock } from 'lucide-react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-slate-200 dark:border-slate-700">
      {/* Provider Avatar */}
      <div className="relative h-40 bg-gradient-to-br from-primary-500 to-accent-500 overflow-hidden">
        <Image
          src={service.provider.avatar}
          alt={service.provider.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {service.provider.verified && (
          <div className="absolute top-3 right-3 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-white">
            ✓
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {service.title}
        </h3>

        {/* Provider Name */}
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{service.provider.name}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(service.provider.rating)
                    ? 'fill-gold-400 text-gold-400'
                    : 'text-slate-300 dark:text-slate-600'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-slate-600 dark:text-slate-400">({service.reviews})</span>
        </div>

        {/* Response Time */}
        <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 mb-4">
          <Clock className="w-4 h-4" />
          <span>Response time: {service.responseTime}</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">From {service.price}</span>
          <span className="text-sm text-slate-600 dark:text-slate-400">TC</span>
        </div>

        {/* Book Button */}
        <button className="w-full px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
          Book Now
        </button>
      </div>
    </div>
  );
}
