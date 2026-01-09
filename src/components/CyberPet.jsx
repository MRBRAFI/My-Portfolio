import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const CyberPet = () => {
    const containerRef = useRef(null);
    const leftEyeRef = useRef(null);
    const rightEyeRef = useRef(null);
    const leftPupilRef = useRef(null);
    const rightPupilRef = useRef(null);
    const [showName, setShowName] = useState(false);

    const handleClick = () => {
        setShowName(!showName);
    };

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        const handleMouseMove = (e) => {
            if (!leftEyeRef.current || !rightEyeRef.current) return;

            const moveEye = (eye, pupil) => {
                const rect = eye.getBoundingClientRect();
                const eyeCenterX = rect.left + rect.width / 2;
                const eyeCenterY = rect.top + rect.height / 2;

                const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
                const distance = Math.min(
                    6,
                    Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 6
                );

                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;

                gsap.to(pupil, {
                    x: x,
                    y: y,
                    duration: 0.1,
                    overwrite: "auto"
                });
            };

            moveEye(leftEyeRef.current, leftPupilRef.current);
            moveEye(rightEyeRef.current, rightPupilRef.current);

            // Head Rotation Logic
            const headRect = containerRef.current.getBoundingClientRect();
            const headCenterX = headRect.left + headRect.width / 2;
            const headCenterY = headRect.top + headRect.height / 2;
            
            const headX = (e.clientX - headCenterX) / 20;
            const headY = (e.clientY - headCenterY) / 20;

            gsap.to(".cyber-head-group", {
                rotationY: headX,
                rotationX: -headY,
                transformPerspective: 500,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        if (!isTouchDevice) {
            window.addEventListener('mousemove', handleMouseMove);
        }
        
        // Random Blink Animation
        const blinkInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                gsap.to([leftEyeRef.current, rightEyeRef.current], {
                    scaleY: 0.1,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1
                });
            }
        }, 3000);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(blinkInterval);
        };
    }, []);

    return (
        <div 
            ref={containerRef}
            onClick={handleClick}
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-20 h-16 flex items-end justify-center pointer-events-auto z-50 group/pet cursor-pointer"
        >


            {/* Click/Hover Tooltip: Futuristic ID Tag */}
            <AnimatePresence>
                {(showName) && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2 z-[60]"
                    >
                        <div className="relative px-4 py-1.5 bg-black/80 border border-cyan-500/50 backdrop-blur-md rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-400"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-400"></div>
                            <p className="text-[10px] font-mono font-bold text-cyan-400 tracking-[0.2em] uppercase">
                                UNIT: <span className="text-white animate-pulse">C4T-G7</span>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* SVG CYBER CAT - Upgraded Design */}
            <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] overflow-visible"
            >
                <defs>
                    <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0f172a" />
                        <stop offset="100%" stopColor="#1e293b" />
                    </linearGradient>
                    <filter id="neonBlur">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                <g className="cyber-head-group origin-bottom">
                    {/* ROBOTIC EARS - Rounded & Paneled */}
                    <g className="ears">
                        {/* Left Ear */}
                        <path d="M25 35 Q15 5 45 35" fill="url(#cyberGrad)" stroke="#22d3ee" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M24 30 Q18 15 35 30" stroke="#22d3ee" strokeWidth="0.5" opacity="0.5" fill="none" />
                        
                        {/* Right Ear */}
                        <path d="M75 35 Q85 5 55 35" fill="url(#cyberGrad)" stroke="#22d3ee" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M76 30 Q82 15 65 30" stroke="#22d3ee" strokeWidth="0.5" opacity="0.5" fill="none" />
                    </g>

                    {/* MAIN HEAD PANEL - Rounded Base */}
                    <path 
                        d="M25 85 Q20 85 20 80 L20 40 Q20 25 50 25 Q80 25 80 40 L80 80 Q80 85 75 85 Z" 
                        fill="url(#cyberGrad)" 
                        stroke="#22d3ee" 
                        strokeWidth="2" 
                        strokeLinejoin="round"
                    />

                    {/* FOREHEAD PANELING / CIRCUITRY */}
                    <path d="M35 35 Q50 30 65 35" fill="none" stroke="#22d3ee" strokeWidth="0.5" opacity="0.4" />
                    <line x1="50" y1="25" x2="50" y2="32" stroke="#22d3ee" strokeWidth="1" opacity="0.6" />

                    {/* SENSORY ANTENNA */}
                    <g className="antenna">
                        <line x1="50" y1="25" x2="50" y2="12" stroke="#22d3ee" strokeWidth="1.5" />
                        <circle cx="50" cy="10" r="3" fill="#ef4444" filter="url(#neonBlur)">
                            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                        </circle>
                    </g>
                    
                    {/* CYBER EYES - More Tech Look */}
                    <g className="eyes-system shadow-inner">
                        <g ref={leftEyeRef} transform="translate(38, 52)">
                            <rect x="-10" y="-8" width="20" height="16" rx="4" fill="#000" stroke="#22d3ee" strokeWidth="1" />
                            <circle ref={leftPupilRef} r="4" fill="#22d3ee" filter="url(#neonBlur)" />
                            {/* Scanning line for eyes */}
                            <line x1="-8" y1="-4" x2="8" y2="-4" stroke="#22d3ee" strokeWidth="0.5" opacity="0.2">
                                <animate attributeName="y1" values="-6;6;-6" dur="3s" repeatCount="indefinite" />
                                <animate attributeName="y2" values="-6;6;-6" dur="3s" repeatCount="indefinite" />
                            </line>
                        </g>

                        <g ref={rightEyeRef} transform="translate(62, 52)">
                            <rect x="-10" y="-8" width="20" height="16" rx="4" fill="#000" stroke="#22d3ee" strokeWidth="1" />
                            <circle ref={rightPupilRef} r="4" fill="#22d3ee" filter="url(#neonBlur)" />
                             {/* Scanning line for eyes */}
                             <line x1="-8" y1="-4" x2="8" y2="-4" stroke="#22d3ee" strokeWidth="0.5" opacity="0.2">
                                <animate attributeName="y1" values="-6;6;-6" dur="3s" repeatCount="indefinite" />
                                <animate attributeName="y2" values="-6;6;-6" dur="3s" repeatCount="indefinite" />
                            </line>
                        </g>
                    </g>

                    {/* TECH WHISKERS */}
                    <g stroke="#22d3ee" strokeWidth="0.5" opacity="0.6">
                        <line x1="25" y1="65" x2="10" y2="60" />
                        <line x1="25" y1="72" x2="10" y2="72" />
                        <line x1="75" y1="65" x2="90" y2="60" />
                        <line x1="75" y1="72" x2="90" y2="72" />
                    </g>

                    {/* VOCALIZER / MOUTH */}
                    <path d="M42 75 Q50 82 58 75" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                </g>
            </svg>
            
            {/* Holographic Platform Base */}
            <div className="absolute -bottom-1 w-16 h-1 flex justify-center">
                <div className="w-full h-full bg-cyan-400/30 blur-md rounded-full animate-pulse"></div>
                <div className="absolute top-0 w-8 h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
            </div>
        </div>
    );
};

export default CyberPet;
