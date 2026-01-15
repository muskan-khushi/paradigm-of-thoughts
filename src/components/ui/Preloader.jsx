import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Shorter load time for better UX (2.0s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          // UPDATED: Background is now Warm White to match site theme
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f4f4f0]"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
          {/* --- LOGO IMAGE (KEPT AS REQUESTED) --- */}
          <motion.img 
            src="/images/logo.png"
            alt="Studio POT"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-20 md:h-32 w-auto object-contain z-10"
          />

          {/* Loading Line */}
          {/* UPDATED: bg-gray-300 so it is visible on the white background */}
          <div className="w-64 h-[1px] bg-gray-300 mt-8 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-pot-gold"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
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