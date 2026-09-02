import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { DESIGNER_INFO } from '../data/portfolioData';
import { Logo } from './Logo';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'About', page: 'about' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mailtoLink = `mailto:${DESIGNER_INFO.email}?subject=Project%20Inquiry%20-%20Website%20Design%20%26%20SEO`;

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3.5 shadow-sm'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          id="nav-brand-logo"
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left group focus:outline-none"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-100/90 p-1.5 rounded-full border border-gray-200/80">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                id={`nav-link-${item.page}`}
                onClick={() => handleNavClick(item.page)}
                className={`relative px-5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'text-[#108A00] font-semibold'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-gray-200/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white shadow-sm border border-gray-200/80 rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#108A00] animate-pulse" />
            <span>Available</span>
          </div>
          <a
            id="nav-cta-talk"
            href={DESIGNER_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#108A00] text-white text-xs font-semibold tracking-wide hover:bg-[#14A800] transition-all shadow-sm shadow-emerald-700/20 hover:shadow-md hover:shadow-emerald-700/30 focus:outline-none"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-700 hover:text-zinc-950 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    id={`mobile-nav-link-${item.page}`}
                    onClick={() => handleNavClick(item.page)}
                    className={`flex items-center justify-between p-3 rounded-xl text-left font-display text-sm tracking-wide transition-all ${
                      isActive
                        ? 'bg-emerald-50 text-[#108A00] font-semibold border border-emerald-100'
                        : 'text-zinc-700 hover:text-[#108A00] hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-[#108A00]" />}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#108A00] animate-pulse" />
                  <span>Available for New Projects</span>
                </div>
                <a
                  id="mobile-nav-cta-talk"
                  href={DESIGNER_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#108A00] text-white text-sm font-semibold tracking-wide hover:bg-[#14A800] transition-all text-center shadow-md shadow-emerald-700/20"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
