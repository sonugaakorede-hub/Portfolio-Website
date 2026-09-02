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
  const [modalImgSrc, setModalImgSrc] = React.useState<string>(project.fullScreenshot || project.image);

  React.useEffect(() => {
    setModalImgSrc(project.fullScreenshot || project.image);
  }, [project]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-8">
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
          className="relative w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto text-zinc-900"
        >
          {/* Sticky Header Bar */}
          <div className="px-5 sm:px-7 py-3.5 border-b border-gray-200 flex items-center justify-between bg-white/95 backdrop-blur-md sticky top-0 z-30">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#108A00] text-xs font-mono font-semibold">
                {project.industry}
              </span>
              <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
                Platform: <strong className="text-zinc-800">{project.platform}</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={mailtoLink}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#108A00] text-white text-xs font-semibold hover:bg-[#14A800] transition-colors shadow-sm shadow-emerald-700/20"
              >
                <span>Discuss Similar Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                id="close-project-modal"
                onClick={onClose}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-zinc-600 hover:text-zinc-900 hover:bg-gray-200 transition-colors focus:outline-none text-xs font-mono"
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
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                {project.name}
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
                {project.tagline}
              </p>

              {/* Service Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.services.map((srv) => (
                  <span
                    key={srv}
                    className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 text-xs text-zinc-700 font-mono"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* FULL WEBSITE SCREENSHOT PREVIEW (Scrollable Desktop Mockup) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <div className="flex items-center gap-2 font-mono">
                  <MousePointer className="w-3.5 h-3.5 text-[#108A00]" />
                  <span>Full-Page Desktop Website Screenshot (Scroll down below)</span>
                </div>
                <span className="font-mono text-zinc-400 text-[11px] hidden sm:inline">
                  Scroll window to view full design
                </span>
              </div>

              {/* Browser Window Frame with Scrollable Full Height Image */}
              <div className="w-full rounded-xl border border-gray-200 bg-gray-50 shadow-md overflow-hidden">
                {/* Browser Top Navigation Bar */}
                <div className="h-8 bg-gray-100 border-b border-gray-200 px-4 flex items-center justify-between sticky top-0 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#108A00]" />
                  </div>
                  <div className="px-4 py-0.5 rounded-full bg-white border border-gray-200 text-[11px] text-zinc-600 font-mono max-w-[320px] truncate text-center shadow-xs">
                    https://www.{project.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
                  </div>
                  <div className="w-10 text-right text-[10px] text-zinc-400 font-mono">
                    100%
                  </div>
                </div>

                {/* Scrollable Container with the Full Static Image */}
                <div className="max-h-[600px] overflow-y-auto overflow-x-hidden bg-gray-50 overscroll-contain">
                  <img
                    src={modalImgSrc}
                    alt={`${project.name} full website design`}
                    onError={() => {
                      // Fallback to svg version if jpg fails
                      const svgFallback = (project.fullScreenshot || project.image).replace('.jpg', '.svg');
                      setModalImgSrc(svgFallback);
                    }}
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
                  className="p-5 rounded-xl bg-gray-50 border border-gray-200 flex flex-col justify-between"
                >
                  <span className="text-xs text-zinc-500 font-mono uppercase">{m.label}</span>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-[#108A00] mt-1">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Project Deep Dive Grid: Objective vs Design Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-2.5">
                <div className="flex items-center gap-2 text-zinc-900">
                  <Award className="w-4 h-4 text-amber-500" />
                  <h4 className="font-display text-base font-semibold text-zinc-900">Client Objective</h4>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {project.clientObjective}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-2.5">
                <div className="flex items-center gap-2 text-zinc-900">
                  <Sparkles className="w-4 h-4 text-[#108A00]" />
                  <h4 className="font-display text-base font-semibold text-zinc-900">Design &amp; SEO Strategy</h4>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {project.designApproach}
                </p>
              </div>
            </div>

            {/* Key Deliverables & Architectural Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Key Deliverables &amp; Implemented Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-gray-50 border border-gray-200"
                  >
                    <CheckCircle className="w-4 h-4 text-[#108A00] shrink-0 mt-0.5" />
                    <span className="text-xs text-zinc-700 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Result / Commercial Impact */}
            <div className="p-6 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#108A00]" />
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-emerald-950">
                  Results &amp; Commercial Impact
                </h4>
              </div>
              <p className="text-sm text-emerald-900 leading-relaxed font-medium">
                {project.finalResult}
              </p>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-semibold text-zinc-900">Ready for a similar website transformation?</h4>
                <p className="text-xs text-zinc-500">Let's discuss how we can elevate your brand and drive real rankings.</p>
              </div>
              <a
                id="modal-discuss-cta"
                href={DESIGNER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#108A00] text-white text-xs font-semibold tracking-wide hover:bg-[#14A800] transition-all text-center shadow-md shadow-emerald-700/20"
              >
                <span>Request a quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
