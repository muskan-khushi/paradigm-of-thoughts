import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('cursor-zoom-in');

      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    >
      {/* THE LIQUID GOLD CURSOR
         - No mix-blend-mode (Fixes the blue issue)
         - Linear Gradient (Creates the metallic "Gold Leaf" shine)
         - Backdrop Blur (Adds the 'glassy' premium feel)
      */}
      <motion.div 
        className="rounded-full absolute -top-1/2 -left-1/2"
        style={{
          // This specific gradient mimics polished metal reflection
          background: 'linear-gradient(135deg, #FDD835 0%, #d4af37 50%, #8c6a0b 100%)',
          boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)', // A soft golden glow
        }}
        animate={{
          width: isHovering ? 64 : 20,
          height: isHovering ? 64 : 20,
          x: isHovering ? -32 : -10,
          y: isHovering ? -32 : -10,
          opacity: isHovering ? 0.8 : 1, // Becomes semi-transparent glass on hover
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Inner white specular highlight for extra "pop" */}
        <div className="absolute top-1 left-1 w-1/3 h-1/3 bg-white opacity-40 rounded-full blur-[1px]" />
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;