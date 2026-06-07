'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const ChevronDown = () => (
  <svg className="ml-1 h-4 w-4 shrink-0 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="ml-auto h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const dropdownBase = "absolute z-50 w-64 rounded-2xl border border-amber-100 bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden";
const itemBase = "block px-4 py-3 text-sm text-slate-700 transition-all duration-150 hover:bg-amber-50 hover:text-amber-800 hover:pl-5";
const headingItem = "flex w-full items-center px-4 py-3 text-sm font-semibold text-slate-800 transition-all duration-150 hover:bg-amber-50 hover:text-amber-800";

export default function Navbar() {
  const [businessOpen, setBusinessOpen] = useState(false);
  const [freezoneOpen, setFreeZoneOpen] = useState(false);
  const [dubaiOpen, setDubaiOpen] = useState(false);
  const [abuDhabiOpen, setAbuDhabiOpen] = useState(false);
  const [offshoreOpen, setOffshoreOpen] = useState(false);
  const [mainlandOpen, setMainlandOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) closeAll();
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleScroll() { setScrolled(window.scrollY > 10); }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function closeAll() {
    setBusinessOpen(false);
    setFreeZoneOpen(false);
    setDubaiOpen(false);
    setAbuDhabiOpen(false);
    setOffshoreOpen(false);
    setMainlandOpen(false);
    setMobileOpen(false);
  }

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#3d0a14] shadow-2xl shadow-black/30'
          : 'bg-[#3d0a14] shadow-lg'
      }`}
    >
      {/* Gold top border accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" onClick={closeAll} className="group flex items-center gap-2 shrink-0">
          <span className="text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-amber-400">
            Elevate<span className="text-amber-400 group-hover:text-white transition-colors duration-200">biz</span>360
          </span>
          <span className="hidden text-xs font-medium tracking-widest text-amber-400/70 sm:block">°</span>
        </Link>

        {/* Desktop Nav — centered */}
        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">

          <Link
            href="/"
            onClick={closeAll}
            className="relative text-sm font-medium text-white/80 transition-colors duration-200 hover:text-amber-400 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>

          {/* Business Setup */}
          <div className="relative">
            <button
              onClick={() => setBusinessOpen(!businessOpen)}
              className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-amber-400"
            >
              Business Setup
              <span className={`transition-transform duration-200 ${businessOpen ? 'rotate-180' : ''}`}>
                <ChevronDown />
              </span>
            </button>

            {/* L1 dropdown */}
            <div className={`${dropdownBase} left-1/2 top-full mt-3 -translate-x-1/2 transition-all duration-200 ${businessOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />

              {/* Freezone */}
              <div
                className="relative"
                onMouseEnter={() => { setFreeZoneOpen(true); setOffshoreOpen(false); setMainlandOpen(false); }}
                onMouseLeave={() => setFreeZoneOpen(false)}
              >
                <button className={headingItem}>
                  Freezone Company Formation <ChevronRight />
                </button>

                {/* L2 Freezone dropdown */}
                <div className={`${dropdownBase} left-full top-0 transition-all duration-200 ${freezoneOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-2 pointer-events-none'}`}>
                  <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />

                  {/* Dubai */}
                  <div
                    className="relative"
                    onMouseEnter={() => setDubaiOpen(true)}
                    onMouseLeave={() => setDubaiOpen(false)}
                  >
                    <Link href="/business-setup/freezone-company-formation/dubai-freezone" onClick={closeAll} className={headingItem}>
                      Dubai Free Zone Overview <ChevronRight />
                    </Link>

                    {/* L3 Dubai */}
                    <div className={`${dropdownBase} left-full top-0 transition-all duration-200 ${dubaiOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-2 pointer-events-none'}`}>
                      <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
                      {[
                        { label: 'JAFZA Freezone', href: '/business-setup/freezone-company-formation/dubai-freezone/jafza-freezone' },
                        { label: 'IFZA Freezone', href: '/business-setup/freezone-company-formation/dubai-freezone/ifza-freezone' },
                        { label: 'DMCC Free Zone', href: '/business-setup/freezone-company-formation/dubai-freezone/dmcc-freezone' },
                        { label: 'MEYDAN Freezone', href: '/business-setup/freezone-company-formation/dubai-freezone/meydan-freezone' },
                        { label: 'Dubai World Trade Centre', href: '/business-setup/freezone-company-formation/dubai-freezone/dubai-world-trade-centre' },
                        { label: 'DIFC Free Zone', href: '/business-setup/freezone-company-formation/dubai-freezone/difc-free-zone' },
                        { label: 'Dubai South Freezone', href: '/business-setup/freezone-company-formation/dubai-freezone/dubai-south-freezone' },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeAll} className={itemBase}>{item.label}</Link>
                      ))}
                    </div>
                  </div>

                  {/* Abu Dhabi */}
                  <div
                    className="relative"
                    onMouseEnter={() => setAbuDhabiOpen(true)}
                    onMouseLeave={() => setAbuDhabiOpen(false)}
                  >
                    <Link href="/business-setup/freezone-company-formation/abu-dhabi-freezone" onClick={closeAll} className={headingItem}>
                      Abu Dhabi Free Zone Overview <ChevronRight />
                    </Link>

                    {/* L3 Abu Dhabi */}
                    <div className={`${dropdownBase} left-full top-0 transition-all duration-200 ${abuDhabiOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-2 pointer-events-none'}`}>
                      <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
                      {[
                        { label: 'ADGM – Abu Dhabi Global Market', href: '/business-setup/freezone-company-formation/abu-dhabi-freezone/adgm-freezone' },
                        { label: 'KIZAD – Khalifa Industrial Zone', href: '/business-setup/freezone-company-formation/abu-dhabi-freezone/kizad-freezone' },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} onClick={closeAll} className={itemBase}>{item.label}</Link>
                      ))}
                    </div>
                  </div>

                  {/* General freezones */}
                  <div className="border-t border-amber-100" />
                  {[
                    { label: 'Ajman Freezone', href: '/business-setup/freezone-company-formation/ajman-freezone' },
                    { label: 'Fujairah Creative City', href: '/business-setup/freezone-company-formation/fujairah-creative-city-freezone' },
                    { label: 'SHAMS Freezone', href: '/business-setup/freezone-company-formation/shams-freezone' },
                    { label: 'RAKEZ Freezone', href: '/business-setup/freezone-company-formation/rakez-freezone' },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} onClick={closeAll} className={itemBase}>{item.label}</Link>
                  ))}
                </div>
              </div>

              {/* Offshore */}
              <div
                className="relative"
                onMouseEnter={() => { setOffshoreOpen(true); setFreeZoneOpen(false); setMainlandOpen(false); }}
                onMouseLeave={() => setOffshoreOpen(false)}
              >
                <button className={headingItem}>
                  Offshore Company Formation <ChevronRight />
                </button>

                <div className={`${dropdownBase} left-full top-0 transition-all duration-200 ${offshoreOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-2 pointer-events-none'}`}>
                  <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
                  {[
                    { label: 'Dubai Offshore (JAFZA)', href: '/business-setup/Offshore-company-formation/dubai-offshore' },
                    { label: 'RAK ICC Offshore', href: '/business-setup/Offshore-company-formation/rak-icc-offshore' },
                    { label: 'Seychelles Offshore', href: '/business-setup/Offshore-company-formation/seychelles-offshore' },
                    { label: 'Cyprus Offshore', href: '/business-setup/Offshore-company-formation/cyprus-offshore' },
                    { label: 'Hong Kong Offshore', href: '/business-setup/Offshore-company-formation/hong-kong-offshore' },
                    { label: 'BVI Offshore', href: '/business-setup/Offshore-company-formation/bvi-offshore' },
                    { label: 'Ajman Offshore', href: '/business-setup/Offshore-company-formation/ajman-offshore' },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} onClick={closeAll} className={itemBase}>{item.label}</Link>
                  ))}
                </div>
              </div>

              {/* Mainland */}
              <div
                className="relative"
                onMouseEnter={() => { setMainlandOpen(true); setFreeZoneOpen(false); setOffshoreOpen(false); }}
                onMouseLeave={() => setMainlandOpen(false)}
              >
                <button className={headingItem}>
                  Mainland Company Formation <ChevronRight />
                </button>

                <div className={`${dropdownBase} left-full top-0 transition-all duration-200 ${mainlandOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-2 pointer-events-none'}`}>
                  <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
                  {[
                    { label: 'Dubai Mainland', href: '/business-setup/mainland-company-formation/dubai-mainland' },
                    { label: 'Abu Dhabi Mainland', href: '/business-setup/mainland-company-formation/abu-dhabi-mainland' },
                    { label: 'Ajman Mainland', href: '/business-setup/mainland-company-formation/ajman-mainland' },
                    { label: 'Fujairah Mainland', href: '/business-setup/mainland-company-formation/fujairah-mainland' },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} onClick={closeAll} className={itemBase}>{item.label}</Link>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <Link
            href="/contact"
            onClick={closeAll}
            className="relative text-sm font-medium text-white/80 transition-colors duration-200 hover:text-amber-400 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact Us
          </Link>

        </div>

        {/* CTA */}
        <a
          href="https://wa.me/971503947208"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-xl border border-amber-400 bg-amber-400 px-5 py-2.5 text-sm font-semibold text-[#3d0a14] shadow-lg shadow-amber-900/30 transition-all duration-200 hover:bg-transparent hover:text-amber-400 md:inline-block"
        >
          +971 503947208
        </a>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-amber-400 transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-amber-400 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-amber-400 transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Gold bottom border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-amber-400/20 bg-[#2d0710] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-3">
            <Link href="/" onClick={closeAll} className="text-sm font-medium text-white/80 hover:text-amber-400">Home</Link>

            <p className="pt-3 text-xs font-bold uppercase tracking-widest text-amber-400/60">Dubai Freezone</p>
            {[
              { label: 'JAFZA', href: '/business-setup/freezone-company-formation/dubai-freezone/jafza-freezone' },
              { label: 'IFZA', href: '/business-setup/freezone-company-formation/dubai-freezone/ifza-freezone' },
              { label: 'DMCC', href: '/business-setup/freezone-company-formation/dubai-freezone/dmcc-freezone' },
              { label: 'MEYDAN', href: '/business-setup/freezone-company-formation/dubai-freezone/meydan-freezone' },
              { label: 'DWTC', href: '/business-setup/freezone-company-formation/dubai-freezone/dubai-world-trade-centre' },
              { label: 'DIFC', href: '/business-setup/freezone-company-formation/dubai-freezone/difc-free-zone' },
              { label: 'Dubai South', href: '/business-setup/freezone-company-formation/dubai-freezone/dubai-south-freezone' },
            ].map(i => <Link key={i.href} href={i.href} onClick={closeAll} className="pl-3 text-sm text-white/70 hover:text-amber-400">{i.label}</Link>)}

            <p className="pt-3 text-xs font-bold uppercase tracking-widest text-amber-400/60">Abu Dhabi Freezone</p>
            {[
              { label: 'ADGM', href: '/business-setup/freezone-company-formation/abu-dhabi-freezone/adgm-freezone' },
              { label: 'KIZAD', href: '/business-setup/freezone-company-formation/abu-dhabi-freezone/kizad-freezone' },
            ].map(i => <Link key={i.href} href={i.href} onClick={closeAll} className="pl-3 text-sm text-white/70 hover:text-amber-400">{i.label}</Link>)}

            <p className="pt-3 text-xs font-bold uppercase tracking-widest text-amber-400/60">Other Freezones</p>
            {[
              { label: 'Ajman Freezone', href: '/business-setup/freezone-company-formation/ajman-freezone' },
              { label: 'Fujairah Creative City', href: '/business-setup/freezone-company-formation/fujairah-creative-city-freezone' },
              { label: 'SHAMS', href: '/business-setup/freezone-company-formation/shams-freezone' },
              { label: 'RAKEZ', href: '/business-setup/freezone-company-formation/rakez-freezone' },
            ].map(i => <Link key={i.href} href={i.href} onClick={closeAll} className="pl-3 text-sm text-white/70 hover:text-amber-400">{i.label}</Link>)}

            <p className="pt-3 text-xs font-bold uppercase tracking-widest text-amber-400/60">Offshore</p>
            {[
              { label: 'Dubai Offshore', href: '/business-setup/Offshore-company-formation/dubai-offshore' },
              { label: 'RAK ICC', href: '/business-setup/Offshore-company-formation/rak-icc-offshore' },
              { label: 'Seychelles', href: '/business-setup/Offshore-company-formation/seychelles-offshore' },
              { label: 'Cyprus', href: '/business-setup/Offshore-company-formation/cyprus-offshore' },
              { label: 'Hong Kong', href: '/business-setup/Offshore-company-formation/hong-kong-offshore' },
              { label: 'BVI', href: '/business-setup/Offshore-company-formation/bvi-offshore' },
              { label: 'Ajman Offshore', href: '/business-setup/Offshore-company-formation/ajman-offshore' },
            ].map(i => <Link key={i.href} href={i.href} onClick={closeAll} className="pl-3 text-sm text-white/70 hover:text-amber-400">{i.label}</Link>)}

            <p className="pt-3 text-xs font-bold uppercase tracking-widest text-amber-400/60">Mainland</p>
            {[
              { label: 'Dubai Mainland', href: '/business-setup/mainland-company-formation/dubai-mainland' },
              { label: 'Abu Dhabi Mainland', href: '/business-setup/mainland-company-formation/abu-dhabi-mainland' },
              { label: 'Ajman Mainland', href: '/business-setup/mainland-company-formation/ajman-mainland' },
              { label: 'Fujairah Mainland', href: '/business-setup/mainland-company-formation/fujairah-mainland' },
            ].map(i => <Link key={i.href} href={i.href} onClick={closeAll} className="pl-3 text-sm text-white/70 hover:text-amber-400">{i.label}</Link>)}

            <Link href="/contact" onClick={closeAll} className="pt-3 text-sm font-medium text-white/80 hover:text-amber-400">Contact Us</Link>

            <a
              href="https://wa.me/971503947208"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-xl border border-amber-400 bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-[#3d0a14]"
            >
              +971 503947208
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
