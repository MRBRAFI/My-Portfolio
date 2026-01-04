import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  ArrowUp, 
  Zap,
  Linkedin,
  Github,
  Globe
} from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: 'Initiate protocol: Web Design?',
    answer: 'Affirmative. I construct high-fidelity designs using Figma and translate them into React-based interfaces.',
  },
  {
    question: 'Project timeline estimation?',
    answer: 'Variable based on complexity. Standard marketing sites deploy in 4-6 weeks.',
  },
  {
    question: 'Security protocols?',
    answer: 'We operate with strict confidentiality. White-label services available for agency partners.',
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/5 border border-white/10 hover:border-brand-blue/50 rounded-lg overflow-hidden mb-4 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none bg-black/40 hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
            <span className="text-brand-blue font-mono text-xs hidden md:block">{isOpen ? '[-]' : '[+]'}</span>
            <span className="font-semibold text-white text-lg">{question}</span>
        </div>
        {isOpen ? <ChevronUp className="text-brand-red" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 pt-0 text-gray-300 leading-relaxed font-mono text-sm border-t border-white/5 bg-black/20">
              {`> ${answer}`}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const containerRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  useGSAP(() => {
    // 1. Reveal Footer Content
    gsap.from(".footer-content", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
        }
    });

  }, { scope: containerRef });

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Submitted:', formState);
      alert('Transmission Sent! (Simulated)');
      setFormState({ name: '', email: '', message: '' });
  };

  const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/mrbrafi2005' },
    { icon: <Github size={18} />, href: 'https://github.com/MRBRAFI' },
    { icon: <Mail size={18} />, href: 'mailto:devmrbrafi@gmail.com' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <footer ref={containerRef} id="contact" className="relative pt-32 pb-10 overflow-hidden bg-black">
        
        {/* --- 1. PERSPECTIVE GRID FLOOR --- */}
        <div className="absolute bottom-0 left-0 right-0 h-[600px] pointer-events-none z-0">
             <div className="w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,transparent_50%,rgba(30,136,229,0.1)_100%)]"></div>
             {/* Grid Lines */}
             <div 
                className="absolute inset-0 bg-[linear-gradient(rgba(30,136,229,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(30,136,229,0.2)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"
                style={{ transform: "perspective(500px) rotateX(60deg) translateY(0px) scale(2)", transformOrigin: "bottom center" }}
             ></div>
        </div>

        {/* --- 2. INFINITE SCROLLING MARQUEE --- */}
        <div className="absolute top-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none select-none">
            <div className="inline-block animate-[marquee_20s_linear_infinite]">
                 <span className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white to-transparent mx-4">DEVELOPER DESIGNER CREATOR</span>
                 <span className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white to-transparent mx-4">DEVELOPER DESIGNER CREATOR</span>
            </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row gap-16 px-6">
        
            {/* LEFT: Contact & Info */}
            <div className="flex-1 space-y-12 footer-content">
                <div>
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-6">
                        <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></div>
                        <span className="text-brand-blue font-mono text-xs tracking-widest uppercase">Signal Open</span>
                     </div>
                     
                     <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
                        Let's <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-cyan-400 to-purple-600 animate-pulse">Collaborate</span>
                     </h2>
                     <p className="text-gray-400 text-lg max-w-xl border-l-2 border-brand-red/50 pl-6">
                        Ready to upgrade your digital presence? Signal me for web development, UI design, or technical consultation.
                     </p>
                </div>

                <div className="grid gap-6">
                    {/* Social Cards with Holographic Hover */}
                    <a href="mailto:devmrbrafi@gmail.com" className="group relative bg-gray-900/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:border-brand-blue/50 transition-all duration-300 overflow-hidden block">
                         <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                         <div className="relative z-10 w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:rotate-12 transition-transform">
                            <Mail size={24} />
                         </div>
                         <div className="relative z-10">
                             <p className="text-xs text-gray-500 font-mono mb-1">EMAIL_TRANSMISSION</p>
                             <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-brand-blue transition-colors">devmrbrafi@gmail.com</h3>
                         </div>
                    </a>

                    <a href="https://wa.me/8801971789176" target="_blank" rel="noopener noreferrer" className="group relative bg-gray-900/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:border-green-500/50 transition-all duration-300 overflow-hidden block">
                         <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                         <div className="relative z-10 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 group-hover:rotate-12 transition-transform">
                            <MessageCircle size={24} />
                         </div>
                         <div className="relative z-10">
                             <p className="text-xs text-gray-500 font-mono mb-1">SECURE_CHAT</p>
                             <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-green-500 transition-colors">+880 19717 89176</h3>
                         </div>
                    </a>
                </div>
            </div>

            {/* RIGHT: Form & FAQ */}
            <div className="flex-1 space-y-12 footer-content">
                
                {/* Holographic Form */}
                <div className="relative p-8 rounded-3xl bg-black/60 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl group hover:border-white/20 transition-all">
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-blue rounded-tl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-red rounded-br-xl"></div>

                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Zap size={20} className="text-yellow-400 fill-yellow-400" /> Send Message
                    </h3>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 ml-1">CODENAME</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formState.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter Name" 
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue focus:shadow-[0_0_15px_rgba(30,136,229,0.2)] focus:outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 ml-1">COMM_ID</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formState.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter Email" 
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue focus:shadow-[0_0_15px_rgba(30,136,229,0.2)] focus:outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-gray-500 ml-1">TRANSMISSION_DATA</label>
                            <textarea 
                                name="message"
                                value={formState.message}
                                onChange={handleInputChange}
                                rows="4"
                                placeholder="Type your message..." 
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue focus:shadow-[0_0_15px_rgba(30,136,229,0.2)] focus:outline-none transition-all resize-none"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full relative overflow-hidden group/btn bg-white text-black font-black py-4 rounded-xl hover:scale-[1.01] transition-all">
                            <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-widest">
                                Initiate Send <Send size={16} />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-cyan-400 to-brand-blue opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </form>
                </div>

                 {/* FAQ */}
                 <div>
                    <h3 className="text-white font-bold mb-4 opacity-50 uppercase tracking-widest text-sm flex items-center gap-2">
                        <span className="w-1 h-4 bg-brand-red"></span> System Data
                    </h3>
                    {faqData.map((item, index) => (
                        <FAQItem key={index} {...item} />
                    ))}
                 </div>

            </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="container mx-auto max-w-7xl px-6 mt-20 pt-10 border-t border-white/5 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Copyright */}
                <div className="text-center md:text-left order-3 md:order-1">
                    <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} MRB RAFI. <br className="md:hidden" /> All Systems Functional.
                    </p>
                </div>

                {/* Social Links Central */}
                <div className="flex justify-center gap-4 order-1 md:order-2">
                    {socialLinks.map((link, i) => (
                        <a 
                            key={i} 
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-blue hover:bg-brand-blue/10 transition-all duration-300"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                {/* Quick Links & Scroll Top */}
                <div className="flex flex-col md:flex-row items-center justify-end gap-6 order-2 md:order-3">
                    <div className="hidden lg:flex gap-6">
                        {quickLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-brand-blue transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    
                    <button 
                        onClick={scrollToTop}
                        className="group px-6 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-widest">System Lift</span>
                        <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>

    </footer>
  );
};

export default Footer;
