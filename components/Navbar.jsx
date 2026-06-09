'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [businessOpen, setBusinessOpen] = useState(false);
  const [freezoneOpen, setFreezeOpen] = useState(false);
  const [dubaiOpen, setDubaiOpen] = useState(false);
  const [abuDhabiOpen, setAbuDhabiOpen] = useState(false);
  const [offshoreOpen, setOffshoreOpen] = useState(false);
  const [mainlandOpen, setMainlandOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);

  // close all timers to prevent flicker
  const closeTimers = useRef({});

  function delayedClose(key, fn, delay = 150) {
    closeTimers.current[key] = setTimeout(fn, delay);
  }
  function cancelClose(key) {
    clearTimeout(closeTimers.current[key]);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) closeAll();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  function closeAll() {
    setBusinessOpen(false);
    setFreezeOpen(false);
    setDubaiOpen(false);
    setAbuDhabiOpen(false);
    setOffshoreOpen(false);
    setMainlandOpen(false);
    setMobileOpen(false);
  }

  const goldBar = { height: '4px', background: 'linear-gradient(to right, #C9A84C, #e0c070, #C9A84C)' };
  const chevronR = (
    <svg className="ml-auto h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 bg-[#3d0a14] transition-shadow duration-300 ${scrolled ? 'shadow-2xl' : 'shadow-lg'}`}
    >
      <div style={{ height: '2px', background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" onClick={closeAll} className="shrink-0 text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors duration-200">
          Elevate<span className="text-amber-400">biz</span>360
        </Link>

        {/* Desktop Nav */}
        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">

          <Link href="/" onClick={closeAll} className="text-sm font-medium text-white hover:text-amber-400 transition-colors duration-200">
            Home
          </Link>

          {/* Business Setup — the key is pt-2 padding on the dropdown so there's no gap */}
          <div
            className="relative"
            onMouseEnter={() => { cancelClose('business'); setBusinessOpen(true); }}
            onMouseLeave={() => delayedClose('business', () => {
              setBusinessOpen(false);
              setFreezeOpen(false);
              setDubaiOpen(false);
              setAbuDhabiOpen(false);
              setOffshoreOpen(false);
              setMainlandOpen(false);
            })}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-white hover:text-amber-400 transition-colors duration-200">
              Business Setup
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {businessOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                <div className="w-56 overflow-visible rounded-2xl border border-amber-200 bg-white shadow-2xl">
                  <div style={goldBar} />

                  {/* Freezone */}
                  <div
                    className="relative"
                    onMouseEnter={() => { cancelClose('fz'); setFreezeOpen(true); setOffshoreOpen(false); setMainlandOpen(false); setDubaiOpen(false); setAbuDhabiOpen(false); }}
                    onMouseLeave={() => delayedClose('fz', () => { setFreezeOpen(false); setDubaiOpen(false); setAbuDhabiOpen(false); })}
                  >
                    <button className="flex w-full items-center px-4 py-3 text-sm font-semibold text-[#3d0a14] hover:bg-amber-50 transition-colors duration-150">
                      Freezone Company Formation {chevronR}
                    </button>

                    {freezoneOpen && (
                      <div className="absolute left-full top-0 z-50 pl-1">
                        <div className="w-56 overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-2xl">
                          <div style={goldBar} />

                          {/* Dubai */}
                          <div
                            className="relative"
                            onMouseEnter={() => { cancelClose('dxb'); setDubaiOpen(true); setAbuDhabiOpen(false); }}
                            onMouseLeave={() => delayedClose('dxb', () => setDubaiOpen(false))}
                          >
                            <Link href="/business-setup/freezone-company-formation/dubai-freezone" onClick={closeAll} className="flex w-full items-center px-4 py-3 text-sm font-semibold text-[#3d0a14] hover:bg-amber-50 transition-colors duration-150">
                              Dubai Free Zone Overview {chevronR}
                            </Link>
                            {dubaiOpen && (
                              <div className="absolute left-full top-0 z-50 pl-1">
                                <div className="w-56 overflow-visible rounded-2xl border border-amber-200 bg-white shadow-2xl">
                                  <div style={goldBar} />
                                  {[
                                    ['JAFZA Freezone',           '/business-setup/freezone-company-formation/dubai-freezone/jafza-freezone'],
                                    ['IFZA Freezone',            '/business-setup/freezone-company-formation/dubai-freezone/ifza-freezone'],
                                    ['DMCC Free Zone',           '/business-setup/freezone-company-formation/dubai-freezone/dmcc-freezone'],
                                    ['MEYDAN Freezone',          '/business-setup/freezone-company-formation/dubai-freezone/meydan-freezone'],
                                    ['Dubai World Trade Centre', '/business-setup/freezone-company-formation/dubai-freezone/dubai-world-trade-centre'],
                                    ['DIFC Free Zone',           '/business-setup/freezone-company-formation/dubai-freezone/difc-free-zone'],
                                    ['Dubai South Freezone',     '/business-setup/freezone-company-formation/dubai-freezone/dubai-south-freezone'],
                                  ].map(([label, href]) => (
                                    <Link key={href} href={href} onClick={closeAll} className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-800 transition-colors duration-150">{label}</Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Abu Dhabi */}
                          <div
                            className="relative"
                            onMouseEnter={() => { cancelClose('ad'); setAbuDhabiOpen(true); setDubaiOpen(false); }}
                            onMouseLeave={() => delayedClose('ad', () => setAbuDhabiOpen(false))}
                          >
                            <Link href="/business-setup/freezone-company-formation/abu-dhabi-freezone" onClick={closeAll} className="flex w-full items-center px-4 py-3 text-sm font-semibold text-[#3d0a14] hover:bg-amber-50 transition-colors duration-150">
                              Abu Dhabi Free Zone Overview {chevronR}
                            </Link>
                            {abuDhabiOpen && (
                              <div className="absolute left-full top-0 z-50 pl-1">
                                <div className="w-56 overflow-visible rounded-2xl border border-amber-200 bg-white shadow-2xl">
                                  <div style={goldBar} />
                                  {[
                                    ['ADGM – Abu Dhabi Global Market', '/business-setup/freezone-company-formation/abu-dhabi-freezone/adgm-freezone'],
                                    ['KIZAD – Khalifa Industrial Zone', '/business-setup/freezone-company-formation/abu-dhabi-freezone/kizad-freezone'],
                                  ].map(([label, href]) => (
                                    <Link key={href} href={href} onClick={closeAll} className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-800 transition-colors duration-150">{label}</Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* General freezones */}
                          <div style={{ borderTop: '1px solid #fde68a' }} />
                          {[
                            ['Ajman Freezone',         '/business-setup/freezone-company-formation/ajman-freezone'],
                            ['Fujairah Creative City', '/business-setup/freezone-company-formation/fujairah-creative-city-freezone'],
                            ['SHAMS Freezone',         '/business-setup/freezone-company-formation/shams-freezone'],
                            ['RAKEZ Freezone',         '/business-setup/freezone-company-formation/rakez-freezone'],
                          ].map(([label, href]) => (
                            <Link key={href} href={href} onClick={closeAll} className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-800 transition-colors duration-150">{label}</Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Offshore */}
                  <div
                    className="relative"
                    onMouseEnter={() => { cancelClose('off'); setOffshoreOpen(true); setFreezeOpen(false); setMainlandOpen(false); setDubaiOpen(false); setAbuDhabiOpen(false); }}
                    onMouseLeave={() => delayedClose('off', () => setOffshoreOpen(false))}
                  >
                    <button className="flex w-full items-center px-4 py-3 text-sm font-semibold text-[#3d0a14] hover:bg-amber-50 transition-colors duration-150">
                      Offshore Company Formation {chevronR}
                    </button>
                    {offshoreOpen && (
                      <div className="absolute left-full top-0 z-50 pl-1">
                        <div className="w-56 overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-2xl">
                          <div style={goldBar} />
                          {[
                            ['Dubai Offshore (JAFZA)', '/business-setup/Offshore-company-formation/dubai-offshore'],
                            ['RAK ICC Offshore',       '/business-setup/Offshore-company-formation/rak-icc-offshore'],
                            ['Seychelles Offshore',    '/business-setup/Offshore-company-formation/seychelles-offshore'],
                            ['Cyprus Offshore',        '/business-setup/Offshore-company-formation/cyprus-offshore'],
                            ['Hong Kong Offshore',     '/business-setup/Offshore-company-formation/hong-kong-offshore'],
                            ['BVI Offshore',           '/business-setup/Offshore-company-formation/bvi-offshore'],
                            ['Ajman Offshore',         '/business-setup/Offshore-company-formation/ajman-offshore'],
                          ].map(([label, href]) => (
                            <Link key={href} href={href} onClick={closeAll} className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-800 transition-colors duration-150">{label}</Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mainland */}
                  <div
                    className="relative"
                    onMouseEnter={() => { cancelClose('ml'); setMainlandOpen(true); setFreezeOpen(false); setOffshoreOpen(false); setDubaiOpen(false); setAbuDhabiOpen(false); }}
                    onMouseLeave={() => delayedClose('ml', () => setMainlandOpen(false))}
                  >
                    <button className="flex w-full items-center px-4 py-3 text-sm font-semibold text-[#3d0a14] hover:bg-amber-50 transition-colors duration-150">
                      Mainland Company Formation {chevronR}
                    </button>
                    {mainlandOpen && (
                      <div className="absolute left-full top-0 z-50 pl-1">
                        <div className="w-56 overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-2xl">
                          <div style={goldBar} />
                          {[
                            ['Dubai Mainland',     '/business-setup/mainland-company-formation/dubai-mainland'],
                            ['Abu Dhabi Mainland', '/business-setup/mainland-company-formation/abu-dhabi-mainland'],
                            ['Ajman Mainland',     '/business-setup/mainland-company-formation/ajman-mainland'],
                            ['Fujairah Mainland',  '/business-setup/mainland-company-formation/fujairah-mainland'],
                          ].map(([label, href]) => (
                            <Link key={href} href={href} onClick={closeAll} className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-800 transition-colors duration-150">{label}</Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            )}
          </div>

          <Link href="/contact" onClick={closeAll} className="text-sm font-medium text-white hover:text-amber-400 transition-colors duration-200">
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

      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)' }} />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-[#2d0710] px-6 py-5 md:hidden" style={{ borderTop: '1px solid rgba(201,168,76,0.2)' }}>
          <div className="flex flex-col gap-2.5">
            <Link href="/" onClick={closeAll} className="text-sm font-medium text-white hover:text-amber-400">Home</Link>
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
                <p className="mb-1 mt-3 text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(201,168,76,0.7)' }}>{heading}</p>
                {links.map(([label, href]) => (
                  <Link key={href} href={href} onClick={closeAll} className="block py-1 pl-3 text-sm text-white hover:text-amber-400" style={{ opacity: 0.8 }}>{label}</Link>
                ))}
              </div>
            ))}
            <Link href="/contact" onClick={closeAll} className="mt-3 text-sm font-medium text-white hover:text-amber-400">Contact Us</Link>
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
