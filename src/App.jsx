import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Spatial Design",
    // Taken from your text: "At Studio POT..."
    description: "At Studio POT, we create environments that inspire, uplift, and meet practical needs by blending architecture, interior design, and urban planning into cohesive spatial design. We focus on functionality, aesthetics, and sustainability.",
    image: "/images/service-spatial.jpg",
    color: "bg-[#e8e6e1]" // Architectural Paper color
  },
  {
    id: "02",
    title: "Interior Design",
    // Taken from your text: "Interior design is more than..."
    description: "Interior design is more than arranging furniture—it’s about shaping experiences. We honor the rich history of design, blending time-honored principles with contemporary innovation to create spaces that resonate with emotion.",
    image: "/images/service-interior.jpg",
    color: "bg-[#dcdcdc]" // Stone color
  },
  {
    id: "03",
    title: "Furniture Design",
    // Taken from your text: "At our interior design studio..."
    description: "Furniture goes beyond function—it’s an extension of your home’s character. We craft bespoke concepts inspired by your home’s architecture, utilizing exotic hardwoods and master artisanship to create functional art.",
    image: "/images/service-furniture.jpg",
    color: "bg-[#c8c6c1]" // Wood/Warm Grey
  }
];

const Services = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moves the cards horizontally as you scroll down
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section id="services" ref={targetRef} className="relative h-[300vh] bg-[#f4f4f0]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Fixed Header */}
        <div className="absolute top-12 left-6 md:left-12 z-20 pointer-events-none">
          <h2 className="font-serif text-5xl md:text-7xl text-pot-black opacity-10 uppercase tracking-tighter">
            Our Expertise
          </h2>
        </div>

        {/* Horizontal Card Track */}
        <motion.div style={{ x }} className="flex gap-12 pl-[10vw]">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="relative h-[70vh] w-[85vw] md:w-[60vw] flex-shrink-0 bg-white shadow-2xl flex flex-col group"
            >
              {/* Image Half */}
              <div className={`h-1/2 md:h-3/5 w-full overflow-hidden ${service.color} relative`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  onError={(e) => e.target.style.display = 'none'} // Hides broken image icon
                />
              </div>

              {/* Text Half */}
              <div className="h-1/2 md:h-2/5 p-8 md:p-12 flex flex-col justify-between relative bg-white">
                <span className="absolute -top-10 right-8 text-9xl font-serif text-black opacity-5 group-hover:opacity-10 transition-opacity">
                  {service.id}
                </span>

                <div>
                  <h3 className="font-serif text-3xl md:text-5xl text-pot-black mb-6">
                    {service.title}
                  </h3>
                  <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                </div>
                
                {/* Discover Button - The "Call to Action" */}
                <div className="mt-4 flex items-center gap-4 group/btn cursor-pointer">
                  <span className="text-xs font-sans uppercase tracking-widest text-pot-gold">Discover</span>
                  <div className="h-[1px] w-12 bg-pot-gold group-hover/btn:w-24 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;