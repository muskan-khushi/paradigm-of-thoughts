import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Spatial Design",
    description: "Blending architecture and urban planning to create environments that inspire. We focus on functional, aesthetic, and sustainable ecosystems.",
    image: "/images/service-spatial.jpg", 
    color: "bg-stone-200" // Fallback color
  },
  {
    id: "02",
    title: "Interior Design",
    description: "Shaping experiences through material, light, and history. We honor the narrative of a space, blending time-honored principles with modern innovation.",
    image: "/images/service-interior.jpg",
    color: "bg-stone-300"
  },
  {
    id: "03",
    title: "Furniture Design",
    description: "Furniture as functional art. Custom-built pieces that extend your home's character, crafted with exotic hardwoods and master artisanship.",
    image: "/images/service-furniture.jpg",
    color: "bg-stone-400"
  }
];

const Services = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section id="services" ref={targetRef} className="relative h-[300vh] bg-[#f4f4f0]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Header - Fixed on Left */}
        <div className="absolute top-12 left-6 md:left-12 z-20 pointer-events-none">
          <h2 className="font-serif text-5xl md:text-7xl text-black opacity-10 uppercase tracking-tighter">
            Our Expertise
          </h2>
        </div>

        {/* Horizontal Track */}
        <motion.div style={{ x }} className="flex gap-12 pl-[10vw]">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="relative h-[70vh] w-[85vw] md:w-[60vw] flex-shrink-0 bg-white shadow-2xl flex flex-col"
            >
              {/* Image Area (with Fallback Color) */}
              <div className={`h-3/5 w-full overflow-hidden ${service.color} relative`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  onError={(e) => e.target.style.display = 'none'} // Hides broken image icon
                />
              </div>

              {/* Text Area */}
              <div className="h-2/5 p-8 md:p-12 flex flex-col justify-between relative">
                <span className="absolute -top-10 right-8 text-9xl font-serif text-black opacity-5">
                  {service.id}
                </span>

                <div>
                  <h3 className="font-serif text-3xl md:text-5xl text-black mb-6">
                    {service.title}
                  </h3>
                  <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
                
                <div className="w-full h-[1px] bg-gray-200 mt-4" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;