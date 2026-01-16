
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      {/* Floating Glass Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 glass rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-5xl flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 border border-neutral-800 rounded-full text-[10px] font-mono text-neutral-500 mb-10 tracking-[0.3em] uppercase hover:border-neutral-600 hover:text-neutral-300 transition-colors">
          Engineering Collective / Morocco
        </div>

        <h1 className="text-6xl md:text-[110px] font-black mb-10 tracking-tighter leading-[0.9] text-balance">
          <span className="hover:text-neutral-300 transition-colors duration-500">PURE CODE.</span><br />
          <span className="text-neutral-800 hover:text-neutral-500 transition-colors duration-700">NO COMPROMISE.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed font-light italic">
          Building high-complexity SaaS solutions and pioneering AI-driven technologies. Won <span className="text-white not-italic font-bold">YouCode 2025</span>. Participating in <span className="text-white not-italic font-bold">Sofrecom</span>.
        </p>

        {/* Scroll indicator positioned directly under the text */}
        <div className="flex flex-col items-center space-y-3 mb-14">
          <span className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest animate-pulse">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-800 to-transparent"></div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          <a href="#projects" className="group flex items-center space-x-6 text-xs font-bold uppercase tracking-[0.3em]">
            <span>Explore Work</span>
            <div className="relative w-16 h-[1px] bg-neutral-800 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
