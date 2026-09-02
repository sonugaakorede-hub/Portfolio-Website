import React from 'react';
import { DESIGNER_INFO, SKILLS_LIST } from '../data/portfolioData';
import { ProcessSection } from '../components/ProcessSection';
import { Logo } from '../components/Logo';
import { ArrowUpRight, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24 max-w-7xl mx-auto px-6 sm:px-8">
      {/* 1. ABOUT SECTION */}
      <section id="about-hero" className="pt-12 sm:pt-18 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline & Studio Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-[#108A00] font-semibold shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-[#108A00]" />
                <span>About Zoe Digitals</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.12]"
              >
                {DESIGNER_INFO.bioHeadline}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-5 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
            >
              {DESIGNER_INFO.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </motion.div>

            {/* Core Values / Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-white border border-gray-200 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-zinc-900 font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Strategic Craftsmanship</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Every button, typeface, and layout decision is driven by your commercial conversion goals.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-gray-200 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-zinc-900 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#108A00]" />
                  <span>Built-in Search Dominance</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Technical SEO, schema markup, and speed optimization baked in natively from day one.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <Logo size="lg" />
              </div>

              {/* Fast Stats List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs py-2 border-b border-gray-100">
                  <span className="text-zinc-500 font-mono">Experience</span>
                  <span className="text-zinc-900 font-medium">4+ Years Active Studio Practice</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-gray-100">
                  <span className="text-zinc-500 font-mono">Primary Focus</span>
                  <span className="text-zinc-900 font-medium">Wix Studio, Shopify, Webflow &amp; SEO</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-gray-100">
                  <span className="text-zinc-500 font-mono">Approach</span>
                  <span className="text-zinc-900 font-medium">1-on-1 Bespoke Engagement</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2">
                  <span className="text-zinc-500 font-mono">Availability</span>
                  <span className="text-[#108A00] font-mono font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#108A00] animate-pulse" />
                    Accepting Select Clients
                  </span>
                </div>
              </div>

              {/* Direct Fast CTA */}
              <div className="pt-2">
                <a
                  href={DESIGNER_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#108A00] text-white text-xs font-semibold tracking-wide hover:bg-[#14A800] transition-all text-center shadow-md shadow-emerald-700/20 hover:shadow-lg"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPERTISE & SKILLS SECTION */}
      <section id="expertise-section" className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#108A00] font-semibold">
            Technical &amp; Design Tooling
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Expertise &amp; Capabilities
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
            Proficiency across premier modern web platforms, search engines, and conversion design disciplines.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
          {SKILLS_LIST.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 hover:border-[#108A00] transition-all flex items-center gap-3 group hover:shadow-md"
            >
              <div className="w-2 h-2 rounded-full bg-[#108A00] group-hover:scale-125 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-zinc-800 group-hover:text-[#108A00] tracking-wide">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section id="process-section" className="pt-4">
        <ProcessSection />
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact-section" className="pt-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#F2F9F2] via-white to-[#EAF5EB] border border-emerald-200 p-10 sm:p-16 md:p-20 overflow-hidden shadow-lg">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-xs font-mono text-[#108A00] uppercase tracking-wider font-semibold">
              Initiate A Project
            </span>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.1]">
              Let's Build Your Next Website.
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-xl mx-auto">
              Have an idea, an existing website that needs improvement, or a new business that needs a strong online presence? I'd love to hear about it.
            </p>

            <div className="pt-4 flex flex-col items-center justify-center gap-5">
              {/* Primary CTA button leading to WhatsApp */}
              <a
                id="contact-send-email-cta"
                href={DESIGNER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#108A00] text-white text-sm font-semibold tracking-wide hover:bg-[#14A800] transition-all shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/35 focus:outline-none"
              >
                <span>Request a quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Clickable raw email address */}
              <div className="flex items-center gap-2 pt-2 text-zinc-500 hover:text-[#108A00] transition-colors">
                <Mail className="w-4 h-4 text-[#108A00]" />
                <a
                  id="contact-email-text-link"
                  href={`mailto:${DESIGNER_INFO.email}`}
                  className="font-mono text-sm sm:text-base underline underline-offset-4 decoration-emerald-500/40 hover:decoration-[#108A00] transition-all text-zinc-700 hover:text-[#108A00]"
                >
                  {DESIGNER_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
