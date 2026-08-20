export type Page = 'home' | 'portfolio' | 'about';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  industry: string;
  shortDescription: string;
  fullDescription: string;
  clientObjective: string;
  designApproach: string;
  keyFeatures: string[];
  finalResult: string;
  platform: string;
  services: string[];
  year: string;
  metrics: ProjectMetric[];
  image: string;
  fullScreenshot?: string;
  heroMockupType?: string;
  palette: string[];
  featured: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
