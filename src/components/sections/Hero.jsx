import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    title: "Designing Soul,",
    subtitle: "Space & Synergy."
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    title: "Curating timeless",
    subtitle: "Experience."
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    title: "Where Art meets",
    subtitle: "Functionality."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0f0f0f]">
      
      {/* BACKGROUND SLIDER */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* 1. The Image */}
          <img 
            src={heroSlides[currentSlide].image} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          
          {/* 2. THE FIX: Cinematic Overlay 
             This adds a 30% black tint over the image so text is readable.
          */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Optional: Gradient at the bottom to help the text specifically */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* TEXT CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="overflow-hidden">
          <motion.p 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-sans text-pot-gold text-xs md:text-sm tracking-[0.4em] uppercase mb-6"
          >
            Paradigm of Thoughts
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1 
            key={currentSlide}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            // Changed color to a Soft White (#E6E5E3) so it pops against the dark overlay
            className="font-serif text-5xl md:text-8xl leading-[1.1] text-[#E6E5E3] drop-shadow-md"
          >
            {heroSlides[currentSlide].title} <br />
            <span className="italic text-white opacity-80">{heroSlides[currentSlide].subtitle}</span>
          </motion.h1>
        </div>

        {/* View Projects Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 group cursor-pointer"
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="font-sans text-xs text-white tracking-widest uppercase border-b border-white/30 pb-2 group-hover:text-pot-gold group-hover:border-pot-gold transition-all duration-500">
            View Projects
          </span>
        </motion.div>
      </div>

      {/* SLIDER INDICATORS */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-20">
        {heroSlides.map((_, index) => (
          <div 
            key={index} 
            className={`h-[2px] transition-all duration-500 ${
              index === currentSlide ? 'w-12 bg-pot-gold' : 'w-6 bg-white/20'
            }`} 
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;