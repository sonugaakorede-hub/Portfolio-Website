import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      onClick={() => onSelect(project)}
      className="group cursor-pointer flex flex-col rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/25 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black/40"
    >
      {/* Mockup Window Frame */}
      <div className="relative w-full aspect-[16/10] bg-[#0c0d10] overflow-hidden border-b border-white/10">
        {/* Browser Top Bar */}
        <div className="absolute top-0 inset-x-0 h-7 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 px-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-red-400/80 transition-colors" />
            <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-amber-400/80 transition-colors" />
            <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-emerald-400/80 transition-colors" />
          </div>
          <span className="text-[10px] font-mono text-zinc-400 truncate max-w-[180px]">
            {project.name.toLowerCase().replace(/\s+/g, '')}.com
          </span>
          <div className="w-6" />
        </div>

        {/* Project Image with subtle scale hover */}
        <div className="w-full h-full pt-7 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Floating Platform Badge */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-200">
          <Layers className="w-3 h-3 text-zinc-400" />
          <span>{project.platform}</span>
        </div>

        {/* View Project Hover Pill */}
        <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-400 text-zinc-950 text-xs font-semibold shadow-xl shadow-emerald-500/20">
          <span>View Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Project Meta & Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5 bg-gradient-to-b from-transparent to-zinc-950/40">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-zinc-400 uppercase tracking-wider text-[11px]">
              {project.industry}
            </span>
            <span className="font-mono text-zinc-400 text-[11px]">{project.year}</span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors flex items-center justify-between">
            <span>{project.name}</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Services Chips */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-1.5">
          {project.services.slice(0, 3).map((svc) => (
            <span
              key={svc}
              className="px-2.5 py-0.5 rounded-md bg-zinc-800/60 border border-white/5 text-[11px] text-zinc-400"
            >
              {svc}
            </span>
          ))}
          {project.services.length > 3 && (
            <span className="text-[10px] text-zinc-400 font-mono">
              +{project.services.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
