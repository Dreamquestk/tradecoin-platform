'use client';

import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { ServiceCard } from '@/components/ServiceCard';
import { WalletWidget } from '@/components/WalletWidget';
import { MARKETPLACE_CATEGORIES, SERVICE_CATEGORIES, REVENUE_SOURCES } from '@/utils/constants';
import { Product, Service } from '@/types';
import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowRight, Lock, Shield, Users, TrendingUp, CheckCircle, Zap } from 'lucide-react';

// Mock data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Dell XPS 13 Laptop',
    description: 'High-performance laptop',
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
];

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
];

const SECURITY_FEATURES = [
  { icon: Lock, title: 'Bank-Grade Encryption', description: 'Military-level security for all transactions' },
  { icon: Shield, title: 'Fraud Detection', description: 'AI-powered anti-fraud protection' },
  { icon: Users, title: 'Verified Users', description: 'KYC verification for all members' },
  { icon: TrendingUp, title: 'Escrow Protection', description: 'Secure payment holding system' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Featured Products</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Discover popular items from our marketplace</p>
            </div>
            <Link href="/marketplace" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:gap-4 transition-all">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Popular Services</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Get expert help for your projects</p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:gap-4 transition-all">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Enterprise-Grade Security</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Your transactions are protected by the most advanced security measures in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY_FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                  <Icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wallet & Dashboard */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Your Digital Wallet</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                Manage your TradeCoins with our secure wallet. Send, receive, and track all your transactions.
              </p>
              <Link href="/wallet" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
                Open Wallet <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <WalletWidget />
            </div>
          </div>
        </div>
      </section>

      {/* How TradeCoin Makes Money */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center text-slate-900 dark:text-white">How TradeCoin Makes Money</h2>
          <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Transparent revenue model that supports sustainable platform growth
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Revenue Breakdown */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {REVENUE_SOURCES.map((source, index) => (
                  <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{source.title}</h3>
                      <span className="text-primary-600 dark:text-primary-400 font-bold">{source.percentage}%</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{source.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Charts */}
            <div className="lg:col-span-2 space-y-8">
              {/* Pie Chart */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Revenue Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={REVENUE_SOURCES}
                      dataKey="percentage"
                      nameKey="title"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {REVENUE_SOURCES.map((_, index) => {
                        const colors = ['#22c55e', '#0ea5e9', '#f59e0b', '#06b6d4', '#8b5cf6', '#ec4899'];
                        return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />;
                      })}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Benefits */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold mb-4 text-slate-900 dark:text-white">Why Our Model Works</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Sustainable Growth</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Diversified revenue streams ensure long-term viability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Fair Pricing</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Low transaction fees keep the platform accessible</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Community Benefits</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Revenue reinvested in user rewards and features</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reputation System */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900 dark:text-white">Trader Levels & Reputation</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { level: '🥉 Bronze', minTrades: '0 trades', description: 'Getting started' },
              { level: '🥈 Silver', minTrades: '10 trades', description: 'Active trader' },
              { level: '🥇 Gold', minTrades: '50 trades', description: 'Trusted member' },
              { level: '💎 Platinum', minTrades: '100 trades', description: 'Power trader' },
              { level: '✨ Diamond', minTrades: '250 trades', description: 'Elite status' },
            ].map((tier, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
                <p className="text-3xl mb-2">{tier.level}</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{tier.minTrades}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of traders and discover a new way to exchange value in our community marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition-all">
              Get Started
            </Link>
            <Link href="/marketplace" className="px-8 py-4 bg-white/20 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all">
              Explore Marketplace
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
