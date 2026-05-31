import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout)
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false)
    }, 150)
    setDropdownTimeout(timeout)
  }

  const handleTouchStart = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleClickOutside = (e) => {
    if (!e.target.closest('[data-dropdown-menu]')) {
      setDropdownOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm" onClick={handleClickOutside}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          UAE Business Setup
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            data-dropdown-menu
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
          >
            <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Services <span>▼</span>
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <Link href="/services/mainland" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg">
                  Mainland Company
                </Link>
                <Link href="/services/freezone" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Free Zone Company
                </Link>
                <Link href="/services/offshore" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Offshore Company
                </Link>
                <Link href="/services/bank-account" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Bank Account Setup
                </Link>
                <Link href="/services/vat-accounting" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  VAT & Accounting
                </Link>
                <Link href="/services/golden-visa" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 last:rounded-b-lg">
                  Golden Visa
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/971503947208?text=Hello%20UAE%20Setup%2C%20I%20need%20help%20with%20business%20setup"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  )
}
