import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Cpu, Mail, Waves, Linkedin, Github, Download } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CyberPet from './CyberPet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const headerRef = useRef(null);

  useGSAP(() => {
      // Scroll Wave Animation
      gsap.to(".scroll-wave-fill", {
          height: "100%",
          ease: "none",
          scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.3
          }
      });
  }, { scope: headerRef });

  const navItems = [
    { name: 'Home', icon: <Home size={18} /> },
    { name: 'About', icon: <User size={18} /> },
    { name: 'Projects', icon: <Briefcase size={18} /> },
    { name: 'Skills', icon: <Cpu size={18} /> },
    { name: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <>
        {/* Floating Capsule Styles - Adjusted for Mobile Right Alignment */}
        <header ref={headerRef} className="fixed top-6 left-0 right-0 z-50 flex justify-end md:justify-center px-4 md:px-0 font-poppins pointer-events-none">
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="pointer-events-auto bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center gap-2 md:gap-8 mr-2 md:mr-0"
            >
                <CyberPet />
                {/* Scroll Wave Indicator Container */}
                <div className="hidden md:flex items-center gap-2 pr-4 border-r border-white/10 relative">
                     <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-gray-800 flex items-end justify-center group">
                        {/* Wave Fill */}
                        <div className="scroll-wave-fill relative w-full h-0 bg-cyan-500/80 z-0">
                            {/* Liquid Top */}
                            <div className="absolute -top-[10px] left-0 right-0 w-[200%] h-3 bg-cyan-500/80 rounded-[50%] animate-[spin_4s_linear_infinite] origin-center -translate-x-1/2 opacity-80"></div>
                            <div className="absolute -top-[8px] left-0 right-0 w-[200%] h-3 bg-brand-blue/80 rounded-[40%] animate-[spin_6s_linear_infinite_reverse] origin-center -translate-x-1/2 opacity-70"></div>
                            
                            {/* Rising Bubbles */}
                            {[...Array(3)].map((_, i) => (
                                <div 
                                    key={i}
                                    className="absolute bottom-0 w-1 h-1 bg-white/40 rounded-full animate-[ping_2s_linear_infinite]"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 2}s`,
                                        animationDuration: `${2 + Math.random()}s`
                                    }}
                                ></div>
                            ))}
                        </div>
                        {/* Icon Overlay */}
                        <Waves size={14} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white/90 drop-shadow-md" />
                     </div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-2">
                {navItems.map((item) => (
                    <li key={item.name} className="relative">
                        <a
                            href={`#${item.name.toLowerCase()}`}
                            onClick={() => setActiveTab(item.name)}
                            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 z-10 ${
                                activeTab === item.name ? 'text-white' : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            {item.icon}
                            {item.name}
                        </a>
                        {activeTab === item.name && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white/10 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {/* Hover glow effect for all */}
                        <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </li>
                ))}
                </ul>

                {/* Mobile Menu Icon & Compact Wave */}
                <div className="md:hidden flex items-center gap-3">
                     {/* Mobile Scroll Wave */}
                     <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-gray-800 flex items-end justify-center">
                        <div className="scroll-wave-fill relative w-full h-0 bg-cyan-500/80 z-0">
                            <div className="absolute -top-[10px] left-0 right-0 w-[200%] h-3 bg-cyan-500/80 rounded-[50%] animate-[spin_4s_linear_infinite] origin-center -translate-x-1/2 opacity-80"></div>
                            <div className="absolute -top-[8px] left-0 right-0 w-[200%] h-3 bg-brand-blue/80 rounded-[40%] animate-[spin_6s_linear_infinite_reverse] origin-center -translate-x-1/2 opacity-70"></div>
                        </div>
                        <Waves size={14} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white/90" />
                     </div>

                     <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                     </button>
                </div>
            </motion.nav>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    />
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        className="fixed top-24 right-4 z-50 w-64 bg-gray-900/90 border border-white/10 rounded-2xl p-4 shadow-2xl md:hidden"
                    >
                        <ul className="grid grid-cols-1 gap-2 border-b border-white/10 pb-4 mb-4">
                             {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={`#${item.name.toLowerCase()}`}
                                        onClick={() => {
                                            setActiveTab(item.name);
                                            setIsOpen(false);
                                        }}
                                        className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${
                                            activeTab === item.name ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                    >
                                        <div className={`p-2 rounded-lg ${activeTab === item.name ? 'bg-brand-blue text-white' : 'bg-gray-800'}`}>
                                            {item.icon}
                                        </div>
                                        <span className="font-medium text-lg">{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Social & CV Actions */}
                        <div className="space-y-4">
                            <div className="flex justify-center gap-4">
                                <a href="https://www.linkedin.com/in/mrbrafi2005" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-brand-blue transition-all"><Linkedin size={20} /></a>
                                <a href="https://github.com/MRBRAFI" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-brand-blue transition-all"><Github size={20} /></a>
                                <a href="mailto:devmrbrafi@gmail.com" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-brand-blue transition-all"><Mail size={20} /></a>
                            </div>
                            
                            <a 
                                href="https://docs.google.com/document/d/1DwLnXMimgNZeyHHu12ZVAX4q5u3d31KK846b9CCwDN0/export?format=pdf"
                                className="block w-full text-center py-3 bg-white/10 border border-white/20 rounded-lg text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-red hover:border-brand-red transition-all flex items-center justify-center gap-2"
                            >
                                <span>Download CV</span>
                                <Download size={16} />
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </>
  );
};

export default Header;
