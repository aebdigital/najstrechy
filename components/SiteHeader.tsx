'use client';

import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';

const navLinks = [
  { href: '/#o-nas', label: 'O nás' },
  { href: '/referencie', label: 'Galéria' },
  { href: '/clanok', label: 'Článok' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header id="site-header" className="site-header fixed top-0 left-0 right-0 z-50 bg-brown/95 backdrop-blur-md border-b border-white/10">
        <div className="site-container flex items-center justify-between py-3 md:min-h-20">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Naj-strecha s.r.o. - úvod">
            <img
              src="/logo.png"
              alt="Naj-strecha s.r.o."
              className="h-9 w-auto max-w-[205px] object-contain md:h-11 md:max-w-[260px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Hlavná navigácia"
            className="hidden md:flex items-center gap-8 text-sm font-extrabold uppercase tracking-[0.1em] text-white/80 md:text-base"
          >
            <Link href="/#o-nas" className="transition-colors hover:text-white">
              O nás
            </Link>

            <div className="services-menu-trigger">
              <Link href="/#tvorba" className="transition-colors hover:text-white" aria-haspopup="true">
                Služby
              </Link>
              <div className="services-megamenu hidden md:block" aria-label="Služby">
                <div className="site-container h-full py-5">
                  <div className="grid h-full grid-cols-7 gap-3">
                    {services.map((service) => (
                      <Link key={service.slug} href={`/sluzby/${service.slug}`} className="mega-service-card group">
                        <img src={service.image} alt="" />
                        <div className="relative z-10 mt-auto p-4 text-left text-white">
                          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                            {service.eyebrow}
                          </span>
                          <span className="block whitespace-normal font-heading text-lg font-bold leading-tight tracking-normal">
                            {service.shortTitle}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Button & Hamburger Wrapper */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <a
                href="tel:+421940776203"
                className="btn-primary shrink-0 !px-4 !py-2.5 text-xs font-semibold uppercase tracking-[0.16em] md:!px-5"
              >
                Zavolať
              </a>
            </div>

            {/* Hamburger Button (Mobile Only) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white hover:bg-white/5 md:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-label="Prepnúť navigáciu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-brown text-white p-6 shadow-2xl transition-transform duration-300 ease-out transform md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <span className="font-heading text-lg font-bold text-white">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white hover:bg-white/5"
            aria-label="Zatvoriť navigáciu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-5 text-base font-bold uppercase tracking-wider">
          <Link href="/#o-nas" className="hover:text-primary transition-colors py-1" onClick={() => setIsMobileMenuOpen(false)}>
            O nás
          </Link>

          <div className="border-t border-b border-white/5 py-3">
            <span className="text-[11px] uppercase tracking-widest text-white/40 block mb-3 font-semibold">Naše Služby</span>
            <div className="flex flex-col gap-3 pl-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/sluzby/${service.slug}`}
                  className="hover:text-primary transition-colors text-sm normal-case font-semibold text-white/80"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="mt-8 border-t border-white/10 pt-6">
            <a
              href="tel:+421940776203"
              className="btn-primary !flex items-center justify-center w-full !py-3 text-sm font-semibold uppercase tracking-wider"
            >
              Zavolať nám
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
