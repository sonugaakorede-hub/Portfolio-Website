import React from 'react';
import { Page } from '../types';
import { DESIGNER_INFO } from '../data/portfolioData';
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
    <footer id="main-footer" className="bg-[#090a0d] border-t border-white/10 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Identity column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-display font-bold text-sm shadow-sm shadow-emerald-500/10">
                ZD
              </div>
              <span className="font-display text-lg font-bold text-white tracking-tight">
                {DESIGNER_INFO.name}
              </span>
            </div>
            <p className="text-sm text-zinc-300 font-medium tracking-wide">
              {DESIGNER_INFO.role}
            </p>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Crafting bespoke, high-converting digital flagships and authoritative SEO frameworks for ambitious brands worldwide.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Navigation</span>
            <div className="flex flex-col gap-2.5">
              <button
                id="footer-nav-home"
                onClick={() => handleNavClick('home')}
                className="text-left text-sm text-zinc-300 hover:text-white transition-colors focus:outline-none"
              >
                Home
              </button>
              <button
                id="footer-nav-portfolio"
                onClick={() => handleNavClick('portfolio')}
                className="text-left text-sm text-zinc-300 hover:text-white transition-colors focus:outline-none"
              >
                Portfolio & Selected Work
              </button>
              <button
                id="footer-nav-about"
                onClick={() => handleNavClick('about')}
                className="text-left text-sm text-zinc-300 hover:text-white transition-colors focus:outline-none"
              >
                About & Expertise
              </button>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Direct Inquiries</span>
            <div className="flex flex-col gap-3">
              <a
                id="footer-email-link"
                href={mailtoLink}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/90 border border-white/10 hover:border-white/20 transition-all text-sm text-white"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  <span className="font-mono text-xs">{DESIGNER_INFO.email}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </a>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Response time: typically within 24 business hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
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
