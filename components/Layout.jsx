'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/971501234567?text=Hi%21%20I%27m%20interested%20in%20your%20UAE%20business%20setup%20services', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <span className="hidden sm:block text-xl font-bold text-gray-900">UAE Setup</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">
                Home
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition font-medium text-sm flex items-center gap-1">
                  Services ↓
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition z-50">
                  <Link href="/services/mainland" className="block px-4 py-3 hover:bg-blue-50 text-sm text-gray-700 hover:text-blue-600">
                    Mainland Setup
                  </Link>
                  <Link href="/services/freezone" className="block px-4 py-3 hover:bg-blue-50 text-sm text-gray-700 hover:text-blue-600">
                    Free Zone Setup
                  </Link>
                  <Link href="/services/bank-account" className="block px-4 py-3 hover:bg-blue-50 text-sm text-gray-700 hover:text-blue-600">
                    Bank Account Opening
                  </Link>
                  <Link href="/services/vat-accounting" className="block px-4 py-3 hover:bg-blue-50 text-sm text-gray-700 hover:text-blue-600">
                    VAT & Accounting
                  </Link>
                  <Link href="/services/golden-visa" className="block px-4 py-3 hover:bg-blue-50 text-sm text-gray-700 hover:text-blue-600">
                    Golden Visa
                  </Link>
                </div>
              </div>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition text-sm font-medium"
              >
                <MessageCircle size={18} />
                WhatsApp
              </button>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-6 border-t">
              <Link href="/" className="block py-3 text-gray-700 hover:text-blue-600 transition">
                Home
              </Link>
              <Link href="/services/mainland" className="block py-3 text-gray-700 hover:text-blue-600 transition text-sm">
                Mainland Setup
              </Link>
              <Link href="/services/freezone" className="block py-3 text-gray-700 hover:text-blue-600 transition text-sm">
                Free Zone Setup
              </Link>
              <Link href="/services/bank-account" className="block py-3 text-gray-700 hover:text-blue-600 transition text-sm">
                Bank Account
              </Link>
              <Link href="/services/vat-accounting" className="block py-3 text-gray-700 hover:text-blue-600 transition text-sm">
                VAT & Accounting
              </Link>
              <Link href="/services/golden-visa" className="block py-3 text-gray-700 hover:text-blue-600 transition text-sm">
                Golden Visa
              </Link>
              <Link href="/about" className="block py-3 text-gray-700 hover:text-blue-600 transition">
                About
              </Link>
              <Link href="/blog" className="block py-3 text-gray-700 hover:text-blue-600 transition">
                Resources
              </Link>
              <Link href="/contact" className="block py-3 text-gray-700 hover:text-blue-600 transition">
                Contact
              </Link>
              <button
                onClick={handleWhatsApp}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition text-sm font-medium"
              >
                <MessageCircle size={18} />
                WhatsApp
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">UAE Business Setup</h3>
              <p className="text-gray-400 text-sm">Fast. Transparent. Trusted.</p>
              <p className="text-gray-400 text-sm mt-4">Expert guidance for your UAE business journey</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/services/mainland" className="hover:text-white transition">Mainland Setup</Link></li>
                <li><Link href="/services/freezone" className="hover:text-white transition">Free Zone Setup</Link></li>
                <li><Link href="/services/bank-account" className="hover:text-white transition">Bank Accounts</Link></li>
                <li><Link href="/services/vat-accounting" className="hover:text-white transition">VAT & Accounting</Link></li>
                <li><Link href="/services/golden-visa" className="hover:text-white transition">Golden Visa</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Resources</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Get In Touch</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <span>+971 50 123 4567</span>
                </li>
                <li>
                  <a href="mailto:hello@uaesetup.ae" className="hover:text-white transition">
                    hello@uaesetup.ae
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleWhatsApp}
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Chat
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left text-sm text-gray-400">
              <div>
                <span className="font-semibold text-white">50+</span> Years Combined Experience
              </div>
              <div>
                <span className="font-semibold text-white">500+</span> Successful Setups
              </div>
              <div>
                <span className="font-semibold text-white">100%</span> Client Satisfaction
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2024 UAE Business Setup. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition hover:scale-110 z-40 animate-bounce"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
