import React from 'react';
import { motion } from 'framer-motion';

const GlowingBorders = () => {
  // Synchronized timing for all lines
  const syncDuration = 2; // Fast 2-second cycle
  const lineHeight = 300; // Taller lines for more presence

  return (
    <>
      {/* Vertical Line 1 - Left Side (Red) */}
      <div className="fixed top-0 left-0 h-full w-[1.5px] z-[100] bg-red-500/20 overflow-hidden pointer-events-none">
        <motion.div
            className="w-full bg-gradient-to-b from-transparent via-red-500 to-transparent shadow-[0_0_40px_12px_rgba(229,57,53,1),0_0_80px_20px_rgba(229,57,53,0.7),0_0_120px_30px_rgba(229,57,53,0.4)]"
            style={{ height: `${lineHeight}px` }}
            initial={{ y: '-100%' }}
            animate={{ y: '100vh' }}
            transition={{
                repeat: Infinity,
                duration: syncDuration,
                ease: 'linear',
            }}
        />
      </div>

      {/* Vertical Line 2 - Beside Red (Blue) - Synchronized */}
      <div className="fixed top-0 left-[4px] h-full w-[1.5px] z-[100] bg-blue-500/20 overflow-hidden pointer-events-none">
        <motion.div
            className="w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_40px_12px_rgba(30,136,229,1),0_0_80px_20px_rgba(30,136,229,0.7),0_0_120px_30px_rgba(30,136,229,0.4)]"
            style={{ height: `${lineHeight}px` }}
            initial={{ y: '-100%' }}
            animate={{ y: '100vh' }}
            transition={{
                repeat: Infinity,
                duration: syncDuration,
                ease: 'linear',
            }}
        />
      </div>
    </>
  );
};

export default GlowingBorders;
