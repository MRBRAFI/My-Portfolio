import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Terminal, Cpu, Globe, Database, Monitor, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: 'AI_INVENTORY',
    category: 'SYSTEM.CORE',
    tech: ['React', 'Firebase', 'Tailwind'],
    image: 'https://i.ibb.co.com/kgtf8C62/Screenshot-2025-12-06-021801.png',
    description: 'Predictive stock engine with real-time data visualization and automated inventory tracking.',
    links: { demo: 'https://vento-ai-inventory.web.app/', github: '#' }
  },
  {
    id: 2,
    title: 'BRAINER_LMS',
    category: 'ED.MODULE',
    tech: ['MERN Stack', 'Redux', 'JWT'],
    image: 'https://i.ibb.co.com/r9Xx9S0/Screenshot-2025-12-06-022507.png',
    description: 'Comprehensive learning management system with student dashboards and course analytics.',
    links: { demo: 'https://brainers-16689.web.app/', github: '#' }
  },
  {
    id: 3,
    title: 'APP_VAULT',
    category: 'COMMERCE.NET',
    tech: ['React', 'Stripe', 'Node.js'],
    image: 'https://i.ibb.co.com/f7hw0nm/Screenshot-2025-12-06-023118.png',
    description: 'Secure digital asset store featuring seamless payment processing and user asset management.',
    links: { demo: 'https://app-vault-by-mrb.netlify.app/', github: '#' }
  },
  {
    id: 4,
    title: 'NEXT_CLIENT',
    category: 'WEB.APP',
    tech: ['Next.js 14', 'TypeScript', 'Prisma'],
    image: 'https://i.ibb.co.com/RpP0pgCS/Screenshot-2025-12-06-022752.png',
    description: 'Scalable cutting-edge web framework implementation optimized for high performance.',
    links: { demo: 'https://next-app-client-seven.vercel.app/', github: '#' }
  },
   {
    id: 5,
    title: 'ECO_PLANTER',
    category: 'BIO.TECH',
    tech: ['IoT', 'React', 'Firebase'],
    image: 'https://i.ibb.co.com/5WjZZVnt/Screenshot-2025-12-06-025630.png',
    description: 'Smart environmental monitoring dashboard integrated with IoT sensors for green tech.',
    links: { demo: 'https://green-earth-assignment-6-mrb-rafi.netlify.app/', github: '#' }
  },
  {
    id: 6,
    title: 'SUPPORT_DESK',
    category: 'SERVICE',
    tech: ['React', 'Socket.io', 'Express'],
    image: 'https://i.ibb.co.com/CsYXcBRT/Screenshot-2025-12-06-025748.png',
    description: 'Real-time customer support platform with live chat and ticket management systems.',
    links: { demo: 'https://customer-service-project.netlify.app/', github: '#' }
  }
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(projectsData[0]);
    const containerRef = useRef(null);
    const previewRef = useRef(null);

    useGSAP(() => {
        // ENTRANCE ANIMATION: Slide up the whole console
        gsap.from(".cyber-deck-container", {
            scrollTrigger: {
                trigger: "#projects",
                start: "top 75%"
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

    }, { scope: containerRef });

    // Handle Project Switch Animation
    const handleProjectChange = (project) => {
        if (project.id === activeProject.id) return;

        // Glitch Out
        gsap.to(previewRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.2,
            onComplete: () => {
                setActiveProject(project);
                // Glitch In
                gsap.to(previewRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    ease: "back.out(1.7)"
                });
            }
        });
    };

    return (
        <section id="projects" className="py-24 bg-transparent px-4 min-h-screen relative overflow-hidden flex flex-col items-center">
             
            <div ref={containerRef} className="container mx-auto relative z-10 max-w-7xl">
                
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/5 backdrop-blur-md">
                        <Terminal size={14} className="text-brand-blue animate-pulse" />
                        <span className="text-xs font-mono text-brand-blue tracking-widest">MISSION_CONTROL_ONLINE</span>
                    </div>
                     <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">DECK</span>
                    </h2>
                </div>

                {/* CYBER DECK INTERFACE */}
                <div className="cyber-deck-container grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 shadow-2xl relative">
                    
                    {/* Decorative Corner Brackets */}
                    <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-brand-blue rounded-tl-lg"></div>
                    <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-brand-blue rounded-tr-lg"></div>
                    <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-brand-blue rounded-bl-lg"></div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-brand-blue rounded-br-lg"></div>

                    {/* LEFT PANEL: PREVIEW SCREEN (Span 8) */}
                    <div className="lg:col-span-8 relative overflow-hidden rounded-2xl bg-black/60 border border-white/5 group">
                        {/* Scanline Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                        
                        <div ref={previewRef} className="relative h-full flex flex-col">
                             {/* Image Area */}
                             <div className="relative h-64 md:h-[400px] w-full overflow-hidden">
                                <img 
                                    src={activeProject.image} 
                                    alt={activeProject.title} 
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 bg-black/80 border border-green-500/50 text-green-400 text-xs font-mono px-3 py-1 rounded backdrop-blur-md flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    SYSTEM_ACTIVE
                                </div>
                             </div>

                             {/* Content Area */}
                             <div className="p-6 md:p-8 space-y-6 flex-1 bg-gradient-to-b from-gray-900/0 to-gray-900/90">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{activeProject.title}</h3>
                                        <span className="px-2 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-mono rounded tracking-widest">{activeProject.category}</span>
                                    </div>
                                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">{activeProject.description}</p>
                                </div>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {activeProject.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-mono rounded-full flex items-center gap-1 hover:bg-white/10 transition-colors">
                                            <Cpu size={10} /> {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex gap-4 pt-4">
                                    <a 
                                        href={activeProject.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-blue/90 hover:shadow-[0_0_20px_rgba(30,136,229,0.4)] transition-all flex items-center justify-center gap-2 group/btn"
                                    >
                                        <Globe size={18} />
                                        Initialize Demo
                                        <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                    <a 
                                        href={activeProject.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all flex items-center gap-2"
                                    >
                                        <Github size={18} />
                                        <span className="hidden md:inline">Source Code</span>
                                    </a>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL: DATA LOG (Span 4) */}
                    <div className="lg:col-span-4 flex flex-col gap-4 overflow-y-auto max-h-[600px] custom-scrollbar p-2">
                        <h4 className="text-gray-500 font-mono text-xs tracking-[0.2em] mb-2 pl-2">AVAILABLE_MODULES</h4>
                        
                        {projectsData.map((project) => (
                            <button
                                key={project.id}
                                onClick={() => handleProjectChange(project)}
                                className={`group relative p-4 rounded-xl border text-left transition-all duration-300 ${
                                    activeProject.id === project.id 
                                    ? 'bg-brand-blue/10 border-brand-blue shadow-[0_0_15px_rgba(30,136,229,0.2)]' 
                                    : 'bg-black/20 border-white/5 hover:border-white/20 hover:bg-white/5'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`font-mono text-xs ${activeProject.id === project.id ? 'text-brand-blue' : 'text-gray-500'}`}>
                                        0{project.id} //
                                    </span>
                                    {activeProject.id === project.id && <Monitor size={14} className="text-brand-blue animate-pulse" />}
                                </div>
                                <h5 className={`font-bold text-lg mb-1 ${activeProject.id === project.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                    {project.title}
                                </h5>
                                <p className="text-xs text-gray-500 line-clamp-1 group-hover:text-gray-400 transition-colors">
                                    {project.description}
                                </p>

                                {/* Active Indicator Bar */}
                                {activeProject.id === project.id && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue rounded-l-xl"></div>
                                )}
                            </button>
                        ))}

                        {/* Filler / Status Block */}
                        <div className="mt-auto p-4 rounded-xl border border-dashed border-white/10 bg-black/20 text-center">
                            <Database size={24} className="mx-auto text-gray-600 mb-2" />
                            <p className="text-[10px] text-gray-500 font-mono">SERVER STATUS: OPTIMAL</p>
                            <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                                <div className="w-2/3 h-full bg-green-500/50 animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
