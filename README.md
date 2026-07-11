# TradeCoin - Digital Marketplace Platform

## Overview

TradeCoin is a modern, premium digital marketplace platform powered by community currency. Users can buy, sell, and exchange products and services using TradeCoins (TC) instead of relying solely on cash.

## Features

### Core Features
- **Marketplace** - Browse and purchase products across multiple categories
- **Services** - Hire freelancers and service providers
- **Digital Wallet** - Secure wallet for managing TradeCoins
- **User Dashboard** - Personal dashboard for orders and preferences
- **Business Dashboard** - Analytics and management for sellers
- **Reputation System** - Trader levels (Bronze, Silver, Gold, Platinum, Diamond)
- **Escrow Protection** - Secure payment holding system
- **Dark/Light Mode** - Full theme support

## Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Data visualization
- **Zustand** - State management
- **Lucide React** - Icon library

### Design System
- **Glassmorphism** - Modern UI effects
- **Custom Gradient** - Brand colors (Emerald Green, Deep Blue, Gold)
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Homepage
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer
│   ├── Hero.tsx        # Hero section
│   ├── ProductCard.tsx # Product display
│   ├── ServiceCard.tsx # Service display
│   └── WalletWidget.tsx # Wallet interface
├── types/              # TypeScript types
│   └── index.ts        # Type definitions
├── utils/              # Utility functions
│   ├── constants.ts    # App constants
│   └── cn.ts           # Class name utility
├── hooks/              # Custom hooks
│   └── useTheme.ts     # Theme management
└── store/              # State management
    └── walletStore.ts  # Wallet Zustand store
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/tradecoin-platform.git
cd tradecoin-platform
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Run development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Development
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript
```

## Color Scheme

- **Primary (Emerald Green)**: #22c55e
- **Accent (Deep Blue)**: #0ea5e9
- **Gold**: #f59e0b
- **White/Dark**: #ffffff / #0f172a

## Features by Page

### Homepage
- Hero section with CTA buttons
- Featured products grid
- Popular services showcase
- Security features section
- Wallet preview
- Revenue model explanation
- Trader levels display

### Marketplace (Coming Soon)
- Product grid with filters
- Search functionality
- Category navigation
- Product details modal
- Review system

### Services (Coming Soon)
- Service provider listings
- Search and filtering
- Booking interface
- Review and ratings

### Wallet (Coming Soon)
- Balance display
- Transaction history
- Send/Receive interface
- QR code payments
- Exchange rates

## Planned Features

- User authentication system
- KYC verification process
- Payment gateway integration
- Real-time notifications
- Chat system
- Advanced search and filters
- Mobile app (React Native)
- Admin dashboard

## Security

TradeCoin implements:
- Bank-grade encryption
- Multi-factor authentication (coming soon)
- AI fraud detection (coming soon)
- KYC/AML compliance (coming soon)
- Secure escrow system (coming soon)
- Regular security audits (coming soon)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For support, email support@tradecoin.io or create an issue in the repository.

## Roadmap

- [ ] User authentication
- [ ] Payment integration
- [ ] Mobile app
- [ ] Admin dashboard
- [ ] Advanced analytics
- [ ] API documentation
- [ ] Blockchain integration (optional)
