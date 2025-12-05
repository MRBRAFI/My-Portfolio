import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CyberPet = () => {
    const containerRef = useRef(null);
    const leftEyeRef = useRef(null);
    const rightEyeRef = useRef(null);
    const leftPupilRef = useRef(null);
    const rightPupilRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!leftEyeRef.current || !rightEyeRef.current) return;

            const moveEye = (eye, pupil) => {
                const rect = eye.getBoundingClientRect();
                const eyeCenterX = rect.left + rect.width / 2;
                const eyeCenterY = rect.top + rect.height / 2;

                const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
                const distance = Math.min(
                    6, // Increased range
                    Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 6 // Increased sensitivity
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
            
            const headX = (e.clientX - headCenterX) / 20; // Limit rotation
            const headY = (e.clientY - headCenterY) / 20;

            gsap.to(".cyber-head-group", {
                rotationY: headX,
                rotationX: -headY,
                transformPerspective: 500,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        
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
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-12 flex items-end justify-center pointer-events-none z-50"
        >
            {/* SVG CYBER CAT */}
            <svg 
                viewBox="0 0 100 80" 
                className="w-full h-full drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] overflow-visible"
            >
                <g className="cyber-head-group origin-bottom">
                    {/* Body/Head Shape */}
                    <path 
                        d="M20 80 L30 40 L20 20 L40 30 L50 25 L60 30 L80 20 L70 40 L80 80 Z" 
                        fill="#0f172a" 
                        stroke="#22d3ee" 
                        strokeWidth="2"
                        strokeLinejoin="round" 
                    />
                    
                    {/* Ears */}
                    <path d="M20 20 L25 5 L40 30" fill="#0f172a" stroke="#22d3ee" strokeWidth="2" />
                    <path d="M80 20 L75 5 L60 30" fill="#0f172a" stroke="#22d3ee" strokeWidth="2" />

                    {/* Antenna */}
                    <path d="M50 25 L50 10" stroke="#ef4444" strokeWidth="2" />
                    <circle cx="50" cy="8" r="3" fill="#ef4444" className="animate-pulse" />

                    {/* Eyes Container */}
                    <g ref={leftEyeRef} transform="translate(35, 45)">
                        <ellipse rx="8" ry="6" fill="#000" stroke="#22d3ee" strokeWidth="1" />
                        <circle ref={leftPupilRef} r="3" fill="#22d3ee" />
                    </g>

                    <g ref={rightEyeRef} transform="translate(65, 45)">
                        <ellipse rx="8" ry="6" fill="#000" stroke="#22d3ee" strokeWidth="1" />
                        <circle ref={rightPupilRef} r="3" fill="#22d3ee" />
                    </g>

                    {/* Mouth */}
                    <path d="M45 60 L50 63 L55 60" stroke="#22d3ee" strokeWidth="1" fill="none" />
                </g>
            </svg>
            
            {/* Holographic Platform Effect */}
            <div className="absolute -bottom-1 w-12 h-1 bg-cyan-400/50 blur-sm rounded-full"></div>
        </div>
    );
};

export default CyberPet;
