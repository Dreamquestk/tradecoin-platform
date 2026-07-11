'use client';

import { useWalletStore } from '@/store/walletStore';
import { Heart, ShoppingBag, Bell, Settings, TrendingUp, Users, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import Link from 'next/link';

const salesData = [
  { date: 'Mon', sales: 400, orders: 24 },
  { date: 'Tue', sales: 520, orders: 30 },
  { date: 'Wed', sales: 380, orders: 20 },
  { date: 'Thu', sales: 600, orders: 35 },
  { date: 'Fri', sales: 750, orders: 42 },
  { date: 'Sat', sales: 680, orders: 38 },
  { date: 'Sun', sales: 820, orders: 48 },
];

const mockOrders = [
  { id: 1, product: 'Dell XPS Laptop', amount: 1200, status: 'completed', date: '2024-07-10' },
  { id: 2, product: 'iPhone 15 Pro', amount: 999, status: 'pending', date: '2024-07-09' },
  { id: 3, product: 'Leather Jacket', amount: 350, status: 'completed', date: '2024-07-08' },
  { id: 4, product: 'Sony Headphones', amount: 380, status: 'shipped', date: '2024-07-07' },
];

const mockFavorites = [
  { id: 1, name: 'MacBook Pro 16"', price: 2499, image: '💻' },
  { id: 2, name: 'Samsung 65" TV', price: 800, image: '📺' },
  { id: 3, name: 'Gaming Chair', price: 450, image: '🪑' },
];

export default function Dashboard() {
  const { balance } = useWalletStore();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
            <p className="text-slate-600 dark:text-slate-400">Welcome back! Here's your activity overview.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
              <Bell className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </button>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
              <Settings className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400">Wallet Balance</h3>
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{balance}</p>
            <p className="text-xs text-primary-600 dark:text-primary-400">+12% from last month</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400">Total Orders</h3>
              <div className="w-10 h-10 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-accent-600 dark:text-accent-400" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">24</p>
            <p className="text-xs text-accent-600 dark:text-accent-400">8 pending</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400">Saved Items</h3>
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">12</p>
            <p className="text-xs text-red-600 dark:text-red-400">3 new this week</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400">Followers</h3>
              <div className="w-10 h-10 bg-gold-100 dark:bg-gold-900/30 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-gold-600 dark:text-gold-400" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">156</p>
            <p className="text-xs text-gold-600 dark:text-gold-400">+24 this month</p>
          </div>
        </div>

        {/* Charts and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Sales Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Weekly Sales</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.1)" />
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Area type="monotone" dataKey="sales" stroke="#22c55e" fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Favorites */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Favorites</h2>
            <div className="space-y-4">
              {mockFavorites.map((item) => (
                <div key={item.id} className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors cursor-pointer">
                  <div className="text-3xl mb-2">{item.image}</div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">{item.name}</p>
                  <p className="text-primary-600 dark:text-primary-400 text-sm font-semibold">{item.price} TC</p>
                </div>
              ))}
              <Link
                href="/marketplace"
                className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-center text-sm font-semibold"
              >
                View All
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white">Product</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white">Amount</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white">Status</th>
                  <th className="text-left px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white">Date</th>
                </tr>
              </thead>
              <tbody>
                {mockOrders.map((order) => (
                  <tr key={order.id} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">{order.product}</td>
                    <td className="px-6 py-4 text-sm text-primary-600 dark:text-primary-400 font-semibold">{order.amount} TC</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'completed'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : order.status === 'pending'
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-400">Showing 4 of 24 orders</p>
            <Link href="#" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-semibold">
              View All Orders →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
