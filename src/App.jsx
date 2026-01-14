import { ReactLenis } from '@studio-freight/react-lenis';
import { useScroll, useSpring, motion } from 'framer-motion'; 
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects'; 
import Gallery from './components/sections/Gallery'; 
import About from './components/sections/About'; 
import Contact from './components/sections/Contact'; 
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';
import Grain from './components/ui/Grain'; 

function App() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ReactLenis root>
      <>
        <Preloader />
        <CustomCursor />
        <Grain />

        <motion.div
          className="fixed top-0 left-0 right-0 h-[4px] bg-pot-gold origin-left z-[100]"
          style={{ scaleX }}
        />

        <div className="font-sans bg-[#f4f4f0] min-h-screen cursor-none selection:bg-pot-gold selection:text-white">
          <Navbar />
          
          <main>
            <Hero />
            <Services /> 
            <Projects />
            <Gallery />
            <About />
            <Contact />
          </main>
        </div>
      </>
    </ReactLenis>
  );
}

export default App;