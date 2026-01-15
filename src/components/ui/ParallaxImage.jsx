import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxImage = ({ src, alt, className }) => {
  const ref = useRef(null);
  
  // Track the scroll progress of THIS specific image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // Start animating when it enters screen, stop when it leaves
  });

  // Map scroll progress to vertical movement (The Parallax Effect)
  // The image moves 15% up as you scroll down
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}> 
      {/* The Image Container cuts off the overflow */}
      <motion.img 
        src={src} 
        alt={alt}
        style={{ y, scale: 1.15 }} 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ParallaxImage;