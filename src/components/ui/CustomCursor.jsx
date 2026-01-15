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
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer');

      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  /* 🔥 LOCKED DARK-BG GOLD PALETTE (USED EVERYWHERE) */
  const cursorColor = 'rgba(255, 255, 255, 1)';
  const glowColor1 = 'rgba(255, 215, 0, 0.5)';
  const glowColor2 = 'rgba(218, 165, 32, 0.35)';
  const glowColor3 = 'rgba(184, 134, 11, 0.2)';

  return (
    <>
      {/* Outer Radiant Glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996] hidden md:block"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'spring', stiffness: 40, damping: 28, mass: 1.5 }}
      >
        <div
          className="relative"
          style={{ width: 180, height: 180, transform: 'translate(-50%, -50%)' }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle, ${glowColor1} 0%, ${glowColor2} 30%, ${glowColor3} 50%, transparent 70%)`,
              filter: 'blur(40px)',
            }}
            animate={{
              scale: isHovering ? 1.5 : 1,
              opacity: isHovering ? 0.9 : 0.7,
            }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </div>
      </motion.div>

      {/* Middle Glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] hidden md:block"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'spring', stiffness: 70, damping: 22, mass: 0.8 }}
      >
        <div
          className="relative"
          style={{ width: 100, height: 100, transform: 'translate(-50%, -50%)' }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle, ${glowColor1} 0%, ${glowColor2} 40%, transparent 65%)`,
              filter: 'blur(25px)',
            }}
            animate={{
              scale: isHovering ? 1.7 : 1,
              opacity: isHovering ? 1 : 0.8,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </motion.div>

      {/* Inner Glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.4 }}
      >
        <div
          className="relative"
          style={{ width: 40, height: 40, transform: 'translate(-50%, -50%)' }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle, ${glowColor1} 0%, ${glowColor2} 30%, transparent 55%)`,
              filter: 'blur(10px)',
            }}
            animate={{
              scale: isHovering ? 2 : 1,
              opacity: isHovering ? 1 : 0.9,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      </motion.div>

      {/* Arrow Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'tween', duration: 0 }}
      >
        <motion.div
          animate={{ scale: isHovering ? 1.3 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.3 }}
          style={{ transform: 'translate(-20%, -20%)' }}
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            animate={{
              filter: isHovering
                ? 'drop-shadow(0 0 8px rgba(255,215,0,0.9)) drop-shadow(0 0 12px rgba(255,215,0,0.5))'
                : 'drop-shadow(0 0 4px rgba(255,215,0,0.7)) drop-shadow(0 0 8px rgba(255,215,0,0.3))',
            }}
          >
            <path
              d="M3 3 L3 17 L8 12 L12 21 L14 20 L10 11 L19 11 L3 3Z"
              stroke={cursorColor}
              strokeWidth="2"
              strokeLinejoin="round"
              fill="rgba(255,255,255,0.15)"
            />
          </motion.svg>

          {/* Tip Glow */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 4,
              height: 4,
              left: 0.5,
              top: 0.5,
              background: cursorColor,
              boxShadow:
                '0 0 8px rgba(255,215,0,0.9), 0 0 12px rgba(255,215,0,0.6)',
            }}
            animate={{
              scale: isHovering ? 2 : 1,
              boxShadow: isHovering
                ? '0 0 12px rgba(255,215,0,1), 0 0 18px rgba(255,215,0,0.8)'
                : '0 0 8px rgba(255,215,0,0.9), 0 0 12px rgba(255,215,0,0.6)',
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
