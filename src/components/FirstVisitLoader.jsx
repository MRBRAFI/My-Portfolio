import React, { useState, useEffect } from 'react';

const FirstVisitLoader = ({ onLoadComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('entering'); // entering, loading, exiting

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Stage transitions
    const stageTimer = setTimeout(() => {
      setStage('loading');
    }, 500);

    const exitTimer = setTimeout(() => {
      setStage('exiting');
    }, 3500);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadComplete) {
        onLoadComplete();
      }
    }, 4500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(stageTimer);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#051025] transition-opacity duration-1000 ${
        stage === 'exiting' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#E53935_0%,transparent_50%),radial-gradient(circle_at_30%_70%,#1E88E5_0%,transparent_40%)] opacity-20 animate-pulse"></div>
      
      {/* Star field */}
      <div className="stars"></div>

      {/* Main loader container */}
      <div className="relative flex items-end justify-center gap-2 md:gap-4">
        {/* Left Panel - Red Theme */}
        <div 
          className={`loader-panel relative w-24 md:w-44 bg-gradient-to-b from-[#E53935] to-[#B71C1C] shadow-2xl transition-all duration-1000 ${
            stage === 'entering' ? 'h-0 opacity-0' : 'h-40 md:h-64 opacity-100'
          } ${
            stage === 'exiting' ? 'h-0 opacity-0' : ''
          }`}
          style={{
            clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
            transitionDelay: '0ms',
            boxShadow: '0 0 30px rgba(229, 57, 53, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-0 animate-pulse-glow"></div>
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="scan-line-loader"></div>
          </div>
        </div>

        {/* Center Panel (Tallest) - Dark Metallic/Mixed Theme */}
        <div 
          className={`loader-panel relative w-32 md:w-56 bg-gradient-to-b from-slate-200 to-slate-400 shadow-2xl transition-all duration-1000 ${
            stage === 'entering' ? 'h-0 opacity-0' : 'h-56 md:h-80 opacity-100'
          } ${
            stage === 'exiting' ? 'h-0 opacity-0' : ''
          }`}
          style={{
            clipPath: 'polygon(10% 0%, 90% 0%, 90% 100%, 10% 100%)',
            transitionDelay: '150ms',
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.2), inset 0 0 30px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 animate-pulse-glow" style={{ animationDelay: '0.2s' }}></div>
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="scan-line-loader" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Right Panel - Blue Theme */}
        <div 
          className={`loader-panel relative w-24 md:w-44 bg-gradient-to-b from-[#1E88E5] to-[#1565C0] shadow-2xl transition-all duration-1000 ${
            stage === 'entering' ? 'h-0 opacity-0' : 'h-40 md:h-64 opacity-100'
          } ${
            stage === 'exiting' ? 'h-0 opacity-0' : ''
          }`}
          style={{
            clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)',
            transitionDelay: '300ms',
            boxShadow: '0 0 30px rgba(30, 136, 229, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-0 animate-pulse-glow" style={{ animationDelay: '0.4s' }}></div>
          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="scan-line-loader" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Loading text and progress */}
      <div className="absolute bottom-16 md:bottom-24 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white/80 text-sm md:text-base font-light tracking-[0.3em] mb-4 uppercase">
          {progress < 100 ? 'Loading' : 'Ready'}
        </div>
        
        {/* Progress bar */}
        <div className="w-64 md:w-96 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 transition-all duration-300 ease-out rounded-full"
            style={{ 
              width: `${progress}%`,
              boxShadow: '0 0 20px rgba(229, 57, 53, 0.8)'
            }}
          ></div>
        </div>
        
        {/* Percentage */}
        <div className="text-white/60 text-xs md:text-sm font-mono mt-2 tracking-wider">
          {progress}%
        </div>
      </div>

      {/* Cyber grid effect in background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FirstVisitLoader;
