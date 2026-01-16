
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import TeamGrid from './components/TeamGrid';
import AIChat from './components/AIChat';
import { PROJECTS, HACKATHONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Selected<br /><span className="text-neutral-600 underline decoration-neutral-800 underline-offset-8">Works</span></h2>
                <p className="text-neutral-400 text-lg font-light leading-relaxed">
                  We specialize in high-impact solutions for health and industry. Built with engineering rigor and architectural precision.
                </p>
              </div>
              <div className="text-[10px] font-mono text-neutral-600 tracking-widest uppercase mb-2">
                / INDEX_01
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900">
              {PROJECTS.map((project) => (
                <div key={project.title} className="bg-black">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hackathons Section */}
        <section id="hackathons" className="py-32 px-6 bg-neutral-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Battle Record</h2>
              <div className="h-[1px] w-full bg-neutral-800"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {HACKATHONS.map((hack) => (
                <div 
                  key={hack.name} 
                  className="relative group cursor-zoom-in p-8 border border-transparent hover:border-neutral-800 hover:bg-neutral-900/40 transition-all duration-500 rounded-lg overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <div className={`inline-block px-3 py-0.5 text-[9px] font-bold uppercase tracking-widest border transition-all duration-500 ${
                        hack.status === 'Won' 
                          ? 'border-emerald-900/50 text-emerald-500 group-hover:border-emerald-500 group-hover:bg-emerald-500/10' 
                          : 'border-blue-900/50 text-blue-500 group-hover:border-blue-500 group-hover:bg-blue-500/10'
                      }`}>
                        {hack.status === 'Won' ? 'Winner' : hack.status}
                      </div>
                      <h3 className="text-4xl font-black mt-6 tracking-tight text-neutral-700 group-hover:text-white transition-colors duration-500 uppercase">
                        {hack.name}
                      </h3>
                    </div>
                    <span className="text-4xl font-mono text-neutral-800 group-hover:text-neutral-400 transition-colors tracking-tighter">'{hack.year.slice(2)}</span>
                  </div>
                  <p className="text-neutral-600 group-hover:text-neutral-300 leading-relaxed font-light text-sm max-w-xl italic border-l-2 border-neutral-900 group-hover:border-neutral-700 pl-6 py-2 transition-all duration-500">
                    {hack.description}
                  </p>
                  
                  {/* Subtle color glow on hover */}
                  <div className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[120px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none ${
                    hack.status === 'Won' ? 'bg-emerald-500' : 'bg-blue-500'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TeamGrid />

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6 text-center border-t border-neutral-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter uppercase leading-[0.8]">
              Let's <br /> Build.
            </h2>
            <p className="text-xl text-neutral-400 mb-16 font-light max-w-2xl mx-auto italic">
              Available for full-stack engineering contracts and high-complexity SaaS architecture.
            </p>
            <a href="mailto:hello@code-z.app" className="inline-block px-14 py-6 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-all">
              Initiate Contact
            </a>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 border-t border-neutral-900 bg-black text-neutral-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-neutral-800 rounded-sm flex items-center justify-center font-bold text-[10px] text-white">Z</div>
            <span className="font-bold text-white tracking-[0.3em] text-xs uppercase">CodeZ</span>
          </div>
          <div className="text-[10px] font-mono tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Collective CodeZ. All Rights Reserved.
          </div>
          <div className="flex space-x-10 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
