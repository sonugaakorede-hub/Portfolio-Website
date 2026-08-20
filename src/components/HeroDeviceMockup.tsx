import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Lock, Sparkles, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const HeroDeviceMockup: React.FC = () => {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'preview' | 'seo' | 'performance'>('preview');
  const [selectedRitual, setSelectedRitual] = useState<number>(0);

  const rituals = [
    { name: 'Cellular Reset', duration: '75 min', focus: 'Biomimetic Peptides & Cryo', price: '$340' },
    { name: 'Hydra-Sculpt Infusion', duration: '90 min', focus: 'Deep Lymphatic & Ultrasound', price: '$420' },
    { name: 'Radiance Monograph', duration: '60 min', focus: 'Botanical Resurfacing', price: '$290' },
  ];

  return (
    <div className="relative w-full mx-auto">
      {/* Floating Accent Badges around mockup */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="hidden lg:flex absolute -top-5 -left-4 z-20 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-900/95 border border-white/15 backdrop-blur-md shadow-2xl text-xs font-medium"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-zinc-300">SEO Strategy:</span>
        <span className="font-mono text-emerald-400 font-semibold">100/100 Core Vitals</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden lg:flex absolute -bottom-5 -right-4 z-20 items-center gap-3 px-4 py-2.5 rounded-xl bg-zinc-900/95 border border-white/15 backdrop-blur-md shadow-2xl"
      >
        <div className="p-1.5 rounded-lg bg-white/10 text-white">
          <TrendingUp className="w-3.5 h-3.5" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] text-zinc-400 font-mono">Conversion Impact</span>
          <span className="text-xs font-bold text-white tracking-wide">+84% Organic Bookings</span>
        </div>
      </motion.div>

      {/* Main Browser Mockup Frame */}
      <div className="w-full rounded-2xl bg-zinc-950/90 border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300">
        {/* Browser Top Bar */}
        <div className="px-4 py-3 bg-zinc-900/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          {/* Window dots */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80 border border-[#e0443e]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 border border-[#dea123]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]/80 border border-[#1aab29]" />
          </div>

          {/* Browser Address Bar */}
          <div className="flex-1 max-w-md mx-auto flex items-center justify-center gap-2 px-3 py-1 rounded-lg bg-zinc-950/80 border border-white/10 text-xs text-zinc-300 font-mono">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span className="truncate">twinsdental.co.uk</span>
            <span className="hidden sm:inline px-1.5 py-0.2 rounded bg-emerald-400/20 text-[10px] text-emerald-300 font-mono">LIVE</span>
          </div>

          {/* Interactive Viewport / Mode Switcher */}
          <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setViewport('desktop')}
              className={`p-1.5 rounded transition-all ${
                viewport === 'desktop' ? 'bg-white/20 text-white' : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`p-1.5 rounded transition-all ${
                viewport === 'tablet' ? 'bg-white/20 text-white' : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Tablet View"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`p-1.5 rounded transition-all ${
                viewport === 'mobile' ? 'bg-white/20 text-white' : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Viewport content area */}
        <div className="bg-[#121316] p-3 sm:p-6 flex justify-center items-center min-h-[440px] sm:min-h-[500px]">
          <div
            className={`transition-all duration-500 w-full mx-auto bg-[#0d0e11] rounded-xl border border-white/10 overflow-hidden shadow-inner flex flex-col ${
              viewport === 'desktop'
                ? 'max-w-full'
                : viewport === 'tablet'
                ? 'max-w-[560px]'
                : 'max-w-[340px]'
            }`}
          >
            {/* Mock website content header */}
            <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between bg-zinc-950/60">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-xs tracking-widest text-white uppercase">
                  Lumière
                </span>
                <span className="text-[10px] font-mono text-zinc-400">· Zürich</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-zinc-300">
                <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">Treatments</span>
                <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">Philosophy</span>
                <span className="px-2.5 py-1 rounded bg-white text-zinc-950 font-medium text-[10px]">
                  Book Ritual
                </span>
              </div>
            </div>

            {/* Mock website body */}
            <div className="p-5 sm:p-7 flex flex-col gap-6">
              {/* Mini editorial hero banner */}
              <div className="relative rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900 via-[#18191e] to-zinc-900 p-6 sm:p-8">
                <div className="flex flex-col gap-3 max-w-md">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-mono tracking-wider uppercase">
                      Bespoke Clinical Care
                    </span>
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    Where Biometric Precision Meets Quiet Luxury.
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Custom tailored skin longevity rituals formulated by leading European dermatologists in Zurich.
                  </p>
                </div>
              </div>

              {/* Interactive treatment selector */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-zinc-400 uppercase tracking-wider text-[10px]">
                    Featured Clinical Protocols
                  </span>
                  <span className="text-zinc-400 text-[10px]">Click to inspect details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {rituals.map((r, idx) => {
                    const isSelected = selectedRitual === idx;
                    return (
                      <button
                        key={r.name}
                        onClick={() => setSelectedRitual(idx)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          isSelected
                            ? 'bg-zinc-900 border-white/30 shadow-md'
                            : 'bg-zinc-950/60 border-white/5 hover:border-white/15'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white truncate">{r.name}</span>
                          <span className="text-[11px] font-mono text-zinc-300 font-medium">{r.price}</span>
                        </div>
                        <p className="text-[10px] text-zinc-400 mt-1 truncate">{r.focus}</p>
                        <span className="text-[9px] font-mono text-zinc-400 mt-1.5 block">{r.duration}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Technical Spec & SEO stats bar */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center">
                <div className="p-2 rounded bg-zinc-950/60 border border-white/5">
                  <div className="font-mono text-xs font-bold text-emerald-400">99 / 100</div>
                  <div className="text-[10px] text-zinc-400">Google Lighthouse</div>
                </div>
                <div className="p-2 rounded bg-zinc-950/60 border border-white/5">
                  <div className="font-mono text-xs font-bold text-white">0.48s</div>
                  <div className="text-[10px] text-zinc-400">LCP Speed</div>
                </div>
                <div className="p-2 rounded bg-zinc-950/60 border border-white/5">
                  <div className="font-mono text-xs font-bold text-white">Wix Studio</div>
                  <div className="text-[10px] text-zinc-400">Fluid Responsive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
