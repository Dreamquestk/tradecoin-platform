'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-slate-950 dark:via-slate-900 dark:to-accent-950">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-300/20 dark:bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-6 border border-primary-200 dark:border-primary-800">
          <TrendingUp className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
            Join 10,000+ traders today
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
          Trade Anything.
          <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Earn TradeCoins.
          </span>
          <span className="block text-4xl md:text-5xl">Spend Anywhere.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Buy, sell, or exchange products and services using TradeCoins. Build wealth through your skills, products, and trusted community trading.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-primary-600/50 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/marketplace"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          >
            Explore Marketplace
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur rounded-lg p-4 border border-white/20 dark:border-slate-700/20">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1">50K+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Active Users</div>
          </div>
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur rounded-lg p-4 border border-white/20 dark:border-slate-700/20">
            <div className="text-3xl md:text-4xl font-bold text-accent-600 dark:text-accent-400 mb-1">100K+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Products & Services</div>
          </div>
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur rounded-lg p-4 border border-white/20 dark:border-slate-700/20">
            <div className="text-3xl md:text-4xl font-bold text-gold-600 dark:text-gold-400 mb-1">$5M+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Traded Value</div>
          </div>
        </div>
      </div>
    </section>
  );
}
