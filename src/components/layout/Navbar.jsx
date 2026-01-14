import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Magnetic from '../ui/Magnetic'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setIsScrolled(latest > 50);

    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* LOGO */}
          <a href="#" className="relative group z-50">
            <img 
              src="/images/logo.jpg" 
              alt="Studio POT" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </a>

          {/* DESKTOP LINKS  */}
          <div className="hidden md:flex space-x-8 items-center"> {/* Changed space-x-12 to space-x-8 to give Magnetic room */}
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <a
                  href={link.href}
                  className={`font-sans text-sm tracking-[0.2em] uppercase transition-colors duration-300 relative group px-4 py-2 ${ // Added px-4 py-2 for bigger hover target
                    isScrolled ? 'text-pot-charcoal' : 'text-white/90'
                  }`}
                >
                  {link.name}
                  {/* The underline animation */}
                  <span className="absolute bottom-1 left-1/2 w-0 h-[1px] bg-pot-gold transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                </a>
              </Magnetic>
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

      {/* MOBILE MENU OVERLAY */}
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