import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const images = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax Effect
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-pot-black">
      
      {/* Background Slider */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark Overlay */}
        
        <AnimatePresence mode='wait'>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Luxury Interior"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }} // Slow, ethereal fade
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mix-blend-overlay">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-white tracking-[0.4em] text-xs md:text-sm uppercase mb-6"
        >
          Paradigm of Thoughts
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-9xl text-white leading-tight mb-8"
        >
          Designing Soul, <br />
          <span className="italic">Space</span> & Synergy.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a href="#projects" className="inline-block border border-white/40 px-8 py-3 text-white font-sans text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500">
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-12 right-12 z-20 flex space-x-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 transition-all duration-500 ${
              idx === currentIndex ? "w-8 bg-white" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;