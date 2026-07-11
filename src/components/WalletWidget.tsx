'use client';

import { Send, Plus, QrCode, TrendingUp } from 'lucide-react';
import { useWalletStore } from '@/store/walletStore';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { date: 'Jan', balance: 3000 },
  { date: 'Feb', balance: 3500 },
  { date: 'Mar', balance: 4200 },
  { date: 'Apr', balance: 4500 },
  { date: 'May', balance: 4800 },
  { date: 'Jun', balance: 5000 },
];

export function WalletWidget() {
  const { balance, transactions } = useWalletStore();
  const recentTransactions = transactions.slice(0, 3);

  return (
    <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-6 text-white shadow-2xl">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-white/80 mb-2">Your Balance</p>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold">{balance.toLocaleString()}</span>
            <span className="text-xl font-semibold">TC</span>
          </div>
        </div>
        <QrCode className="w-12 h-12 text-white/60" />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-3 transition-all flex flex-col items-center gap-2">
          <Plus className="w-5 h-5" />
          <span className="text-sm font-semibold">Add Coins</span>
        </button>
        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-3 transition-all flex flex-col items-center gap-2">
          <Send className="w-5 h-5" />
          <span className="text-sm font-semibold">Send</span>
        </button>
        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-3 transition-all flex flex-col items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          <span className="text-sm font-semibold">Earn</span>
        </button>
      </div>

      {/* Mini Chart */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px' }} />
            <Line type="monotone" dataKey="balance" stroke="#fff" dot={false} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Transactions */}
      <div className="border-t border-white/20 pt-4">
        <p className="text-sm font-semibold mb-3">Recent Transactions</p>
        <div className="space-y-2">
          {recentTransactions.map((tx) => (
            <div key={tx.id} className="flex justify-between items-center text-sm">
              <span className="text-white/80">{tx.description}</span>
              <span className={tx.type === 'received' || tx.type === 'earned' ? 'text-green-300' : 'text-white'}>
                {tx.type === 'received' || tx.type === 'earned' ? '+' : '-'}{tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
