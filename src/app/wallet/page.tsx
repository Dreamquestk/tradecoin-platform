'use client';

import { useState } from 'react';
import { useWalletStore } from '@/store/walletStore';
import { Send, Plus, QrCode, Eye, EyeOff, Download, Upload } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const chartData = [
  { date: 'Jan', balance: 3000, received: 500, sent: 200 },
  { date: 'Feb', balance: 3500, received: 600, sent: 200 },
  { date: 'Mar', balance: 4200, received: 800, sent: 400 },
  { date: 'Apr', balance: 4500, received: 500, sent: 300 },
  { date: 'May', balance: 4800, received: 700, sent: 400 },
  { date: 'Jun', balance: 5000, received: 400, sent: 200 },
];

export default function Wallet() {
  const { balance, transactions } = useWalletStore();
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState<'history' | 'chart'>('history');

  const receivedTotal = transactions.filter((t) => t.type === 'received' || t.type === 'earned').reduce((sum, t) => sum + t.amount, 0);
  const sentTotal = transactions.filter((t) => t.type === 'sent' || t.type === 'purchased').reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Digital Wallet</h1>
          <p className="text-xl text-white/90">Manage your TradeCoins securely</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Balance Card */}
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <p className="text-white/80 mb-2 text-sm">Total Balance</p>
                  <div className="flex items-baseline gap-2">
                    {showBalance ? (
                      <>
                        <span className="text-5xl font-bold">{balance.toLocaleString()}</span>
                        <span className="text-2xl font-semibold">TC</span>
                      </>
                    ) : (
                      <span className="text-5xl font-bold">••••••</span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-all flex items-center justify-center gap-2 font-semibold">
                  <Plus className="w-5 h-5" />
                  Add TradeCoins
                </button>
                <button className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-all flex items-center justify-center gap-2 font-semibold">
                  <Send className="w-5 h-5" />
                  Send TradeCoins
                </button>
                <button className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-all flex items-center justify-center gap-2 font-semibold">
                  <QrCode className="w-5 h-5" />
                  Show QR Code
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Statistics</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total Received</p>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">+{receivedTotal}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total Sent</p>
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400">-{sentTotal}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total Transactions</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{transactions.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex border-b border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setActiveTab('history')}
                  className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'history'
                      ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Transaction History
                </button>
                <button
                  onClick={() => setActiveTab('chart')}
                  className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'chart'
                      ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Analytics
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'history' ? (
                  <div className="space-y-4">
                    {transactions.length > 0 ? (
                      transactions.map((tx) => (
                        <div key={tx.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              tx.type === 'received' || tx.type === 'earned'
                                ? 'bg-green-100 dark:bg-green-900'
                                : 'bg-red-100 dark:bg-red-900'
                            }`}>
                              {tx.type === 'received' || tx.type === 'earned' ? (
                                <Download className={`w-5 h-5 ${
                                  tx.type === 'received' || tx.type === 'earned' ? 'text-green-600 dark:text-green-400' : ''
                                }`} />
                              ) : (
                                <Upload className="w-5 h-5 text-red-600 dark:text-red-400" />
                              )}
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900 dark:text-white">{tx.description}</p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">{new Date(tx.timestamp).toLocaleDateString()}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-bold ${
                              tx.type === 'received' || tx.type === 'earned' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                            }`}>
                              {tx.type === 'received' || tx.type === 'earned' ? '+' : '-'}{tx.amount}
                            </p>
                            <p className={`text-xs ${
                              tx.status === 'completed'
                                ? 'text-green-600 dark:text-green-400'
                                : tx.status === 'pending'
                                  ? 'text-yellow-600 dark:text-yellow-400'
                                  : 'text-red-600 dark:text-red-400'
                            }`}>
                              {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-slate-600 dark:text-slate-400 py-8">No transactions yet</p>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold mb-4 text-slate-900 dark:text-white">Balance Trend</h3>
                      <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.1)" />
                          <XAxis dataKey="date" stroke="#94a3b8" />
                          <YAxis stroke="#94a3b8" />
                          <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: 'none', borderRadius: '8px', color: '#fff' }} />
                          <Line type="monotone" dataKey="balance" stroke="#22c55e" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-4 text-slate-900 dark:text-white">Sent vs Received</h3>
                      <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.1)" />
                          <XAxis dataKey="date" stroke="#94a3b8" />
                          <YAxis stroke="#94a3b8" />
                          <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', border: 'none', borderRadius: '8px', color: '#fff' }} />
                          <Bar dataKey="received" fill="#22c55e" />
                          <Bar dataKey="sent" fill="#ef4444" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
