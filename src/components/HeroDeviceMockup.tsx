import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Lock, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export const HeroDeviceMockup: React.FC = () => {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
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
        className="hidden lg:flex absolute -top-5 -left-4 z-20 items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-xl text-xs font-medium"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#108A00] animate-pulse" />
        <span className="text-zinc-600">SEO Strategy:</span>
        <span className="font-mono text-[#108A00] font-bold">100/100 Core Vitals</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden lg:flex absolute -bottom-5 -right-4 z-20 items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-gray-200 shadow-xl"
      >
        <div className="p-1.5 rounded-lg bg-emerald-50 text-[#108A00]">
          <TrendingUp className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] text-zinc-500 font-mono">Conversion Impact</span>
          <span className="text-xs font-bold text-zinc-900 tracking-wide">+84% Organic Bookings</span>
        </div>
      </motion.div>

      {/* Main Browser Mockup Frame */}
      <div className="w-full rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden transition-all duration-300">
        {/* Browser Top Bar */}
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3">
          {/* Window dots */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#108A00]" />
          </div>

          {/* Browser Address Bar */}
          <div className="flex-1 max-w-md mx-auto flex items-center justify-center gap-2 px-3.5 py-1 rounded-lg bg-white border border-gray-200 text-xs text-zinc-700 font-mono shadow-xs">
            <Lock className="w-3 h-3 text-[#108A00]" />
            <span className="truncate">twinsdental.co.uk</span>
            <span className="hidden sm:inline px-2 py-0.2 rounded-full bg-emerald-50 text-[10px] text-[#108A00] font-mono font-semibold border border-emerald-200">
              LIVE
            </span>
          </div>

          {/* Interactive Viewport / Mode Switcher */}
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg border border-gray-200">
            <button
              onClick={() => setViewport('desktop')}
              className={`p-1.5 rounded transition-all ${
                viewport === 'desktop' ? 'bg-white text-[#108A00] shadow-xs' : 'text-zinc-500 hover:text-zinc-900'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`p-1.5 rounded transition-all ${
                viewport === 'tablet' ? 'bg-white text-[#108A00] shadow-xs' : 'text-zinc-500 hover:text-zinc-900'
              }`}
              title="Tablet View"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`p-1.5 rounded transition-all ${
                viewport === 'mobile' ? 'bg-white text-[#108A00] shadow-xs' : 'text-zinc-500 hover:text-zinc-900'
              }`}
              title="Mobile View"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Viewport content area */}
        <div className="bg-gray-50/70 p-3 sm:p-6 flex justify-center items-center min-h-[440px] sm:min-h-[500px]">
          <div
            className={`transition-all duration-500 w-full mx-auto bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col ${
              viewport === 'desktop'
                ? 'max-w-full'
                : viewport === 'tablet'
                ? 'max-w-[560px]'
                : 'max-w-[340px]'
            }`}
          >
            {/* Mock website content header */}
            <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-xs tracking-widest text-zinc-900 uppercase">
                  Lumière
                </span>
                <span className="text-[10px] font-mono text-zinc-500">· Zürich</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-zinc-600">
                <span className="hidden sm:inline hover:text-zinc-900 cursor-pointer transition-colors">Treatments</span>
                <span className="hidden sm:inline hover:text-zinc-900 cursor-pointer transition-colors">Philosophy</span>
                <span className="px-3 py-1 rounded-full bg-[#108A00] text-white font-medium text-[10px]">
                  Book Ritual
                </span>
              </div>
            </div>

            {/* Mock website body */}
            <div className="p-5 sm:p-7 flex flex-col gap-6 bg-white">
              {/* Mini editorial hero banner */}
              <div className="relative rounded-xl overflow-hidden border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 p-6 sm:p-8">
                <div className="flex flex-col gap-3 max-w-md">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white border border-emerald-200 text-[#108A00] text-[10px] font-mono tracking-wider uppercase font-semibold">
                      Bespoke Clinical Care
                    </span>
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight leading-tight">
                    Where Biometric Precision Meets Quiet Luxury.
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Custom tailored skin longevity rituals formulated by leading European dermatologists in Zurich.
                  </p>
                </div>
              </div>

              {/* Interactive treatment selector */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-zinc-500 uppercase tracking-wider text-[10px]">
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
                            ? 'bg-emerald-50/70 border-[#108A00] shadow-xs'
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-zinc-900 truncate">{r.name}</span>
                          <span className="text-[11px] font-mono text-[#108A00] font-bold">{r.price}</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 mt-1 truncate">{r.focus}</p>
                        <span className="text-[9px] font-mono text-zinc-400 mt-1.5 block">{r.duration}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Technical Spec & SEO stats bar */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 text-center">
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="font-mono text-xs font-bold text-[#108A00]">99 / 100</div>
                  <div className="text-[10px] text-zinc-500">Google Lighthouse</div>
                </div>
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="font-mono text-xs font-bold text-zinc-900">0.48s</div>
                  <div className="text-[10px] text-zinc-500">LCP Speed</div>
                </div>
                <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="font-mono text-xs font-bold text-zinc-900">Wix Studio</div>
                  <div className="text-[10px] text-zinc-500">Fluid Responsive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
