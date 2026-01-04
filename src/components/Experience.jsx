import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Users, Wrench, Clock } from 'lucide-react';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const experiences = [
        {
            id: 1,
            role: "Operations & Technical Manager",
            company: "Family Printing Business",
            period: "2019 - 2025", // Assuming present or recently, adapting based on user context
            description: "Managed end-to-end business operations, delivering critical printing projects while ensuring technical reliability and customer satisfaction.",
            achievements: [
                {
                    icon: <Users size={16} />,
                    text: "Led customer communication and client relationship management."
                },
                {
                    icon: <Wrench size={16} />,
                    text: "Diagnosed and resolved complex technical issues with printing machinery."
                },
                {
                    icon: <Clock size={16} />,
                    text: "Managed project timelines to ensure 100% on-time delivery for clients."
                },
                {
                    icon: <Briefcase size={16} />,
                    text: "Oversaw daily business operations and workflow optimization."
                }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section ref={ref} id="experience" className="py-24 relative overflow-hidden">
             {/* Background Elements */}
             <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Professional</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">Experience</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-brand-red to-brand-blue mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A track record of technical problem-solving and operational leadership.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
                            
                            {/* Timeline Node (Desktop) */}
                            <div className="hidden md:flex absolute left-[50%] top-0 w-8 h-8 rounded-full bg-custom-dark-blue border border-brand-blue items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(30,136,229,0.5)]">
                                <Briefcase size={14} className="text-brand-blue" />
                            </div>

                            <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                
                                {/* Date Column */}
                                <div className="flex-1 md:text-right pt-1">
                                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-brand-blue text-sm font-mono mb-2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className="flex-1 pb-12">
                                    <motion.div 
                                        variants={itemVariants}
                                        className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,136,229,0.1)] backdrop-blur-sm"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                        
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">
                                                {exp.role}
                                            </h3>
                                            <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                                            
                                            <p className="text-gray-300 mb-6 leading-relaxed">
                                                {exp.description}
                                            </p>

                                            <div className="space-y-3">
                                                {exp.achievements.map((achievement, i) => (
                                                    <div key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                        <div className="mt-1 text-brand-red/80 shrink-0">
                                                            {achievement.icon}
                                                        </div>
                                                        <span>{achievement.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
