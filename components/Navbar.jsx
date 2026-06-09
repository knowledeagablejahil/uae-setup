'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMobileOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 bg-[#3d0a14] transition-shadow duration-300 ${scrolled ? 'shadow-2xl shadow-black/40' : 'shadow-lg'}`}
    >
      {/* Gold top line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="group shrink-0">
          <span className="text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-amber-400">
            Elevate<span className="text-amber-400 transition-colors duration-200 group-hover:text-white">biz</span>360
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">

          <Link href="/" className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-amber-400">
            Home
          </Link>

          {/* Business Setup */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors duration-200 group-hover:text-amber-400">
              Business Setup
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* L1 panel */}
            <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-amber-200 bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />

              {/* Freezone row */}
              <div className="group/fz relative">
                <button className="flex w-full items-center px-4 py-3 text-sm font-semibold text-[#3d0a14] transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">
                  Freezone Company Formation
                  <svg className="ml-auto h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* L2 Freezone panel */}
                <div className="invisible absolute left-full top-0 z-50 w-56 overflow-hidden rounded-2xl border border-amber-200 bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover/fz:visible group-hover/fz:opacity-100">
                  <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />

                  {/* Dubai row */}
                  <div className="group/dxb relative">
                    <Link href="/business-setup/freezone-company-formation/dubai-freezone" className="flex w-full items-center px-4 py-3 text-sm font-semibold text-[#3d0a14] transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">
                      Dubai Free Zone Overview
                      <svg className="ml-auto h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    {/* L3 Dubai panel */}
                    <div className="invisible absolute left-full top-0 z-50 w-56 overflow-hidden rounded-2xl border border-amber-200 bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover/dxb:visible group-hover/dxb:opacity-100">
                      <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
                      <Link href="/business-setup/freezone-company-formation/dubai-freezone/jafza-freezone" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">JAFZA Freezone</Link>
                      <Link href="/business-setup/freezone-company-formation/dubai-freezone/ifza-freezone" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">IFZA Freezone</Link>
                      <Link href="/business-setup/freezone-company-formation/dubai-freezone/dmcc-freezone" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">DMCC Free Zone</Link>
                      <Link href="/business-setup/freezone-company-formation/dubai-freezone/meydan-freezone" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">MEYDAN Freezone</Link>
                      <Link href="/business-setup/freezone-company-formation/dubai-freezone/dubai-world-trade-centre" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">Dubai World Trade Centre</Link>
                      <Link href="/business-setup/freezone-company-formation/dubai-freezone/difc-free-zone" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">DIFC Free Zone</Link>
                      <Link href="/business-setup/freezone-company-formation/dubai-freezone/dubai-south-freezone" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">Dubai South Freezone</Link>
                    </div>
                  </div>

                  {/* Abu Dhabi row */}
                  <div className="group/ad relative">
                    <Link href="/business-setup/freezone-company-formation/abu-dhabi-freezone" className="flex w-full items-center px-4 py-3 text-sm font-semibold text-[#3d0a14] transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">
                      Abu Dhabi Free Zone Overview
                      <svg className="ml-auto h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    {/* L3 Abu Dhabi panel */}
                    <div className="invisible absolute left-full top-0 z-50 w-64 overflow-hidden rounded-2xl border border-amber-200 bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover/ad:visible group-hover/ad:opacity-100">
                      <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
                      <Link href="/business-setup/freezone-company-formation/abu-dhabi-freezone/adgm-freezone" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">ADGM – Abu Dhabi Global Market</Link>
                      <Link href="/business-setup/freezone-company-formation/abu-dhabi-freezone/kizad-freezone" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">KIZAD – Khalifa Industrial Zone</Link>
                    </div>
                  </div>

                  {/* General freezones */}
                  <div className="border-t border-amber-100" />
                  <Link href="/business-setup/freezone-company-formation/ajman-freezone" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">Ajman Freezone</Link>
                  <Link href="/business-setup/freezone-company-formation/fujairah-creative-city-freezone" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">Fujairah Creative City</Link>
                  <Link href="/business-setup/freezone-company-formation/shams-freezone" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">SHAMS Freezone</Link>
                  <Link href="/business-setup/freezone-company-formation/rakez-freezone" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">RAKEZ Freezone</Link>
                </div>
              </div>

              {/* Offshore row */}
              <div className="group/off relative">
                <button className="flex w-full items-center px-4 py-3 text-sm font-semibold text-[#3d0a14] transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">
                  Offshore Company Formation
                  <svg className="ml-auto h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="invisible absolute left-full top-0 z-50 w-56 overflow-hidden rounded-2xl border border-amber-200 bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover/off:visible group-hover/off:opacity-100">
                  <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
                  <Link href="/business-setup/Offshore-company-formation/dubai-offshore" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">Dubai Offshore (JAFZA)</Link>
                  <Link href="/business-setup/Offshore-company-formation/rak-icc-offshore" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">RAK ICC Offshore</Link>
                  <Link href="/business-setup/Offshore-company-formation/seychelles-offshore" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">Seychelles Offshore</Link>
                  <Link href="/business-setup/Offshore-company-formation/cyprus-offshore" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">Cyprus Offshore</Link>
                  <Link href="/business-setup/Offshore-company-formation/hong-kong-offshore" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">Hong Kong Offshore</Link>
                  <Link href="/business-setup/Offshore-company-formation/bvi-offshore" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">BVI Offshore</Link>
                  <Link href="/business-setup/Offshore-company-formation/ajman-offshore" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">Ajman Offshore</Link>
                </div>
              </div>

              {/* Mainland row */}
              <div className="group/ml relative">
                <button className="flex w-full items-center px-4 py-3 text-sm font-semibold text-[#3d0a14] transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">
                  Mainland Company Formation
                  <svg className="ml-auto h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="invisible absolute left-full top-0 z-50 w-56 overflow-hidden rounded-2xl border border-amber-200 bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover/ml:visible group-hover/ml:opacity-100">
                  <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
                  <Link href="/business-setup/mainland-company-formation/dubai-mainland" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">Dubai Mainland</Link>
                  <Link href="/business-setup/mainland-company-formation/abu-dhabi-mainland" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">Abu Dhabi Mainland</Link>
                  <Link href="/business-setup/mainland-company-formation/ajman-mainland" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">Ajman Mainland</Link>
                  <Link href="/business-setup/mainland-company-formation/fujairah-mainland" className="block px-4 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-amber-50 hover:text-amber-800">Fujairah Mainland</Link>
                </div>
              </div>

            </div>
          </div>

          <Link href="/contact" className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-amber-400">
            Contact Us
          </Link>

        </div>

        {/* CTA */}
        <a
          href="https://wa.me/971503947208"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-xl border-2 border-amber-400 bg-amber-400 px-5 py-2 text-sm font-bold text-[#3d0a14] shadow-lg transition-all duration-200 hover:bg-transparent hover:text-amber-400 md:inline-block"
        >
          +971 503947208
        </a>

        {/* Hamburger */}
        <button className="flex flex-col gap-1.5 md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={`block h-0.5 w-6 bg-amber-400 transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-amber-400 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-amber-400 transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Gold bottom line */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-amber-400/20 bg-[#2d0710] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-2.5">
            <Link href="/" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-white/80 hover:text-amber-400">Home</Link>

            {[
              { heading: 'Dubai Freezone', links: [
                ['JAFZA',       '/business-setup/freezone-company-formation/dubai-freezone/jafza-freezone'],
                ['IFZA',        '/business-setup/freezone-company-formation/dubai-freezone/ifza-freezone'],
                ['DMCC',        '/business-setup/freezone-company-formation/dubai-freezone/dmcc-freezone'],
                ['MEYDAN',      '/business-setup/freezone-company-formation/dubai-freezone/meydan-freezone'],
                ['DWTC',        '/business-setup/freezone-company-formation/dubai-freezone/dubai-world-trade-centre'],
                ['DIFC',        '/business-setup/freezone-company-formation/dubai-freezone/difc-free-zone'],
                ['Dubai South', '/business-setup/freezone-company-formation/dubai-freezone/dubai-south-freezone'],
              ]},
              { heading: 'Abu Dhabi Freezone', links: [
                ['ADGM',  '/business-setup/freezone-company-formation/abu-dhabi-freezone/adgm-freezone'],
                ['KIZAD', '/business-setup/freezone-company-formation/abu-dhabi-freezone/kizad-freezone'],
              ]},
              { heading: 'Other Freezones', links: [
                ['Ajman Freezone',         '/business-setup/freezone-company-formation/ajman-freezone'],
                ['Fujairah Creative City', '/business-setup/freezone-company-formation/fujairah-creative-city-freezone'],
                ['SHAMS',                  '/business-setup/freezone-company-formation/shams-freezone'],
                ['RAKEZ',                  '/business-setup/freezone-company-formation/rakez-freezone'],
              ]},
              { heading: 'Offshore', links: [
                ['Dubai Offshore', '/business-setup/Offshore-company-formation/dubai-offshore'],
                ['RAK ICC',        '/business-setup/Offshore-company-formation/rak-icc-offshore'],
                ['Seychelles',     '/business-setup/Offshore-company-formation/seychelles-offshore'],
                ['Cyprus',         '/business-setup/Offshore-company-formation/cyprus-offshore'],
                ['Hong Kong',      '/business-setup/Offshore-company-formation/hong-kong-offshore'],
                ['BVI',            '/business-setup/Offshore-company-formation/bvi-offshore'],
                ['Ajman Offshore', '/business-setup/Offshore-company-formation/ajman-offshore'],
              ]},
              { heading: 'Mainland', links: [
                ['Dubai Mainland',     '/business-setup/mainland-company-formation/dubai-mainland'],
                ['Abu Dhabi Mainland', '/business-setup/mainland-company-formation/abu-dhabi-mainland'],
                ['Ajman Mainland',     '/business-setup/mainland-company-formation/ajman-mainland'],
                ['Fujairah Mainland',  '/business-setup/mainland-company-formation/fujairah-mainland'],
              ]},
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p className="mb-1 mt-3 text-xs font-bold uppercase tracking-widest text-amber-400/60">{heading}</p>
                {links.map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                    className="block py-1 pl-3 text-sm text-white/70 hover:text-amber-400">{label}</Link>
                ))}
              </div>
            ))}

            <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-3 text-sm font-medium text-white/80 hover:text-amber-400">Contact Us</Link>
            <a href="https://wa.me/971503947208" target="_blank" rel="noopener noreferrer"
              className="mt-2 rounded-xl border-2 border-amber-400 bg-amber-400 px-5 py-3 text-center text-sm font-bold text-[#3d0a14]">
              +971 503947208
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
