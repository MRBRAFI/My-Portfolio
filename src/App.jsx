import React, { useState, useEffect } from 'react';
import FirstVisitLoader from './components/FirstVisitLoader';
import GlowingBorders from './components/GlowingBorders';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [showLoader, setShowLoader] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    // const hasVisited = localStorage.getItem('hasVisitedPortfolio');
    
    // For development/showcase: Show loader every time
    // If you want it only once per session, use sessionStorage
    // If you want it strictly one time ever, uncomment the localStorage lines
    
    // if (!hasVisited) {
      setShowLoader(true);
      // localStorage.setItem('hasVisitedPortfolio', 'true');
    // } else {
    //   setContentVisible(true);
    // }
  }, []);

  const handleLoadComplete = () => {
    setShowLoader(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => {
      setContentVisible(true);
    }, 100);
  };

  return (
    <>
      {showLoader && <FirstVisitLoader onLoadComplete={handleLoadComplete} />}
      
      <div 
        className={`bg-custom-dark-blue min-h-screen text-white font-poppins selection:bg-brand-red selection:text-white overflow-x-hidden relative transition-opacity duration-1000 ${
          contentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <GlowingBorders />
        {/* Global Background Gradients (CSS backup) */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_15%_50%,#E53935_0%,transparent_25%),radial-gradient(circle_at_85%_30%,#1E88E5_0%,transparent_25%),linear-gradient(to_bottom,#051025_0%,#0D47A1_100%)] pointer-events-none z-0"></div>
        {/* Global Cyber Grid */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
        <div className="stars z-0"></div>
        <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
        </main>
        <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
