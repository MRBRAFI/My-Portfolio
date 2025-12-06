import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Cpu, Layout, Server, Smartphone, Zap } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const textElements = gsap.utils.toArray('.reveal-text');
        
        textElements.forEach((text) => {
            gsap.fromTo(text, 
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

    }, { scope: containerRef });

  const skills = [
    { name: 'React', icon: <Code2 /> },
    { name: 'Node.js', icon: <Server /> },
    { name: 'MongoDB', icon: <Database /> },
    { name: 'Express', icon: <Zap /> },
    { name: 'TailwindCSS', icon: <Layout /> },
    { name: 'JavaScript', icon: <Smartphone /> }, // Using Smartphone as placeholder or Generic JS
    { name: 'Next.js', icon: <Globe /> },
    { name: 'Framer Motion', icon: <Cpu /> },
  ];

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen bg-transparent py-20 px-6 overflow-hidden flex flex-col justify-center">
        {/* Decorative elements - Cyber Grid Removed (Global Now) */}

        <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                
                {/* Left: Futuristic Profile Image */}
                <div className="flex justify-center md:justify-start relative order-2 md:order-1">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                         {/* Holographic Base */}
                         <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-brand-blue/50 blur-xl rounded-[100%] animate-pulse"></div>
                         
                         {/* Hexagon Clip Path Image */}
                         <div className="w-full h-full relative" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-red opacity-30 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                            <img 
                                src="https://i.ibb.co.com/fVQqkrkc/FB-IMG-1703234658007.jpg" 
                                alt="MRB RAFI Profile" 
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 grayscale group-hover:grayscale-0"
                            />
                         </div>

                         {/* Floating Tech Frame */}
                         <div className="absolute inset-[-10px] border-2 border-brand-blue/30 scale-105 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                         
                         {/* Animated Glitch Details */}
                         <div className="absolute top-1/2 -right-8 glass-card p-3 rounded-lg border border-white/20 animate-bounce">
                             <p className="text-xs font-bold text-brand-red">SYS.ADMIN</p>
                             <p className="text-[10px] text-gray-400">ONLINE</p>
                         </div>
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="space-y-8 order-1 md:order-2 text-right md:text-left">
                    <div className="inline-block relative">
                         <h2 className="reveal-text text-5xl md:text-7xl font-bold text-white tracking-tight">
                            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan">ME</span>
                         </h2>
                         <div className="h-1 w-full bg-gradient-to-r from-transparent via-brand-red to-transparent mt-2"></div>
                    </div>

                    <div className="reveal-text p-8 rounded-2xl glass-card border-l-4 border-brand-red relative overflow-hidden group">
                        <div className="absolute inset-0 bg-brand-red/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
                        <p className="text-gray-300 leading-relaxed text-lg relative z-10">
                            I am a <span className="text-brand-red font-bold">Cyber-Architect</span> of the web. As a passionate MERN developer, I
                            blend creative vision with technical expertise to build intuitive.
                            high-performance web applications. I thrive on solving complex problems and delivering user-centric solutions that exceed expectations.
                        </p>
                    </div>

                    {/* Education & Coding Journey Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Education Card */}
                        <div className="reveal-text p-6 rounded-2xl glass-card border border-white/10 relative group hover:border-brand-red/50 transition-colors">
                            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-50 transition-opacity">
                                <Code2 size={40} className="text-brand-red" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-brand-red">01.</span> Education
                            </h3>
                            <ul className="space-y-3 text-gray-300 text-sm">
                                <li className="flex flex-col">
                                    <span className="font-bold text-white">English (Honours)</span>
                                    <span className="text-xs text-gray-400">National University • Present</span>
                                </li>
                                <li className="flex justify-between border-t border-white/10 pt-2">
                                    <span>HSC (2023)</span>
                                    <span className="text-brand-blue font-bold">GPA 5.00</span>
                                </li>
                                <li className="flex justify-between border-t border-white/10 pt-2">
                                    <span>SSC (2021)</span>
                                    <span className="text-brand-red font-bold">GPA 4.61</span>
                                </li>
                            </ul>
                        </div>

                        {/* Coding Journey Card */}
                        <div className="reveal-text p-6 rounded-2xl glass-card border border-white/10 relative group hover:border-brand-blue/50 transition-colors">
                            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-50 transition-opacity">
                                <Zap size={40} className="text-brand-blue" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-brand-blue">02.</span> Coding Journey
                            </h3>
                            <ul className="space-y-4 text-gray-300 text-sm">
                                <li className="flex flex-col gap-1">
                                    <span className="font-bold text-white">Programming Hero Bootcamp</span>
                                    <span className="text-xs text-gray-400">Where it all started. Intensive Full Stack training.</span>
                                </li>
                                <li className="flex items-center gap-3 bg-white/5 p-2 rounded-lg">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="font-bold">Experience: <span className="text-white">1+ Year</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* FUTURISTIC SKILLS MARQUEE - CYBER DATA STREAM */}
        <div className="mt-24 relative w-full overflow-hidden py-10">
            
            {/* Background Stream Effects */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transform -skew-y-2 origin-left scale-110 border-y border-brand-red/20"></div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(250,215,18,0.05)_50%,transparent_100%)] animate-pulse"></div>
            
            {/* ROW 1: Solid High-Contrast */}
            <div className="relative z-10 mb-4 transform -rotate-1">
                <motion.div 
                    className="flex gap-8 min-w-max items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                        <div key={index} className="flex items-center gap-4 px-6 py-3 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red font-bold text-xl md:text-2xl uppercase tracking-widest shadow-[0_0_15px_rgba(229,57,53,0.2)] hover:bg-brand-red hover:text-white transition-all cursor-crosshair group">
                            <span className="group-hover:animate-spin-slow">{skill.icon}</span>
                            {skill.name}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ROW 2: Outlined Tech-Style (Reverse Direction) */}
            <div className="relative z-10 transform rotate-1">
                <motion.div 
                    className="flex gap-8 min-w-max items-center"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                         <div key={index} className="flex items-center gap-4 text-transparent stroke-text text-3xl md:text-5xl font-black uppercase tracking-tighter opacity-30 hover:opacity-100 transition-opacity">
                            {/* Note: Stroke text effect requires custom CSS or -webkit-text-stroke */}
                            <span className="text-gray-500">{skill.icon}</span>
                            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>{skill.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Gradient Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none"></div>
        </div>

    </section>
  );
};

export default About;
