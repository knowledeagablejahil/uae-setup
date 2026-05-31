'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Elevate 360
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-gray-700 hover:text-blue-600">Services ▼</button>
            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <Link href="/services/mainland" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 first:rounded-t-lg">Mainland</Link>
                <Link href="/services/freezone" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Free Zone</Link>
                <Link href="/services/offshore" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Offshore</Link>
                <Link href="/services/bank-account" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Bank Account</Link>
                <Link href="/services/vat-accounting" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">VAT & Accounting</Link>
                <Link href="/services/golden-visa" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 last:rounded-b-lg">Golden Visa</Link>
              </div>
            )}
          </div>

          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>

        <a
          href="https://wa.me/971503947208?text=Hello%20Elevate%20360%2C%20I%20need%20help%20with%20business%20setup"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  )
}
