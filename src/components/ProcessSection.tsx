import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const ProcessSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#108A00] font-semibold">
          Proven Framework
        </span>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          How We Work Together
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
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
            className="group relative p-7 rounded-2xl bg-white border border-gray-200 hover:border-[#108A00] transition-all flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#108A00] transition-colors">
                  {step.step}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                  Phase 0{idx + 1}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-zinc-900 group-hover:text-[#108A00] transition-colors tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-medium block">
                Deliverables
              </span>
              <ul className="space-y-1.5">
                {step.deliverables.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#108A00] shrink-0" />
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
