import React from 'react';
import { Page, Project } from '../types';
import { DESIGNER_INFO, SERVICES, PROJECTS } from '../data/portfolioData';
import { HeroDeviceMockup } from '../components/HeroDeviceMockup';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2, Shield, Zap, TrendingUp, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onSelectProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const primaryMailto = `mailto:${DESIGNER_INFO.email}?subject=Let's%20Work%20Together%20-%20New%20Website%20Project`;
  const conversationMailto = `mailto:${DESIGNER_INFO.email}?subject=Project%20Inquiry%20-%20Start%20a%20Conversation`;

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative pt-10 sm:pt-16 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Status Chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-xs text-zinc-300 font-mono shadow-sm shadow-emerald-500/10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Zoe Digital · Website Designer & SEO Specialist</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Websites Designed to Make Your Brand Stand Out.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl"
          >
            I design clean, strategic, and conversion-focused websites that help businesses build credibility, attract the right audience, and turn visitors into customers.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
          >
            <a
              id="hero-primary-cta"
              href={DESIGNER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-400 text-zinc-950 text-sm font-semibold tracking-wide hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-500/25 hover:shadow-emerald-400/40 focus:outline-none"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              id="hero-secondary-cta"
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-zinc-900 border border-white/15 text-white text-sm font-medium tracking-wide hover:bg-zinc-800 hover:border-emerald-500/40 hover:text-emerald-300 transition-all focus:outline-none"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Large Premium Website Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 sm:mt-20"
        >
          <HeroDeviceMockup />
        </motion.div>
      </section>

      {/* 2. TRUST / EXPERTISE SECTION */}
      <section id="trust-section" className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-zinc-900/40 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          {/* Main Experience Metric */}
          <div className="flex items-center gap-5 text-left w-full md:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-white text-zinc-950 flex items-center justify-center font-display font-black text-2xl shadow-lg shrink-0">
              4+
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                4+ Years Experience
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-0.5">
                Specialized in Strategic Web Architecture
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/10" />

          {/* Focus Pillars */}
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-3 sm:gap-4 w-full md:w-auto">
            {DESIGNER_INFO.coreFocus.map((focus) => (
              <div
                key={focus}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/60 border border-white/10 text-xs sm:text-sm font-medium text-zinc-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{focus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services-section" className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Tailored Solutions
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Services & Capabilities
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Comprehensive web design and technical SEO services engineered to convert visitors into loyal clients.
            </p>
          </div>

          <a
            href={primaryMailto}
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
          >
            <span>Inquire About A Service</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* 4. FEATURED WORK SECTION */}
      <section id="featured-work-section" className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Selected Showcase
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Featured Work
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
              A curated look at recent website transformations combining bold visual identity with measurable conversion lift.
            </p>
          </div>

          <button
            id="view-all-projects-header-cta"
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-white/10 hover:border-white/20 text-xs font-medium text-white transition-all self-start sm:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              featuredMode={true}
            />
          ))}
        </div>

        {/* View All Projects Bottom Banner */}
        <div className="pt-4 flex justify-center">
          <button
            id="view-all-projects-bottom-cta"
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-zinc-900/90 border border-white/15 hover:border-white/30 text-sm font-semibold text-white transition-all hover:bg-zinc-800 shadow-lg"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section id="final-cta-section" className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/15 p-10 sm:p-16 md:p-20 overflow-hidden text-center shadow-2xl">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-zinc-300 uppercase tracking-wider">
              Ready to elevate your presence?
            </span>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
              Have a project in mind? Let's build something exceptional.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl mx-auto">
              Tell me what you're working on and let's discuss how I can bring your vision to life.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="home-final-cta"
                href={DESIGNER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-400 text-zinc-950 text-sm font-semibold tracking-wide hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-500/25 hover:shadow-emerald-400/40 focus:outline-none"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${DESIGNER_INFO.email}`}
                className="text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors py-2"
              >
                Direct: {DESIGNER_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
