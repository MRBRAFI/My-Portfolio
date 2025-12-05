import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
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
            <div className="p-6 pt-0 text-gray-300 leading-relaxed font-mono text-sm border-t border-white/5">
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

  const handleSubmit = (e) => {
      e.preventDefault();
      // Logic for sending
      alert('Transmission Sent! (Simulated)');
  };

  return (
    <footer ref={containerRef} id="contact" className="bg-transparent py-24 px-6 relative overflow-hidden">
        


      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row gap-16">
        
        {/* LEFT: Contact & Info */}
        <div className="flex-1 space-y-12">
            <div>
                 <p className="reveal-text text-brand-red font-mono text-xs tracking-[0.5em] mb-4">COMMUNICATION_LINK_ESTABLISHED</p>
                 <h2 className="reveal-text text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Collaborate</span>
                 </h2>
                 <p className="reveal-text text-gray-400 text-lg max-w-xl">
                    Ready to upgrade your digital presence? Signal me for web development, UI design, or technical consultation.
                 </p>
            </div>

            <div className="grid gap-6">
                <div className="group relative bg-gray-900/50 border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-white/5 transition-colors overflow-hidden">
                     {/* Hover Glow */}
                     <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                     <div className="relative z-10 w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                     </div>
                     <div className="relative z-10">
                         <p className="text-xs text-gray-400 font-mono mb-1">EMAIL_TRANSMISSION</p>
                         <h3 className="text-xl md:text-2xl font-bold text-white">devmrbrafi@gmail.com</h3>
                     </div>
                </div>

                <div className="group relative bg-gray-900/50 border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-white/5 transition-colors overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                     <div className="relative z-10 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                        <MessageCircle size={24} />
                     </div>
                     <div className="relative z-10">
                         <p className="text-xs text-gray-400 font-mono mb-1">SECURE_CHAT (WHATSAPP)</p>
                         <h3 className="text-xl md:text-2xl font-bold text-white">+880 19717 89176</h3>
                     </div>
                </div>

                <div className="group relative bg-gray-900/50 border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-white/5 transition-colors overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                     <div className="relative z-10 w-12 h-12 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform">
                        <MapPin size={24} />
                     </div>
                     <div className="relative z-10">
                         <p className="text-xs text-gray-400 font-mono mb-1">BASE_STATION</p>
                         <h3 className="text-xl md:text-2xl font-bold text-white">Panchagarh, Bangladesh</h3>
                     </div>
                </div>
            </div>
        </div>

        {/* RIGHT: Form & FAQ */}
        <div className="flex-1 space-y-12">
            
            {/* Holographic Form */}
            <div className="relative p-8 rounded-3xl bg-gray-900 border border-white/10 shadow-2xl">
                {/* Neon Border Effect */}
                <div className="absolute inset-0 rounded-3xl border border-brand-blue/30 shadow-[0_0_15px_rgba(30,136,229,0.1)] pointer-events-none"></div>

                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Send size={20} className="text-brand-blue" /> Send Message
                </h3>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-gray-400 ml-1">CODENAME</label>
                            <input 
                                type="text" 
                                placeholder="Enter Name" 
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-gray-400 ml-1">COMM_ID</label>
                            <input 
                                type="email" 
                                placeholder="Enter Email" 
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue transition-all"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-gray-400 ml-1">TRANSMISSION_DATA</label>
                        <textarea 
                            rows="4"
                            placeholder="Type your message..." 
                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue transition-all resize-none"
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-brand-blue to-cyan-500 text-black font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(30,136,229,0.4)] hover:scale-[1.02] transition-all uppercase tracking-widest">
                        Initiate Send
                    </button>
                </form>
            </div>

             {/* FAQ - Compact */}
             <div>
                <h3 className="text-white font-bold mb-4 opacity-50 uppercase tracking-widest text-sm">System FAQ</h3>
                {faqData.map((item, index) => (
                    <FAQItem key={index} {...item} />
                ))}
             </div>

        </div>

      </div>
      
      <div className="text-center mt-24 pt-8 border-t border-white/5">
        <p className="text-gray-500 font-mono text-sm">
            &copy; {new Date().getFullYear()} MRB RAFI. SYSTEMS ONLINE.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
