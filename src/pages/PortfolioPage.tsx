import React, { useState } from 'react';
import { Project } from '../types';
import { DESIGNER_INFO, PROJECTS } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PortfolioPageProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onSelectProject }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const industries = [
    'All',
    ...Array.from(new Set(PROJECTS.map((p) => p.industry)))
  ];

  const filteredProjects = selectedIndustry === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.industry.toLowerCase() === selectedIndustry.toLowerCase());

  return (
    <div className="space-y-20 sm:space-y-28 pb-24 max-w-7xl mx-auto px-6 sm:px-8">
      {/* 1. PORTFOLIO HEADER */}
      <section id="portfolio-header" className="pt-12 sm:pt-18 space-y-8">
        <div className="space-y-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-[#108A00] font-semibold shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#108A00]" />
            <span>Curated Case Studies &amp; Commercial Builds</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-tight"
          >
            Selected Work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl"
          >
            A collection of websites designed with strategy, clarity, and attention to detail.
          </motion.p>
        </div>

        {/* Industry Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2"
        >
          {industries.map((ind) => {
            const isActive = selectedIndustry === ind;
            return (
              <button
                key={ind}
                id={`filter-industry-${ind.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all focus:outline-none ${
                  isActive
                    ? 'bg-[#108A00] text-white font-semibold shadow-sm'
                    : 'bg-gray-100 text-zinc-700 border border-gray-200 hover:bg-gray-200/70 hover:text-zinc-900'
                }`}
              >
                {ind}
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* 2. PREMIUM 2-COLUMN PORTFOLIO GRID */}
      <section id="portfolio-grid" className="space-y-6">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pb-2 border-b border-gray-200">
          <span>Showing {filteredProjects.length} Selected Project{filteredProjects.length !== 1 ? 's' : ''}</span>
          <span>Click any card to inspect full case study</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </section>

      {/* 3. PORTFOLIO BOTTOM CTA */}
      <section id="portfolio-bottom-cta" className="pt-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#F2F9F2] via-white to-[#EAF5EB] border border-emerald-200 p-10 sm:p-16 text-center space-y-6 overflow-hidden shadow-lg">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#108A00] font-semibold">
              Custom Tailored Engagements
            </span>

            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
              Like what you see? Let's create something for your brand.
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 max-w-lg mx-auto leading-relaxed">
              Every project begins with understanding your commercial targets and translating them into a bespoke, high-performing digital flagship.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="portfolio-email-cta"
                href={DESIGNER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#108A00] text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#14A800] transition-all shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/35 focus:outline-none"
              >
                <span>Request a quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${DESIGNER_INFO.email}`}
                className="text-xs font-mono text-zinc-600 hover:text-[#108A00] transition-colors font-medium py-2"
              >
                {DESIGNER_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
