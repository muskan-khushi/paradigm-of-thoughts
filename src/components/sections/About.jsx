import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1]);

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="bg-[#FAF9F6] min-h-screen relative z-30 py-32 md:py-48 px-6 overflow-hidden"
    >
      {/* --- LUXURY BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient meshes */}
        <motion.div 
          style={{ y: y1, scale }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-pot-gold/15 via-pot-gold/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y2, rotate }}
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-pot-gold/12 via-transparent to-pot-gold/5 rounded-full blur-3xl"
        />
        
        {/* Geometric luxury patterns */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.2, 0.1]) }}
          className="absolute inset-0"
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="luxury-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#luxury-grid)" />
          </svg>
        </motion.div>
      </div>

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(250,249,246,0.6)_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 1. DRAMATIC HEADER */}
        <div className="mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-8 border border-pot-gold/15" />
            <div className="absolute -inset-4 border border-pot-gold/10" />
            
            <div className="relative py-12 text-center">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.8, delay: 0.3, ease: [0.87, 0, 0.13, 1] }}
                viewport={{ once: true }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-pot-gold to-transparent"
              />
              
              <motion.span
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
                transition={{ duration: 1.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="block font-sans text-pot-gold text-[10px] uppercase mb-6"
              >
                About
              </motion.span>
              
              <h2 className="font-serif text-5xl md:text-7xl text-[#1a1a1a] tracking-tight mb-2">
                Paradigm Of Thoughts
              </h2>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.8, delay: 0.3, ease: [0.87, 0, 0.13, 1] }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-pot-gold to-transparent"
              />
            </div>
          </motion.div>
        </div>

        {/* 2. LUXURY CONTENT BLOCKS */}
        <div className="space-y-24 md:space-y-32">
          
          {/* Block 1 - Hero Statement */}
          <LuxuryBlock delay={0.2} number="01">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
              <div className="md:col-span-8">
                <p className="font-serif text-2xl md:text-3xl text-[#1a1a1a] leading-[1.5]">
                  At POT (Paradigm Of Thoughts), we believe that great design goes beyond aesthetics—it's a narrative that celebrates the synergy of{' '}
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="inline-block italic text-pot-gold font-light"
                  >
                    thought, space, and soul
                  </motion.span>.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center md:justify-end">
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                  viewport={{ once: true }}
                  className="w-32 h-32 border border-pot-gold/40 rotate-45 relative"
                >
                  <div className="absolute inset-2 border border-pot-gold/30" />
                  <div className="absolute inset-4 bg-pot-gold/10" />
                </motion.div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#1a1a1a]/10">
              <p className="font-sans text-base text-[#2a2a2a] leading-relaxed">
                Founded in Bengaluru by Interior Designer Vineet Patel, POT is a multidisciplinary interior design studio dedicated to creating spaces that resonate with meaning, purpose, and artistry.
              </p>
            </div>
          </LuxuryBlock>

          {/* Block 2 - Collaboration */}
          <LuxuryBlock delay={0.3} number="02">
            <div className="grid md:grid-cols-5 gap-8 md:gap-12">
              <div className="md:col-span-3">
                <h3 className="font-serif text-xl md:text-2xl text-pot-gold mb-6 italic">
                  Rooted in Collaboration
                </h3>
                <p className="font-serif text-lg md:text-xl text-[#1a1a1a] leading-[1.7] mb-6">
                  Our approach is rooted in collaboration. By working with passionate designers, skilled artisans, and visionary clients, we transform spaces into detailed works of art.
                </p>
                <p className="font-sans text-base text-[#2a2a2a] leading-relaxed">
                  Whether it's a residence, a retail environment, or a commercial space, every project is a testament to our belief in the power of storytelling.
                </p>
              </div>
              <div className="md:col-span-2 space-y-4 md:pt-8">
                {['Design', 'Artisanship', 'Vision'].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-8 h-px bg-pot-gold/60 group-hover:w-12 transition-all duration-500" />
                    <span className="font-sans text-sm text-[#1a1a1a] tracking-wider uppercase">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 h-px bg-gradient-to-r from-pot-gold/0 via-pot-gold/40 to-pot-gold/0"
            />
            <p className="font-sans text-base text-[#2a2a2a] leading-relaxed mt-8 italic">
              Through meticulous design and thoughtful execution, we create environments that honor the stories of the people, materials, and ideas that shape them.
            </p>
          </LuxuryBlock>

          {/* Block 3 - Philosophy */}
          <LuxuryBlock delay={0.4} number="03">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-pot-gold/50 to-transparent" />
              <p className="font-serif text-lg md:text-xl text-[#1a1a1a] leading-[1.7] pl-8">
                At POT, we understand that every space has its own personality. That's why we approach each project with flexibility and an open mind, ensuring the final result is as unique as the individuals we design for.
              </p>
              <p className="font-serif text-lg md:text-xl text-[#1a1a1a] leading-[1.7] pl-8 mt-6">
                Our process evolves with the invaluable input of clients, artisans, and stakeholders, culminating in spaces that strike a harmonious balance—
                <span className="italic text-pot-gold">almost unnoticed yet profoundly felt</span>.
              </p>
            </div>
          </LuxuryBlock>

        </div>

        {/* 3. SIGNATURE - DRAMATIC */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-40 md:mt-56 pt-16 border-t border-pot-gold/30"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative inline-block">
                <div className="absolute -inset-6 bg-pot-gold/10 blur-2xl" />
                <p className="font-serif text-6xl md:text-7xl text-[#1a1a1a] italic tracking-tight leading-[0.9] relative">
                  Vineet<br/>Patel
                </p>
              </div>
              <div className="mt-8 space-y-2">
                <p className="font-sans text-pot-gold text-xs tracking-[0.3em] uppercase">
                  Founder & Principal Designer
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-pot-gold/50" />
                  <p className="font-sans text-[#1a1a1a]/50 text-[10px] tracking-[0.25em] uppercase">
                    Bengaluru, India
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-pot-gold/15" />
              <div className="bg-white/60 backdrop-blur-sm p-8 relative border border-pot-gold/10">
                <svg className="w-8 h-8 text-pot-gold/40 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 7h12M6 12h12M6 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg>
                <p className="font-serif text-base md:text-lg text-[#1a1a1a] leading-relaxed italic">
                  "Every space we create is a chapter in an ongoing story—one of thoughtfulness, collaboration, and enduring beauty."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- LUXURY CONTENT BLOCK COMPONENT ---
const LuxuryBlock = ({ children, delay = 0, number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-10%" }}
      className="relative group"
    >
      {/* Decorative number - VISIBLE */}
      <div className="absolute -top-6 -left-2 md:-left-8 z-0">
        <span className="font-sans text-pot-gold/25 text-7xl md:text-8xl font-light tracking-tighter">
          {number}
        </span>
      </div>
      
      {/* Content container with luxury border */}
      <div className="relative bg-white/40 backdrop-blur-sm border border-pot-gold/10 p-8 md:p-12
                      hover:border-pot-gold/30 hover:bg-white/60 transition-all duration-700 z-10">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-pot-gold/40" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-pot-gold/40" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-pot-gold/40" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-pot-gold/40" />
        
        {children}
      </div>
    </motion.div>
  );
};

export default About;