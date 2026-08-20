import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const ProcessSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Proven Framework
        </span>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
          How We Work Together
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          A predictable, transparent 4-stage process designed to bring your digital vision to life on time, on budget, and built to rank.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {PROCESS_STEPS.map((step, idx) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group relative p-7 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between hover:bg-zinc-900/70"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl sm:text-4xl font-bold text-zinc-400 group-hover:text-white transition-colors">
                  {step.step}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                  Phase 0{idx + 1}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                Deliverables
              </span>
              <ul className="space-y-1.5">
                {step.deliverables.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
