import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax for the background title - moves slightly slower than scroll
  const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="bg-[#E6E5E3] min-h-screen relative z-30 py-32 md:py-48 px-6 overflow-hidden"
    >
      {/* --- BACKGROUND WATERMARK TITLE (FIXED FEEL) --- */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.div style={{ y: yTitle }} className="opacity-[0.07]">
          <h1 className="font-serif text-[18vw] leading-[0.8] text-[#1a1a1a] text-center tracking-tighter">
            PARADIGM <br />
            <span className="italic">OF THOUGHTS</span>
          </h1>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* 1. Header with simple line */}
        <div className="text-center mb-32 md:mb-48">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="w-px h-24 bg-[#1a1a1a] mx-auto mb-8 origin-top"
          />
          <span className="font-sans text-[#1a1a1a] text-xs tracking-[0.4em] uppercase">
            Est. Bengaluru 2024
          </span>
        </div>

        {/* 2. THE NARRATIVE - Clean, Center, Editorial */}
        <div className="space-y-32 md:space-y-48">
          
          <EditorialBlock number="01">
            <span className="font-serif text-3xl md:text-4xl text-[#1a1a1a] leading-tight">
              At POT (Paradigm Of Thoughts), we believe that great design goes beyond aesthetics—it’s a narrative that celebrates the synergy of <span className="italic text-pot-gold">thought, space, and soul.</span>
            </span>
          </EditorialBlock>

          <EditorialBlock number="02">
            <span className="font-serif text-xl md:text-2xl text-[#4a4a4a] leading-relaxed">
              Our approach is rooted in collaboration. By working with passionate designers, skilled artisans, and visionary clients, we transform spaces into detailed works of art. Whether it’s a residence or a commercial space, every project is a testament to our belief in the power of storytelling.
            </span>
          </EditorialBlock>

          <EditorialBlock number="03">
            <span className="font-serif text-xl md:text-2xl text-[#4a4a4a] leading-relaxed">
              At POT, we understand that every space has its own personality. That’s why we approach each project with flexibility and an open mind. Our process evolves with the invaluable input of stakeholders, culminating in spaces that strike a harmonious balance—almost unnoticed yet profoundly felt.
            </span>
          </EditorialBlock>

          {/* 3. FOUNDER SIGNATURE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center pt-24"
          >
            <div className="w-full h-px bg-[#1a1a1a]/10 max-w-xs mx-auto mb-12" />
            
            <p className="font-serif text-5xl md:text-6xl text-[#1a1a1a] mb-4 italic">
              Vineet Patel
            </p>
            <p className="font-sans text-[#1a1a1a]/60 text-[10px] tracking-[0.3em] uppercase">
              Founder & Principal Designer
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- SUB COMPONENT FOR TEXT BLOCKS ---
const EditorialBlock = ({ children, number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10%" }}
      className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
    >
      {/* Number styling */}
      <span className="font-sans text-pot-gold text-xs font-bold tracking-widest pt-2 flex-shrink-0 border-t border-pot-gold/50 w-12">
        {number}
      </span>
      
      {/* Text Body */}
      <div className="max-w-2xl">
        {children}
      </div>
    </motion.div>
  );
};

export default About;