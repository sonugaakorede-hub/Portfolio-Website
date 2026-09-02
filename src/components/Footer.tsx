import React from 'react';
import { Page } from '../types';
import { DESIGNER_INFO } from '../data/portfolioData';
import { Logo } from './Logo';
import { ArrowUpRight, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const mailtoLink = `mailto:${DESIGNER_INFO.email}?subject=Project%20Inquiry%20-%20Website%20Design%20%26%20SEO`;

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-gray-50 border-t border-gray-200 text-zinc-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-gray-200">
          {/* Identity column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group focus:outline-none self-start"
            >
              <Logo size="lg" />
            </button>
            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
              Crafting bespoke, high-converting digital flagships and authoritative SEO frameworks for ambitious brands worldwide.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">Navigation</span>
            <div className="flex flex-col gap-2.5">
              <button
                id="footer-nav-home"
                onClick={() => handleNavClick('home')}
                className="text-left text-sm text-zinc-600 hover:text-[#108A00] transition-colors focus:outline-none"
              >
                Home
              </button>
              <button
                id="footer-nav-portfolio"
                onClick={() => handleNavClick('portfolio')}
                className="text-left text-sm text-zinc-600 hover:text-[#108A00] transition-colors focus:outline-none"
              >
                Portfolio & Selected Work
              </button>
              <button
                id="footer-nav-about"
                onClick={() => handleNavClick('about')}
                className="text-left text-sm text-zinc-600 hover:text-[#108A00] transition-colors focus:outline-none"
              >
                About & Expertise
              </button>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">Direct Inquiries</span>
            <div className="flex flex-col gap-3">
              <a
                id="footer-email-link"
                href={mailtoLink}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-white border border-gray-200 hover:border-[#108A00] transition-all text-sm text-zinc-800 shadow-xs hover:shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#108A00]" />
                  <span className="font-mono text-xs text-zinc-700">{DESIGNER_INFO.email}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#108A00] transition-colors" />
              </a>

              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-[#108A00] animate-pulse" />
                <span>Response time: typically within 24 business hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p id="footer-copyright">
            © 2026 {DESIGNER_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Website Design • SEO • Responsive Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
