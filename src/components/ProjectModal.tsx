import React, { useEffect } from 'react';
import { Project } from '../types';
import { DESIGNER_INFO } from '../data/portfolioData';
import { X, ArrowUpRight, CheckCircle, Award, Sparkles, Layers, MousePointer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const mailtoLink = `mailto:${DESIGNER_INFO.email}?subject=Inquiry%20Regarding%20${encodeURIComponent(project.name)}%20Project`;
  const screenshotSrc = project.fullScreenshot || project.image;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-8">
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 cursor-zoom-out"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-[#101216] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto"
        >
          {/* Sticky Header Bar */}
          <div className="px-5 sm:px-7 py-3.5 border-b border-white/10 flex items-center justify-between bg-zinc-900/95 backdrop-blur-md sticky top-0 z-30">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-medium">
                {project.industry}
              </span>
              <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
                Platform: <strong className="text-zinc-200">{project.platform}</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={mailtoLink}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-400 text-zinc-950 text-xs font-semibold hover:bg-emerald-300 transition-colors shadow-sm shadow-emerald-500/10"
              >
                <span>Discuss Similar Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                id="close-project-modal"
                onClick={onClose}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors focus:outline-none text-xs font-mono"
                aria-label="Close project preview"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-5 sm:p-7 md:p-8 space-y-8">
            {/* Title & Tagline Header */}
            <div className="space-y-2.5">
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {project.name}
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                {project.tagline}
              </p>

              {/* Service Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.services.map((srv) => (
                  <span
                    key={srv}
                    className="px-2.5 py-1 rounded-md bg-zinc-800/80 border border-white/10 text-xs text-zinc-300 font-mono"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* FULL WEBSITE SCREENSHOT PREVIEW (Scrollable Desktop Mockup) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2 font-mono">
                  <MousePointer className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Full-Page Desktop Website Screenshot (Scroll down below)</span>
                </div>
                <span className="font-mono text-zinc-500 text-[11px] hidden sm:inline">
                  Scroll window to view full design
                </span>
              </div>

              {/* Browser Window Frame with Scrollable Full Height Image */}
              <div className="w-full rounded-xl border border-white/15 bg-zinc-950 shadow-2xl overflow-hidden">
                {/* Browser Top Navigation Bar */}
                <div className="h-8 bg-zinc-900 border-b border-white/10 px-4 flex items-center justify-between sticky top-0 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-4 py-0.5 rounded-full bg-zinc-800 border border-white/10 text-[11px] text-zinc-300 font-mono max-w-[320px] truncate text-center">
                    https://www.{project.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
                  </div>
                  <div className="w-10 text-right text-[10px] text-zinc-500 font-mono">
                    100%
                  </div>
                </div>

                {/* Scrollable Container with the Full Static Image */}
                <div className="max-h-[600px] overflow-y-auto overflow-x-hidden bg-[#0c0d10] overscroll-contain">
                  <img
                    src={screenshotSrc}
                    alt={`${project.name} full website design`}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto block select-none"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/70 border border-white/10 flex flex-col justify-between"
                >
                  <span className="text-xs text-zinc-400 font-mono uppercase">{m.label}</span>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Project Deep Dive Grid: Objective vs Design Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-zinc-900/50 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-zinc-200">
                  <Award className="w-4 h-4 text-amber-400" />
                  <h4 className="font-display text-base font-semibold text-white">Client Objective</h4>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.clientObjective}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900/50 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 text-zinc-200">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <h4 className="font-display text-base font-semibold text-white">Design &amp; SEO Strategy</h4>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.designApproach}
                </p>
              </div>
            </div>

            {/* Key Deliverables & Architectural Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Key Deliverables &amp; Implemented Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-zinc-900/40 border border-white/5"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-300 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Result / Commercial Impact */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/15 space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                  Results &amp; Commercial Impact
                </h4>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.finalResult}
              </p>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-semibold text-white">Ready for a similar website transformation?</h4>
                <p className="text-xs text-zinc-400">Let's discuss how we can elevate your brand and drive real rankings.</p>
              </div>
              <a
                id="modal-discuss-cta"
                href={mailtoLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-zinc-950 text-xs font-semibold tracking-wide hover:bg-emerald-300 transition-all text-center shadow-md shadow-emerald-500/20"
              >
                <span>Inquire About Your Website</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
