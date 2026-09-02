import React from 'react';
import { Page, Project } from '../types';
import { DESIGNER_INFO, SERVICES, PROJECTS } from '../data/portfolioData';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { TestimonialsSlider } from '../components/TestimonialsSlider';
import heroShowcaseImg from '../assets/images/hero_showcase_image_1788381713876.jpg';
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onSelectProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const primaryMailto = `mailto:${DESIGNER_INFO.email}?subject=Let's%20Work%20Together%20-%20New%20Website%20Project`;

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative pt-12 sm:pt-18 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Status Chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-[#108A00] font-mono font-semibold shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#108A00] animate-pulse" />
            <span>Zoe Digitals · Website Designer & SEO Specialist</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.08]"
          >
            Websites Designed to Make Your Brand Stand Out.
          </motion.h1>

          {/* Supporting Text (Montserrat) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl"
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#108A00] text-white text-sm font-semibold tracking-wide hover:bg-[#14A800] transition-all shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/35 focus:outline-none"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              id="hero-secondary-cta"
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-300 text-zinc-800 text-sm font-medium tracking-wide hover:bg-emerald-50/60 hover:border-[#108A00] hover:text-[#108A00] transition-all focus:outline-none shadow-xs"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Hero Visual Showcase Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mt-12 sm:mt-18 w-full max-w-5xl mx-auto"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/15 via-emerald-400/10 to-[#108A00]/15 rounded-3xl blur-2xl opacity-75 pointer-events-none" />

          {/* Image Showcase Card */}
          <div className="relative rounded-2xl sm:rounded-3xl border border-gray-200/90 bg-white overflow-hidden shadow-2xl shadow-emerald-950/10">
            {/* Top Minimalist Header */}
            <div className="h-10 sm:h-11 bg-gray-50 border-b border-gray-200/80 px-4 sm:px-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB] border border-gray-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB] border border-gray-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB] border border-gray-300" />
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-md bg-white border border-gray-200 text-[11px] font-mono text-zinc-600 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#108A00] animate-pulse" />
                <span>zoedigitals.com · Digital Flagship Showcase</span>
              </div>
              <div className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 hidden sm:block font-medium">
                100/100 Core Web Vitals
              </div>
            </div>

            {/* Actual Hero Image Container */}
            <div className="relative aspect-[16/9] sm:aspect-[21/10] overflow-hidden bg-zinc-950">
              <img
                src={heroShowcaseImg}
                alt="Zoe Digitals high-end website design and SEO strategy showcase"
                className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-700"
                loading="eager"
              />

              {/* Floating Performance & Impact Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 text-xs font-mono font-semibold text-zinc-800 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#108A00]" />
                <span>Ultra-Fast Responsive Web Architecture</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. TRUST / EXPERTISE SECTION */}
      <section id="trust-section" className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
          {/* Main Experience Metric */}
          <div className="flex items-center gap-5 text-left w-full md:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-[#108A00] text-white flex items-center justify-center font-display font-black text-2xl shadow-sm shrink-0">
              4+
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                4+ Years Experience
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 font-mono mt-0.5">
                Specialized in Strategic Web Architecture
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-gray-200" />

          {/* Focus Pillars */}
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-3 sm:gap-4 w-full md:w-auto">
            {DESIGNER_INFO.coreFocus.map((focus) => (
              <div
                key={focus}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm font-medium text-zinc-700 shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-[#108A00]" />
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
            <span className="text-xs font-mono uppercase tracking-widest text-[#108A00] font-semibold">
              Tailored Solutions
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
              Services &amp; Capabilities
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Comprehensive web design and technical SEO services engineered to convert visitors into loyal clients.
            </p>
          </div>

          <a
            href={primaryMailto}
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-700 hover:text-[#108A00] transition-colors"
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
            <span className="text-xs font-mono uppercase tracking-widest text-[#108A00] font-semibold">
              Selected Showcase
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
              Featured Work
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed">
              A curated look at recent website transformations combining bold visual identity with measurable conversion lift.
            </p>
          </div>

          <button
            id="view-all-projects-header-cta"
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-300 hover:border-[#108A00] text-xs font-medium text-zinc-800 hover:text-[#108A00] transition-all self-start sm:self-auto shadow-xs"
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-gray-300 hover:border-[#108A00] text-sm font-semibold text-zinc-900 hover:text-[#108A00] transition-all shadow-sm hover:shadow-md"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. TESTIMONIALS SLIDER SECTION */}
      <TestimonialsSlider />

      {/* 6. FINAL CTA SECTION */}
      <section id="final-cta-section" className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#F2F9F2] via-white to-[#EAF5EB] border border-emerald-200 p-10 sm:p-16 md:p-20 overflow-hidden text-center shadow-lg">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-400/[0.08] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-xs font-mono text-[#108A00] uppercase tracking-wider font-semibold">
              Ready to elevate your presence?
            </span>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.12]">
              Have a project in mind? Let's build something exceptional.
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-xl mx-auto">
              Tell me what you're working on and let's discuss how I can bring your vision to life.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="home-final-cta"
                href={DESIGNER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#108A00] text-white text-sm font-semibold tracking-wide hover:bg-[#14A800] transition-all shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/35 focus:outline-none"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${DESIGNER_INFO.email}`}
                className="text-xs font-mono text-zinc-600 hover:text-[#108A00] transition-colors py-2 font-medium"
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
