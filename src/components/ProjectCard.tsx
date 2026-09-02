import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  featuredMode?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  featuredMode = false,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(project.image);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      // Attempt fallback to the svg vector mockup if available
      const svgFallback = project.image.replace('.jpg', '.svg');
      setImgSrc(svgFallback);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      onClick={() => onSelect(project)}
      className="group cursor-pointer flex flex-col rounded-2xl bg-white border border-gray-200 hover:border-[#108A00] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1"
    >
      {/* Mockup Window Frame */}
      <div className="relative w-full aspect-[16/10] bg-gray-50 overflow-hidden border-b border-gray-200">
        {/* Browser Top Bar */}
        <div className="absolute top-0 inset-x-0 h-7 bg-gray-100/95 backdrop-blur-md border-b border-gray-200 px-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-[#108A00]" />
          </div>
          <span className="text-[10px] font-mono text-zinc-500 truncate max-w-[180px]">
            {project.name.toLowerCase().replace(/\s+/g, '')}.com
          </span>
          <div className="w-6" />
        </div>

        {/* Project Image with subtle scale hover */}
        <div className="w-full h-full pt-7 overflow-hidden bg-gray-50 flex items-center justify-center">
          <img
            src={imgSrc}
            alt={project.name}
            onError={handleImageError}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Floating Platform Badge */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-sm text-[10px] font-mono text-zinc-700">
          <Layers className="w-3 h-3 text-[#108A00]" />
          <span>{project.platform}</span>
        </div>

        {/* View Project Hover Pill */}
        <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#108A00] text-white text-xs font-semibold shadow-lg shadow-emerald-700/25">
          <span>View Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Project Meta & Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5 bg-white">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[#108A00] font-medium uppercase tracking-wider text-[11px]">
              {project.industry}
            </span>
            <span className="font-mono text-zinc-400 text-[11px]">{project.year}</span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight group-hover:text-[#108A00] transition-colors flex items-center justify-between">
            <span>{project.name}</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#108A00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          <p className="text-sm text-zinc-600 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Services Chips */}
        <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-1.5">
          {project.services.slice(0, 3).map((svc) => (
            <span
              key={svc}
              className="px-2.5 py-0.5 rounded-md bg-gray-100 border border-gray-200/80 text-[11px] font-medium text-zinc-600"
            >
              {svc}
            </span>
          ))}
          {project.services.length > 3 && (
            <span className="text-[10px] text-zinc-500 font-mono">
              +{project.services.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
