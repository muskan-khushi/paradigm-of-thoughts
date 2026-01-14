import { ReactLenis } from '@studio-freight/react-lenis';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects'; 
import Gallery from './components/sections/Gallery'; 
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <ReactLenis root>
      <div className="font-sans bg-[#f4f4f0] min-h-screen cursor-none selection:bg-pot-gold selection:text-white">
        <CustomCursor />
        <Navbar />
        
        <main>
          {/* 1. The Home Page (Hero) */}
          <Hero />
          
          {/* 2. The Services Section (Scroll down to see this) */}
          <Services /> 

          <Projects />

          <Gallery />
          
          {/* 3. Placeholder for Projects */}
          <section className="h-screen flex items-center justify-center bg-white">
            <p className="font-serif text-3xl opacity-30">Projects Gallery Coming Soon...</p>
          </section>
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;