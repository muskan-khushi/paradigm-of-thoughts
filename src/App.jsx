import { ReactLenis } from '@studio-freight/react-lenis';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <ReactLenis root>
      <div className="font-sans bg-[#f7f7f7] min-h-screen cursor-none selection:bg-pot-gold selection:text-white">
        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          {/* Section placeholder to enable scrolling for parallax testing */}
          <section className="h-screen bg-white" />
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;