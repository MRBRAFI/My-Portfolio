import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  FileType, 
  Atom, 
  Wind, 
  Server, 
  Database, 
  Globe, 
  Flame, 
  GitBranch, 
  Github, 
  Terminal, 
  Zap, 
  Figma 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', percentage: 95, icon: <FileType size={24} />, color: '#E34F26' },
      { name: 'CSS3', percentage: 90, icon: <Palette size={24} />, color: '#1572B6' },
      { name: 'JavaScript', percentage: 85, icon: <Code2 size={24} />, color: '#F7DF1E' },
      { name: 'React.js', percentage: 88, icon: <Atom size={24} />, color: '#61DAFB' },
      { name: 'TailwindCSS', percentage: 92, icon: <Wind size={24} />, color: '#38B2AC' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', percentage: 82, icon: <Server size={24} />, color: '#339933' },
      { name: 'Express.js', percentage: 80, icon: <Zap size={24} />, color: '#000000' }, // Using black/white for express usually, distinct color here
      { name: 'MongoDB', percentage: 78, icon: <Database size={24} />, color: '#47A248' },
      { name: 'REST API', percentage: 85, icon: <Globe size={24} />, color: '#007ACC' },
      { name: 'Firebase', percentage: 75, icon: <Flame size={24} />, color: '#FFCA28' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', percentage: 88, icon: <GitBranch size={24} />, color: '#F05032' },
      { name: 'GitHub', percentage: 90, icon: <Github size={24} />, color: '#181717' },
      { name: 'VS Code', percentage: 95, icon: <Terminal size={24} />, color: '#007ACC' },
      { name: 'Postman', percentage: 82, icon: <Globe size={24} />, color: '#FF6C37' }, // Using Globe as generic API tool icon
      { name: 'Figma', percentage: 70, icon: <Figma size={24} />, color: '#F24E1E' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-transparent px-6 relative overflow-hidden">


      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6"
          >
            My Tech Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A curated list of technologies I use to build amazing digital experiences.
          </motion.p>
        </div>

        <div className="space-y-20">
            {skillCategories.map((category, catIndex) => (
                <div key={category.title}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="h-1 w-12 bg-brand-red rounded-full"></div>
                        <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {category.skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 relative overflow-hidden group hover:border-gray-500 transition-colors"
                            >
                                {/* Hover Gradient bg */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                    style={{ backgroundColor: skill.color }}
                                ></div>

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div 
                                        className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-500 bg-gray-700/50"
                                        style={{ color: skill.color }}
                                    >
                                        {skill.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{skill.name}</h4>
                                    
                                    {/* Circular Progress (Visual approximation using gradient border or just a bar) */}
                                    <div className="w-full mt-2">
                                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                                            <span>Proficiency</span>
                                            <span>{skill.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="h-full rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                                                style={{ backgroundColor: skill.color }}
                                            ></motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
