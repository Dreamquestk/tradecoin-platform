'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerSections = [
  {
    title: 'Product',
    links: ['Marketplace', 'Services', 'Wallet', 'Mobile App', 'API'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Press', 'Contact'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Documentation', 'Status', 'Community', 'Contact Us'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance'],
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TC</span>
              </div>
              <span className="text-lg font-bold">TradeCoin</span>
            </div>
            <p className="text-slate-400 text-sm">
              Trade anything, earn TradeCoins, spend anywhere in our marketplace.
            </p>
            <div className="flex gap-4 mt-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 bg-slate-700 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 pt-8 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <a href="mailto:support@tradecoin.io" className="text-white hover:text-primary-400">
                support@tradecoin.io
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Phone</p>
              <a href="tel:+1234567890" className="text-white hover:text-primary-400">
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Address</p>
              <p className="text-white">123 Commerce St, Tech City</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 TradeCoin. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Download iOS
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Download Android
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
