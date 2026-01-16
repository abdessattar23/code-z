
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center font-bold text-black text-sm group-hover:rotate-12 transition-transform duration-500">Z</div>
          <span className="text-lg font-bold tracking-widest text-white uppercase">CodeZ</span>
        </div>
        <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
          <a href="#projects" className="relative hover:text-white transition-colors group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="#hackathons" className="relative hover:text-white transition-colors group">
            Hackathons
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="#team" className="relative hover:text-white transition-colors group">
            Team
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="px-6 py-3 bg-white text-black rounded-sm hover:bg-neutral-200 hover:-translate-y-0.5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
