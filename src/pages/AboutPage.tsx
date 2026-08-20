import React from 'react';
import { DESIGNER_INFO, SKILLS_LIST } from '../data/portfolioData';
import { ProcessSection } from '../components/ProcessSection';
import { ArrowUpRight, Mail, CheckCircle2, Award, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutPage: React.FC = () => {
  const contactMailto = `mailto:${DESIGNER_INFO.email}?subject=Let's%20Build%20Your%20Next%20Website`;

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 max-w-7xl mx-auto px-6 sm:px-8">
      {/* 1. ABOUT SECTION */}
      <section id="about-hero" className="pt-10 sm:pt-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline & Studio Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-emerald-500/30 text-xs font-mono text-zinc-300 shadow-sm shadow-emerald-500/10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>About Zoe Digital · Independent Studio</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.12]"
              >
                {DESIGNER_INFO.bioHeadline}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-5 text-base sm:text-lg text-zinc-300 font-light leading-relaxed"
            >
              {DESIGNER_INFO.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </motion.div>

            {/* Core Values / Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Strategic Craftsmanship</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Every button, typeface, and layout decision is driven by your commercial conversion goals.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Built-in Search Dominance</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Technical SEO, schema markup, and speed optimization baked in natively from day one.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Card & Portrait Artifact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/15 space-y-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="space-y-0.5">
                  <h3 className="font-display text-lg font-bold text-white">
                    Zoe Digital
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    Website Designer & SEO Specialist
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-emerald-500/30 flex items-center justify-center font-display font-bold text-sm text-emerald-400 shadow-sm shadow-emerald-500/10">
                  ZD
                </div>
              </div>

              {/* Fast Stats List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-zinc-400 font-mono">Experience</span>
                  <span className="text-white font-medium">4+ Years Active Studio Practice</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-zinc-400 font-mono">Primary Focus</span>
                  <span className="text-white font-medium">Wix Studio, Shopify, Webflow & SEO</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                  <span className="text-zinc-400 font-mono">Approach</span>
                  <span className="text-white font-medium">1-on-1 Bespoke Engagement</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2">
                  <span className="text-zinc-400 font-mono">Availability</span>
                  <span className="text-emerald-400 font-mono font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
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
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-400 text-zinc-950 text-xs font-semibold tracking-wide hover:bg-emerald-300 transition-all text-center shadow-md shadow-emerald-500/20"
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
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Technical & Design Tooling
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Expertise & Capabilities
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
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
              className="p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all flex items-center gap-3 group hover:bg-zinc-900/80"
            >
              <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
              <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white tracking-wide">
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
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900 via-[#14161b] to-zinc-950 border border-white/15 p-10 sm:p-16 md:p-20 overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-zinc-300 uppercase tracking-wider">
              Initiate A Project
            </span>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Let's Build Your Next Website.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl mx-auto">
              Have an idea, an existing website that needs improvement, or a new business that needs a strong online presence? I'd love to hear about it.
            </p>

            <div className="pt-4 flex flex-col items-center justify-center gap-5">
              {/* Primary CTA button leading to email */}
              <a
                id="contact-send-email-cta"
                href={contactMailto}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-400 text-zinc-950 text-sm font-semibold tracking-wide hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-500/25 hover:shadow-emerald-400/40 focus:outline-none"
              >
                <span>Send Me an Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Clickable raw email address */}
              <div className="flex items-center gap-2 pt-2 text-zinc-400 hover:text-emerald-400 transition-colors">
                <Mail className="w-4 h-4" />
                <a
                  id="contact-email-text-link"
                  href={`mailto:${DESIGNER_INFO.email}`}
                  className="font-mono text-sm sm:text-base underline underline-offset-4 decoration-emerald-500/40 hover:decoration-emerald-400 transition-all text-zinc-200"
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
