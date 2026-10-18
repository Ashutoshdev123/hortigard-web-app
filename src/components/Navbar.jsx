import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, CalendarCheck } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Why Hortigard', href: '#why-us' },
  { label: 'Our Work', href: '#services' },
  { label: 'Service Plans', href: '#pricing' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact Us', href: '#contact' },
];

const PHONE_DISPLAY = '+91 92050 30252';
const PHONE_LINK = 'tel:+919205030252';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar becomes slightly more solid once the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (event, href, closeMobileMenu = false) => {
    event.preventDefault();
    const menuWasOpen = closeMobileMenu && mobileMenuOpen;
    if (closeMobileMenu) closeMenu();

    const navigateToTarget = () => {
      const target = href === '#home' ? document.documentElement : document.querySelector(href);
      if (!target) return;

      window.history.pushState(null, '', href);
      if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const navHeight = document.querySelector('nav')?.getBoundingClientRect().height ?? 88;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    };

    // Let the mobile menu finish collapsing before measuring the target position.
    window.setTimeout(navigateToTarget, menuWasOpen ? 320 : 0);
  };

  return (
    <nav
      className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-[#082A18] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]'
          : 'border-white/5 bg-[#0A3320]/95'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center sm:h-[88px] justify-between gap-6">
          {/* Logo & Brand */}
          <a href="#home" aria-label="Hortigard home" className="flex shrink-0 items-center gap-2.5 sm:gap-3" onClick={(event) => handleNavClick(event, '#home', true)}>
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.55)] ring-1 ring-white/50 sm:h-12 sm:w-12">
              <img
                src="/logo.png"
                alt=""
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-[62px] w-[68px] max-w-none -translate-x-1/2 object-fill"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-[1.65rem]">
                Horti<span className="text-[#A6E22E]">gard</span>
              </div>
              <p className="mt-1 hidden text-[9px] font-medium tracking-[0.045em] text-[#A9C9B0] sm:block">
                Greener today, better tomorrow
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-[#D6EBCB] transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A6E22E]/60"
              >
                {link.label}
                <span className="absolute inset-x-3.5 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-[#A6E22E] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={PHONE_LINK}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#D6EBCB] transition hover:bg-white/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A6E22E]/60"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => onOpenBooking('Free Visit')}
              className="inline-flex items-center gap-2 rounded-full bg-[#A6E22E] px-5 py-2.5 text-sm font-bold text-[#0B1A00] shadow-[0_8px_24px_-8px_rgba(166,226,46,0.6)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#B5EE40] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#A6E22E]/40 active:scale-[0.98]"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Free Visit
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A6E22E]/60 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (smooth open/close) */}
      <div
        className={`grid transition-all duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className={`overflow-hidden ${mobileMenuOpen ? 'visible' : 'invisible'}`}>
          <div className="border-t border-white/10 bg-[#082A18] px-5 pb-6 pt-3">
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href, true)}
                  className="rounded-xl px-3 py-3.5 text-base font-medium text-[#D6EBCB] transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-5">
              <a
                href={PHONE_LINK}
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-[#A6E22E]" />
                {PHONE_DISPLAY}
              </a>
              <button
                onClick={() => {
                  closeMenu();
                  onOpenBooking('Free Visit Mobile');
                }}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#A6E22E] text-base font-bold text-[#0B1A00] shadow-[0_8px_24px_-8px_rgba(166,226,46,0.6)] transition active:scale-[0.98]"
              >
                <CalendarCheck className="h-5 w-5" />
                Book Free Site Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
