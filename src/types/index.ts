export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  seller: {
    id: string;
    name: string;
    rating: number;
    location: string;
    verified: boolean;
  };
  rating: number;
  reviews: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  provider: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    verified: boolean;
  };
  category: string;
  responseTime: string;
  reviews: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  walletBalance: number;
  traderLevel: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  verified: boolean;
  reputation: {
    rating: number;
    trades: number;
    completionRate: number;
    responseRate: number;
  };
}

export interface Transaction {
  id: string;
  type: 'sent' | 'received' | 'purchased' | 'earned';
  amount: number;
  description: string;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
  counterparty?: string;
}

export interface Order {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'completed';
  buyer: User;
  seller: User;
  createdAt: Date;
  updatedAt: Date;
}
