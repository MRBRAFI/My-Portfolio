import React, { useState, useEffect } from 'react';

const FirstVisitLoader = ({ onLoadComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState('entering'); // entering, loading, exiting

  useEffect(() => {

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
      {/* Main loader container */}
      <div className="relative flex items-end justify-center gap-2 md:gap-4">
        {/* Left Panel - Red Theme */}
        <div 
          className={`loader-panel relative w-24 md:w-44 bg-gradient-to-b from-[#E53935] to-[#B71C1C] shadow-2xl transition-all duration-1000 ${
            stage === 'entering' ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0 h-40 md:h-64'
          } ${
            stage === 'exiting' ? 'opacity-0 scale-95' : ''
          }`}
          style={{
            transitionDelay: '0ms',
            boxShadow: '0 0 30px rgba(229, 57, 53, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-0 animate-pulse-glow"></div>
        </div>

        {/* Center Panel (Tallest) - Dark Metallic/Mixed Theme */}
        <div 
          className={`loader-panel relative w-32 md:w-56 bg-gradient-to-b from-slate-200 to-slate-400 shadow-2xl transition-all duration-1000 ${
            stage === 'entering' ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0 h-56 md:h-80'
          } ${
            stage === 'exiting' ? 'opacity-0 scale-95' : ''
          }`}
          style={{
            transitionDelay: '150ms',
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.2), inset 0 0 30px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 animate-pulse-glow" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Right Panel - Blue Theme */}
        <div 
          className={`loader-panel relative w-24 md:w-44 bg-gradient-to-b from-[#1E88E5] to-[#1565C0] shadow-2xl transition-all duration-1000 ${
            stage === 'entering' ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0 h-40 md:h-64'
          } ${
            stage === 'exiting' ? 'opacity-0 scale-95' : ''
          }`}
          style={{
            transitionDelay: '300ms',
            boxShadow: '0 0 30px rgba(30, 136, 229, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Animated glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-0 animate-pulse-glow" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Loading text and progress removed as requested */}
    </div>
  );
};

export default FirstVisitLoader;
