import React from 'react';
import { ServiceItem } from '../types';
import { Layout, RefreshCw, Layers, ShoppingBag, Search, Smartphone, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      default:
        return <Layout className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative p-7 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:bg-zinc-900/80"
    >
      <div className="space-y-4">
        {/* Icon & Index Badge */}
        <div className="flex items-center justify-between">
          <div className="w-11 h-11 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-200 group-hover:text-white group-hover:bg-zinc-700 transition-colors">
            {getIcon(service.icon)}
          </div>
          <span className="font-mono text-xs text-zinc-400">0{index + 1}</span>
        </div>

        {/* Title & Short Description */}
        <div className="space-y-2 pt-2">
          <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
            {service.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* Deliverables Checklist */}
      <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
          Key Deliverables
        </span>
        <ul className="space-y-1.5 pt-1">
          {service.deliverables.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
              <Check className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
