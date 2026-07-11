import { create } from 'zustand';
import { Transaction } from '@/types';

interface WalletState {
  balance: number;
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  updateBalance: (amount: number) => void;
  getTransactions: () => Transaction[];
}

export const useWalletStore = create<WalletState>((set, get) => ({
  balance: 5000,
  transactions: [
    {
      id: '1',
      type: 'received',
      amount: 500,
      description: 'Sold vintage laptop',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      status: 'completed',
      counterparty: 'John Doe',
    },
    {
      id: '2',
      type: 'purchased',
      amount: 200,
      description: 'Web design service',
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      status: 'completed',
      counterparty: 'Jane Smith',
    },
    {
      id: '3',
      type: 'earned',
      amount: 150,
      description: 'Referral bonus',
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      status: 'completed',
    },
  ],
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [transaction, ...state.transactions],
    })),
  updateBalance: (amount) =>
    set((state) => ({
      balance: state.balance + amount,
    })),
  getTransactions: () => get().transactions,
}));
