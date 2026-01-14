import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading time (2.5 seconds)
    // In a real app, you might track actual image loading here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f0f0f]"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }} // Slide up like a curtain
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
          {/* Pulsing Logo Text */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-serif text-4xl md:text-6xl text-[#E6E5E3] tracking-tight mix-blend-difference z-10"
          >
            POT
          </motion.h1>

          {/* Loading Line */}
          <div className="w-64 h-[1px] bg-white/10 mt-8 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-pot-gold"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.3, ease: "easeInOut" }}
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="font-sans text-[10px] text-pot-gold uppercase tracking-[0.3em] mt-4 absolute bottom-12"
          >
            Paradigm of Thoughts
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;