'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const dropdownTimeoutRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleServicesMouseEnter = () => {
    clearTimeout(dropdownTimeoutRef.current)
    setServicesDropdownOpen(true)
  }

  const handleServicesMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false)
    }, 150) // Small delay to allow movement to dropdown
  }

  const services = [
    { name: 'Mainland Setup', href: '/services/mainland' },
    { name: 'Free Zone Setup', href: '/services/freezone' },
    { name: 'Offshore Setup', href: '/services/offshore' },
    { name: 'Bank Account Opening', href: '/services/bank-account' },
    { name: 'VAT & Accounting', href: '/services/vat-accounting' },
    { name: 'Golden Visa Support', href: '/services/golden-visa' },
  ]

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
              UAE Business Setup
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
              <Link href="/" className="text-slate-700 hover:text-blue-600 font-semibold">
                Home
              </Link>

              {/* Services Dropdown - Desktop */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-semibold">
                  Services
                  <ChevronDown size={18} className={`transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="text-slate-700 hover:text-blue-600 font-semibold">
                About
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 font-semibold">
                Contact
              </Link>
              <a
                href="https://wa.me/971501234567"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
              >
                WhatsApp
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
              <Link href="/" className="block py-2 text-slate-700 hover:text-blue-600 font-semibold">
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="py-2">
                <button
                  className="w-full text-left flex items-center justify-between text-slate-700 hover:text-blue-600 font-semibold"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <ChevronDown size={18} className={`transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesDropdownOpen && (
                  <div className="pl-4 mt-2 bg-slate-50 rounded py-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-2 text-slate-600 hover:text-blue-600"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setServicesDropdownOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="block py-2 text-slate-700 hover:text-blue-600 font-semibold">
                About
              </Link>
              <Link href="/contact" className="block py-2 text-slate-700 hover:text-blue-600 font-semibold">
                Contact
              </Link>
              <a
                href="https://wa.me/971501234567"
                className="block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 text-center"
              >
                WhatsApp
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">UAE Business Setup</h3>
              <p className="text-slate-400">Professional business setup services across UAE</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href} className="hover:text-white">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-slate-400 mb-2">📧 hello@uaesetup.ae</p>
              <p className="text-slate-400 mb-2">📞 +971 50 123 4567</p>
              <p className="text-slate-400">💬 Available on WhatsApp 24/7</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2024 UAE Business Setup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
