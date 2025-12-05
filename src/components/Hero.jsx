import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Download, Crosshair } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Text Reveal with Glitch Stagger
    const tl = gsap.timeline();
    tl.from(".hero-glitch-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2
    })
    .to(".glitch-overlay", {
        opacity: 1,
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        ease: "steps(1)"
    }, "-=0.5");

    // 2. HUD Elements Slide In
    gsap.from(".hud-item", {
        opacity: 0,
        x: -20,
        duration: 1,
        stagger: 0.2,
        delay: 1
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center pt-20">
      
      {/* Background Particles (Procedural) */}
      <div className="absolute inset-0 pointer-events-none z-0">
         {[...Array(20)].map((_, i) => (
            <div 
                key={i}
                className="absolute bg-brand-blue/30 rounded-full blur-[1px] animate-pulse"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 4 + 1}px`,
                    height: `${Math.random() * 4 + 1}px`,
                    animationDuration: `${Math.random() * 3 + 2}s`
                }}
            ></div>
         ))}
      </div>

      {/* Radiant Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Decorative HUD Lines */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
          <div className="hud-item absolute top-24 left-10 text-[10px] font-mono text-brand-blue/50 tracking-widest flex items-center gap-2">
             <Crosshair size={12} /> SYS.TARGET_LOCKED
          </div>
          <div className="hud-item absolute bottom-10 right-10 text-[10px] font-mono text-brand-red/50 tracking-widest text-right">
             COORDS: 23.44 N, 90.22 E <br /> SECTOR: 7G
          </div>
          <div className="absolute top-0 right-1/4 w-[1px] h-screen bg-white/5"></div>
          <div className="absolute left-10 bottom-32 w-32 h-[1px] bg-white/10"></div>
      </div>

      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center pt-24 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* TEXT CONTENT */}
          <div className="text-white space-y-6 md:space-y-8 order-2 lg:order-1 relative text-center lg:text-left">
            
            <div>
                <p className="hero-glitch-text text-xs md:text-base font-mono text-brand-blue tracking-[0.3em] mb-2 uppercase">
                    &lt;System.Initialize /&gt;
                </p>
                
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] relative">
                    <div className="overflow-hidden">
                        <span className="hero-glitch-text block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">MRB</span>
                    </div>
                    <div className="overflow-hidden relative inline-block lg:block">
                        <span className="hero-glitch-text block text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-600">RAFI</span>
                        {/* Glitch Overlay to happen on hover or init */}
                        <span className="glitch-overlay absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 mix-blend-screen translate-x-[2px] pointer-events-none">RAFI</span>
                    </div>
                </h1>
            </div>

            <p className="hero-glitch-text text-base md:text-xl text-gray-400 max-w-lg leading-relaxed border-l-0 md:border-l-2 border-brand-blue/30 md:pl-6 mx-auto lg:mx-0">
              Processing <span className="text-white font-bold">MERN</span> protocols to architect next-gen digital experiences.
            </p>
            
            <div className="hero-glitch-text hidden lg:flex items-center gap-6 pt-4">
              <SocialLink href="https://www.linkedin.com/in/mrbrafi2005" icon={<Linkedin size={20} />} />
              <SocialLink href="https://github.com/MRBRAFI" icon={<Github size={20} />} />
              <SocialLink href="mailto:devmrbrafi@gmail.com" icon={<Mail size={20} />} />
              
              <div className="h-px w-12 bg-white/10 mx-2 hidden sm:block"></div>

              <a 
                href="https://docs.google.com/document/d/1DwLnXMimgNZeyHHu12ZVAX4q5u3d31KK846b9CCwDN0/export?format=pdf"
                className="group relative px-6 py-2 bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-brand-red hover:border-brand-red transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
              >
                  <span>Download CV</span>
                  <Download size={14} className="group-hover:translate-y-1 transition-transform" />
                  <div className="absolute top-0 left-0 w-1 h-1 bg-white"></div>
                  <div className="absolute bottom-0 right-0 w-1 h-1 bg-white"></div>
              </a>
            </div>

          </div>

          {/* HOLOGRAPHIC PROFILE (Orbital System) */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mt-10 md:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] flex items-center justify-center scale-90 sm:scale-100">
                
                {/* CORE GLOW */}
                <div className="absolute inset-0 bg-brand-blue/5 rounded-full blur-[100px]"></div>

                {/* --- ORBIT 1 (Outer - Slow) --- */}
                {/* Fine line, low opacity */}
                <div className="absolute inset-0 border-[0.5px] border-brand-blue/30 rounded-full animate-[spin_30s_linear_infinite]">
                    <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_15px_rgba(30,136,229,1)]"></div>
                    <div className="absolute bottom-1/2 -left-1.5 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,1)]"></div>
                </div>

                {/* --- ORBIT 2 (Middle - Medium, Reverse) --- */}
                <div className="absolute inset-16 border-[1px] border-brand-red/20 rounded-full animate-[spin_20s_linear_infinite_reverse] border-dashed">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-2.5 h-2.5 bg-brand-red rounded-full shadow-[0_0_15px_rgba(229,57,53,1)]"></div>
                </div>

                {/* --- ORBIT 3 (Inner - Fast) --- */}
                <div className="absolute inset-32 border-[0.5px] border-cyan-400/30 rounded-full animate-[spin_10s_linear_infinite]">
                    <div className="absolute bottom-1/2 -left-1 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
                </div>

                {/* CENTRAL IMAGE CONTAINER */}
                <div className="relative z-20 w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_30px_rgba(30,136,229,0.1)] bg-black">
                    <img 
                      src="https://i.ibb.co.com/9mmttftZ/Photo-Collage-20240104-191106495.jpg" 
                      alt="MRB RAFI" 
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                    />
                    {/* Scanline Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_3px] pointer-events-none z-20"></div>
                </div>
                
                {/* Floating Status Badge */}
                <div className="absolute -bottom-8 right-16 glass-card px-3 py-1.5 border border-white/5 rounded-full flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="text-[10px] font-mono text-gray-400 tracking-widest">SYS.ACTIVE</span>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full flex items-center justify-center text-gray-300 border border-white/20 bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-sm"
  >
    {icon}
  </a>
);

export default Hero;
