import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' 
            : 'bg-transparent py-8'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* LOGO */}
          <a href="#" className="relative group z-50">
            <h1 className={`font-serif text-2xl md:text-3xl font-semibold tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-pot-black' : 'text-white'}`}>
              POT
              <span className="text-pot-gold text-4xl leading-none">.</span>
            </h1>
          </a>

          {/* DESKTOP LINKS */}
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

          {/* MOBILE TOGGLE */}
          <button 
            className={`md:hidden z-50 ${isScrolled ? 'text-pot-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;