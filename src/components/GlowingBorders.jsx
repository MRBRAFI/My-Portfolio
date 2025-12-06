import React from 'react';
import { motion } from 'framer-motion';

const GlowingBorders = () => {
  return (
    <>
      {/* Vertical Line - Left Side (Cyan) */}
      <div className="fixed top-0 left-0 h-full w-[2px] z-[100] bg-cyan-500/10 overflow-hidden pointer-events-none">
        <motion.div
            className="w-full h-[250px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_40px_12px_rgba(34,211,238,1),0_0_80px_20px_rgba(34,211,238,0.7),0_0_120px_30px_rgba(34,211,238,0.4)]"
            initial={{ y: '-100%' }}
            animate={{ y: '100vh' }}
            transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'linear',
            }}
        />
      </div>

      {/* Vertical Line - Beside Blue Line (Red) */}
      <div className="fixed top-0 left-[4px] h-full w-[2px] z-[100] bg-red-500/10 overflow-hidden pointer-events-none">
        <motion.div
            className="w-full h-[250px] bg-gradient-to-b from-transparent via-red-500 to-transparent shadow-[0_0_40px_12px_rgba(239,68,68,1),0_0_80px_20px_rgba(239,68,68,0.7),0_0_120px_30px_rgba(239,68,68,0.4)]"
            initial={{ y: '-100%' }}
            animate={{ y: '100vh' }}
            transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: 'linear',
            }}
        />
      </div>
    </>
  );
};

export default GlowingBorders;
