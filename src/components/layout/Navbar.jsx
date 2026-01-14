import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // New state for hiding
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    // 1. Keep your existing background design logic
    setIsScrolled(latest > 50);

    // 2. Add the "Smart Scroll" logic (Hide on down, Show on up)
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        // These variants handle the hiding/showing
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        // We toggle between hidden and visible based on scroll direction
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        
        // YOUR EXACT DESIGN CLASSES BELOW
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* LOGO (Your exact code) */}
          <a href="#" className="relative group z-50">
            <h1 className={`font-serif text-2xl md:text-3xl font-semibold tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-pot-black' : 'text-white'}`}>
              POT
              <span className="text-pot-gold text-4xl leading-none">.</span>
            </h1>
          </a>

          {/* DESKTOP LINKS (Your exact code) */}
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm tracking-[0.2em] uppercase transition-colors duration-300 relative group ${isScrolled ? 'text-pot-charcoal' : 'text-white/90'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-pot-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>

          {/* MOBILE TOGGLE (Your exact code) */}
          <button 
            className={`md:hidden z-50 ${isScrolled ? 'text-pot-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY (Added basic logic to make the toggle work if needed) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-40 bg-pot-black flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl text-white hover:text-pot-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;