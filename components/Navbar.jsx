'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const ChevronDown = () => (
  <svg className="ml-1 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="ml-auto h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function Navbar() {
  const [businessOpen, setBusinessOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [freezoneOpen, setFreeZoneOpen] = useState(false);
  const [dubaiOpen, setDubaiOpen] = useState(false);
  const [abuDhabiOpen, setAbuDhabiOpen] = useState(false);
  const [offshoreOpen, setOffshoreOpen] = useState(false);
  const [mainlandOpen, setMainlandOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeAll();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function closeAll() {
    setBusinessOpen(false);
    setServicesOpen(false);
    setFreeZoneOpen(false);
    setDubaiOpen(false);
    setAbuDhabiOpen(false);
    setOffshoreOpen(false);
    setMainlandOpen(false);
    setMobileOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm" ref={navRef}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600 shrink-0" onClick={closeAll}>
          Elevate 360°
        </Link>

        {/* Desktop Nav — centered */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-1">

          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-blue-600" onClick={closeAll}>
            Home
          </Link>

          {/* Business Setup */}
          <div className="relative">
            <button
              onClick={() => { setBusinessOpen(!businessOpen); setServicesOpen(false); }}
              className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              Business Setup <ChevronDown />
            </button>

            {businessOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 mt-2 w-64 rounded-xl border border-slate-100 bg-white shadow-lg">

                {/* Freezone row */}
                <div
                  className="relative"
                  onMouseEnter={() => { setFreeZoneOpen(true); setOffshoreOpen(false); setMainlandOpen(false); }}
                  onMouseLeave={() => setFreeZoneOpen(false)}
                >
                  <button className="flex w-full items-center px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600">
                    Freezone Company Formation <ChevronRight />
                  </button>

                  {freezoneOpen && (
                    <div className="absolute right-full top-0 z-50 w-64 rounded-xl border border-slate-100 bg-white shadow-lg">

                      {/* Dubai sub-row */}
                      <div
                        className="relative"
                        onMouseEnter={() => setDubaiOpen(true)}
                        onMouseLeave={() => setDubaiOpen(false)}
                      >
                        <Link
                          href="/business-setup/dubai-freezone-overview"
                          onClick={closeAll}
                          className="flex w-full items-center px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
                        >
                          Dubai Free Zone Overview <ChevronRight />
                        </Link>

                        {dubaiOpen && (
                          <div className="absolute right-full top-0 z-50 w-64 rounded-xl border border-slate-100 bg-white shadow-lg">
                            {[
                              { label: 'JAFZA Freezone', href: '/business-setup/dubai-freezone/jafza-freezone' },
                              { label: 'IFZA Freezone', href: '/business-setup/dubai-freezone/ifza-freezone' },
                              { label: 'DMCC Free Zone', href: '/business-setup/dubai-freezone/dmcc-freezone' },
                              { label: 'MEYDAN Freezone', href: '/business-setup/dubai-freezone/meydan-freezone' },
                              { label: 'Dubai World Trade Centre', href: '/business-setup/dubai-freezone/dubai-world-trade-centre' },
                              { label: 'DIFC Free Zone', href: '/business-setup/dubai-freezone/difc-free-zone' },
                              { label: 'Dubai South Freezone', href: '/business-setup/dubai-freezone/dubai-south-freezone' },
                            ].map((item) => (
                              <Link key={item.href} href={item.href} onClick={closeAll}
                                className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600">
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Abu Dhabi sub-row */}
                      <div
                        className="relative"
                        onMouseEnter={() => setAbuDhabiOpen(true)}
                        onMouseLeave={() => setAbuDhabiOpen(false)}
                      >
                        <Link
                          href="/business-setup/abu-dhabi-freezone-overview"
                          onClick={closeAll}
                          className="flex w-full items-center px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
                        >
                          Abu Dhabi Free Zone Overview <ChevronRight />
                        </Link>

                        {abuDhabiOpen && (
                          <div className="absolute right-full top-0 z-50 w-64 rounded-xl border border-slate-100 bg-white shadow-lg">
                            {[
                              { label: 'ADGM – Abu Dhabi Global Market', href: '/business-setup/abu-dhabi-freezone/adgm-freezone' },
                              { label: 'KIZAD – Khalifa Industrial Zone', href: '/business-setup/abu-dhabi-freezone/kizad-freezone' },
                            ].map((item) => (
                              <Link key={item.href} href={item.href} onClick={closeAll}
                                className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600">
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* General freezones */}
                      {[
                        { label: 'Ajman Freezone', href: '/business-setup/freezone-company-formation/ajman-freezone' },
                        { label: 'Fujairah Creative City', href: '/business-setup/freezone-company-formation/fujairah-creative-city-freezone' },
                        { label: 'SHAMS Freezone', href: '/business-setup/freezone-company-formation/shams-freezone' },
                        { label: 'RAKEZ Freezone', href: '/business-setup/freezone-company-formation/rakez-freezone' },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeAll}
                          className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Offshore row */}
                <div
                  className="relative"
                  onMouseEnter={() => { setOffshoreOpen(true); setFreeZoneOpen(false); setMainlandOpen(false); }}
                  onMouseLeave={() => setOffshoreOpen(false)}
                >
                  <button className="flex w-full items-center px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600">
                    Offshore Company Formation <ChevronRight />
                  </button>

                  {offshoreOpen && (
                    <div className="absolute right-full top-0 z-50 w-64 rounded-xl border border-slate-100 bg-white shadow-lg">
                      {[
                        { label: 'Dubai Offshore (JAFZA)', href: '/business-setup/offshore-company-formation/dubai-offshore' },
                        { label: 'RAK ICC Offshore', href: '/business-setup/offshore-company-formation/rak-icc-offshore' },
                        { label: 'Seychelles Offshore', href: '/business-setup/offshore-company-formation/seychelles-offshore' },
                        { label: 'Cyprus Offshore', href: '/business-setup/offshore-company-formation/cyprus-offshore' },
                        { label: 'Hong Kong Offshore', href: '/business-setup/offshore-company-formation/hong-kong-offshore' },
                        { label: 'BVI Offshore', href: '/business-setup/offshore-company-formation/bvi-offshore' },
                        { label: 'Ajman Offshore', href: '/business-setup/offshore-company-formation/ajman-offshore' },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeAll}
                          className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mainland row */}
                <div
                  className="relative"
                  onMouseEnter={() => { setMainlandOpen(true); setFreeZoneOpen(false); setOffshoreOpen(false); }}
                  onMouseLeave={() => setMainlandOpen(false)}
                >
                  <button className="flex w-full items-center px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600">
                    Mainland Company Formation <ChevronRight />
                  </button>

                  {mainlandOpen && (
                    <div className="absolute right-full top-0 z-50 w-64 rounded-xl border border-slate-100 bg-white shadow-lg">
                      {[
                        { label: 'Dubai Mainland', href: '/business-setup/mainland-company-formation/dubai-mainland' },
                        { label: 'Abu Dhabi Mainland', href: '/business-setup/mainland-company-formation/abu-dhabi-mainland' },
                        { label: 'Ajman Mainland', href: '/business-setup/mainland-company-formation/ajman-mainland' },
                        { label: 'Fujairah Mainland', href: '/business-setup/mainland-company-formation/fujairah-mainland' },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeAll}
                          className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>

          {/* Services */}
          <div className="relative">
            <button
              onClick={() => { setServicesOpen(!servicesOpen); setBusinessOpen(false); }}
              className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              Services <ChevronDown />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 mt-2 w-56 rounded-xl border border-slate-100 bg-white shadow-lg">
                {[
                  { label: 'Bank Account Opening', href: '/services/bank-account' },
                  { label: 'VAT & Accounting', href: '/services/vat-accounting' },
                  { label: 'Golden Visa', href: '/services/golden-visa' },
                  { label: 'PRO Services', href: '/services/pro-services' },
                  { label: 'Company Liquidation', href: '/services/company-liquidation' },
                ].map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeAll}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-blue-600" onClick={closeAll}>
            Contact Us
          </Link>
        </div>

        {/* CTA — right side */}
        <a
          href="https://wa.me/971503947208"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Get Started
        </a>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-slate-700 transition-all ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-slate-700 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-slate-700 transition-all ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link href="/" onClick={closeAll} className="text-sm font-medium text-slate-700">Home</Link>

            <p className="pt-2 text-xs font-bold uppercase tracking-widest text-slate-400">Dubai Freezone</p>
            <Link href="/business-setup/dubai-freezone/jafza-freezone" onClick={closeAll} className="pl-3 text-sm text-slate-700">JAFZA</Link>
            <Link href="/business-setup/dubai-freezone/ifza-freezone" onClick={closeAll} className="pl-3 text-sm text-slate-700">IFZA</Link>
            <Link href="/business-setup/dubai-freezone/dmcc-freezone" onClick={closeAll} className="pl-3 text-sm text-slate-700">DMCC</Link>
            <Link href="/business-setup/dubai-freezone/meydan-freezone" onClick={closeAll} className="pl-3 text-sm text-slate-700">MEYDAN</Link>
            <Link href="/business-setup/dubai-freezone/dubai-world-trade-centre" onClick={closeAll} className="pl-3 text-sm text-slate-700">DWTC</Link>
            <Link href="/business-setup/dubai-freezone/difc-free-zone" onClick={closeAll} className="pl-3 text-sm text-slate-700">DIFC</Link>
            <Link href="/business-setup/dubai-freezone/dubai-south-freezone" onClick={closeAll} className="pl-3 text-sm text-slate-700">Dubai South</Link>

            <p className="pt-2 text-xs font-bold uppercase tracking-widest text-slate-400">Abu Dhabi Freezone</p>
            <Link href="/business-setup/abu-dhabi-freezone/adgm-freezone" onClick={closeAll} className="pl-3 text-sm text-slate-700">ADGM</Link>
            <Link href="/business-setup/abu-dhabi-freezone/kizad-freezone" onClick={closeAll} className="pl-3 text-sm text-slate-700">KIZAD</Link>

            <p className="pt-2 text-xs font-bold uppercase tracking-widest text-slate-400">Other Freezones</p>
            <Link href="/business-setup/freezone-company-formation/ajman-freezone" onClick={closeAll} className="pl-3 text-sm text-slate-700">Ajman Freezone</Link>
            <Link href="/business-setup/freezone-company-formation/fujairah-creative-city-freezone" onClick={closeAll} className="pl-3 text-sm text-slate-700">Fujairah Creative City</Link>
            <Link href="/business-setup/freezone-company-formation/shams-freezone" onClick={closeAll} className="pl-3 text-sm text-slate-700">SHAMS</Link>
            <Link href="/business-setup/freezone-company-formation/rakez-freezone" onClick={closeAll} className="pl-3 text-sm text-slate-700">RAKEZ</Link>

            <p className="pt-2 text-xs font-bold uppercase tracking-widest text-slate-400">Offshore</p>
            <Link href="/business-setup/offshore-company-formation/dubai-offshore" onClick={closeAll} className="pl-3 text-sm text-slate-700">Dubai Offshore</Link>
            <Link href="/business-setup/offshore-company-formation/rak-icc-offshore" onClick={closeAll} className="pl-3 text-sm text-slate-700">RAK ICC</Link>
            <Link href="/business-setup/offshore-company-formation/seychelles-offshore" onClick={closeAll} className="pl-3 text-sm text-slate-700">Seychelles</Link>
            <Link href="/business-setup/offshore-company-formation/cyprus-offshore" onClick={closeAll} className="pl-3 text-sm text-slate-700">Cyprus</Link>
            <Link href="/business-setup/offshore-company-formation/hong-kong-offshore" onClick={closeAll} className="pl-3 text-sm text-slate-700">Hong Kong</Link>
            <Link href="/business-setup/offshore-company-formation/bvi-offshore" onClick={closeAll} className="pl-3 text-sm text-slate-700">BVI</Link>
            <Link href="/business-setup/offshore-company-formation/ajman-offshore" onClick={closeAll} className="pl-3 text-sm text-slate-700">Ajman Offshore</Link>

            <p className="pt-2 text-xs font-bold uppercase tracking-widest text-slate-400">Mainland</p>
            <Link href="/business-setup/mainland-company-formation/dubai-mainland" onClick={closeAll} className="pl-3 text-sm text-slate-700">Dubai Mainland</Link>
            <Link href="/business-setup/mainland-company-formation/abu-dhabi-mainland" onClick={closeAll} className="pl-3 text-sm text-slate-700">Abu Dhabi Mainland</Link>
            <Link href="/business-setup/mainland-company-formation/ajman-mainland" onClick={closeAll} className="pl-3 text-sm text-slate-700">Ajman Mainland</Link>
            <Link href="/business-setup/mainland-company-formation/fujairah-mainland" onClick={closeAll} className="pl-3 text-sm text-slate-700">Fujairah Mainland</Link>

            <p className="pt-2 text-xs font-bold uppercase tracking-widest text-slate-400">Services</p>
            <Link href="/services/bank-account" onClick={closeAll} className="pl-3 text-sm text-slate-700">Bank Account Opening</Link>
            <Link href="/services/vat-accounting" onClick={closeAll} className="pl-3 text-sm text-slate-700">VAT & Accounting</Link>
            <Link href="/services/golden-visa" onClick={closeAll} className="pl-3 text-sm text-slate-700">Golden Visa</Link>
            <Link href="/services/pro-services" onClick={closeAll} className="pl-3 text-sm text-slate-700">PRO Services</Link>
            <Link href="/services/company-liquidation" onClick={closeAll} className="pl-3 text-sm text-slate-700">Company Liquidation</Link>

            <Link href="/contact" onClick={closeAll} className="pt-2 text-sm font-medium text-slate-700">Contact Us</Link>
            <a href="https://wa.me/971503947208" target="_blank" rel="noopener noreferrer"
              className="mt-2 rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
