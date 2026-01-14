import { ReactLenis } from '@studio-freight/react-lenis';
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
  return (
    <ReactLenis root>
      <Preloader />
      <CustomCursor />
      <Grain />
      

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
    </ReactLenis>
  );
}

export default App;