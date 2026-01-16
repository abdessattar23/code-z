
import React from 'react';
import { Project } from '../types';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="group relative border border-neutral-900 bg-neutral-950/50 hover:border-neutral-500 hover:-translate-y-2 transition-all duration-700 overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden bg-neutral-900 relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
        />
        
        {/* Glass reflection overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        </div>

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <div className="w-12 h-12 rounded-full glass flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-10 relative z-10">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-[1px] flex-1 bg-neutral-800 group-hover:bg-neutral-600 transition-colors"></div>
          <div className="flex gap-4">
            {project.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[9px] uppercase font-mono tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-neutral-500 text-sm leading-relaxed mb-8 font-light italic group-hover:text-neutral-400 transition-colors">
          {project.description}
        </p>
        <button className="text-[10px] font-bold uppercase tracking-[0.2em] py-2 border-b border-white/20 hover:border-white hover:tracking-[0.3em] transition-all">
          View Detail
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
