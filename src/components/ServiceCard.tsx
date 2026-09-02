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
      className="group relative p-7 sm:p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#108A00] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
    >
      <div className="space-y-4">
        {/* Icon & Index Badge */}
        <div className="flex items-center justify-between">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#108A00] group-hover:bg-[#108A00] group-hover:text-white transition-colors">
            {getIcon(service.icon)}
          </div>
          <span className="font-mono text-xs text-zinc-400 font-semibold">0{index + 1}</span>
        </div>

        {/* Title & Short Description */}
        <div className="space-y-2 pt-2">
          <h3 className="font-display text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-[#108A00] transition-colors tracking-tight">
            {service.title}
          </h3>
          <p className="text-sm text-zinc-600 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* Deliverables Checklist */}
      <div className="pt-6 mt-6 border-t border-gray-100 space-y-2">
        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
          Key Deliverables
        </span>
        <ul className="space-y-1.5 pt-1">
          {service.deliverables.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-zinc-700">
              <Check className="w-3.5 h-3.5 text-[#108A00] shrink-0" />
              <span className="truncate">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
