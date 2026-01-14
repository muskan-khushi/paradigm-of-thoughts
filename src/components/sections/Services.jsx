import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

// --- DATA ---
const services = [
  {
    id: "01",
    title: "Spatial Design",
    shortDesc: "At Studio POT, we create environments that inspire, uplift, and meet practical needs by blending architecture, interior design, and urban planning into cohesive spatial design.",
    image: "/images/service-spatial.jpg",
    color: "bg-[#e8e6e1]",
    fullContent: {
      intro: "At Studio POT [Paradigm Of Thoughts], we create environments that inspire, uplift, and meet practical needs by blending architecture, interior design, and urban planning into cohesive spatial design.",
      sections: [
        {
          title: "Spatial design shapes environments that are:",
          items: [
            "Functional: Serving their purpose with efficiency.",
            "Aesthetic: Reflecting identity through visual appeal.",
            "Emotional: Evoking comfort and connection.",
            "Sustainable: Eco-conscious and future-ready."
          ]
        },
        {
          title: "We emphasize:",
          items: [
            "Human-Centric Design: Tailored to individual needs and lifestyles.",
            "Innovation: Integrating technology and sustainable practices.",
            "Collaboration: Partnering with clients and skilled craftsmen."
          ]
        },
        {
          title: "Process",
          items: [
            "Discovery: Understanding your vision and goals.",
            "Concept Design: Developing layouts and 3D visualizations.",
            "Planning: Crafting detailed drawings for seamless execution.",
            "Execution: Overseeing construction to ensure precision.",
            "Finishing Touches: Delivering ready-to-use, polished spaces."
          ]
        },
        {
          title: "We deliver:",
          items: [
            "Personalized Elegance: Reflecting your unique identity.",
            "Functional Layouts: Enhancing comfort and productivity.",
            "Timeless Appeal: Balancing trends with lasting style.",
            "Sustainability: Offering eco-friendly, efficient solutions."
          ]
        }
      ],
      footer: "At Studio POT, spatial design is the foundation of impactful environments, harmonizing functionality and aesthetics to create spaces with enduring purpose."
    }
  },
  {
    id: "02",
    title: "Interior Design",
    shortDesc: "Interior design is more than arranging furniture—it’s about shaping experiences. We honor the rich history of design, blending time-honored principles with contemporary innovation.",
    image: "/images/service-interior.jpg",
    color: "bg-[#dcdcdc]",
    fullContent: {
      intro: "Interior design is more than arranging furniture or choosing colors—it’s about shaping experiences and creating environments that resonate with purpose and emotion. At Studio Pot, we honor the rich history of interior design, blending time-honored principles with contemporary innovation.",
      sections: [
        {
          title: "Our Process",
          items: [
            "Discovery: Every project begins with listening. We learn how you live, work, and interact with your space. This understanding shapes designs that reflect your identity.",
            "Conceptualization: Ideas evolve through sketches, material exploration, and digital visualization, ensuring every detail aligns with your vision."
          ]
        },
        {
          title: "Transformative Results",
          paragraph: "Our designs go beyond aesthetics to deliver transformations. Whether crafting a serene home, a dynamic office, or an immersive commercial space, the result strikes a perfect balance where functionality meets creativity and intention."
        },
        {
          title: "Integrity and Innovation",
          paragraph: "At Studio Pot, we prioritize thoughtful material choices, integrate advanced technology where it adds value, and create future-ready spaces. Every project is a chance to design environments that inspire, engage, and endure."
        }
      ]
    }
  },
  {
    id: "03",
    title: "Furniture Design",
    shortDesc: "Furniture goes beyond function—it’s an extension of your home’s character. We craft bespoke concepts inspired by your home’s architecture, utilizing exotic hardwoods and master artisanship.",
    image: "/images/service-furniture.jpg",
    color: "bg-[#c8c6c1]",
    fullContent: {
      intro: "At our interior design studio, we believe furniture goes beyond function—it’s an extension of your home’s character and personal style. Our bespoke furniture design service begins with a thorough understanding of your space, needs, and aesthetic preferences.",
      sections: [
        {
          title: "The process includes:",
          items: [
            "Hand-drawn sketches and digital renderings: Bringing your vision to life with precision and meticulous attention to detail.",
            "Material selection guidance: Presenting luxury, durable, and sustainable options, such as exotic hardwoods and handcrafted metal accents."
          ]
        },
        {
          title: "Execution",
          paragraph: "Once finalized, we collaborate with master artisans and cutting-edge fabrication workshops to transform ideas into reality. Every piece is custom-built to fit your space perfectly."
        }
      ],
      footer: "The result is functional art—furniture that not only fills a room but completes it, redefining elegance, innovation, and timeless design tailored exclusively to your lifestyle."
    }
  }
];

const Services = () => {
  const targetRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <>
      <section id="services" ref={targetRef} className="relative h-[300vh] bg-[#f4f4f0]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          
          <div className="absolute top-12 left-6 md:left-12 z-10 pointer-events-none">
            <h2 className="font-serif text-5xl md:text-7xl text-pot-black opacity-10 uppercase tracking-tighter">
              Our Expertise
            </h2>
          </div>

          <motion.div style={{ x }} className="flex gap-12 pl-[10vw] relative z-30">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="relative h-[70vh] w-[85vw] md:w-[60vw] flex-shrink-0 bg-white shadow-2xl flex flex-col group"
              >
                <div className={`h-1/2 md:h-3/5 w-full overflow-hidden ${service.color} relative`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>

                <div className="h-1/2 md:h-2/5 p-8 md:p-12 flex flex-col justify-between relative bg-white">
                  <span className="absolute -top-10 right-8 text-9xl font-serif text-black opacity-5 group-hover:opacity-10 transition-opacity">
                    {service.id}
                  </span>

                  <div>
                    <h3 className="font-serif text-3xl md:text-5xl text-pot-black mb-6">
                      {service.title}
                    </h3>
                    <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
                      {service.shortDesc}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="mt-4 flex items-center gap-4 group/btn cursor-pointer text-left py-2"
                  >
                    <span className="text-xs font-sans uppercase tracking-widest text-pot-gold">Discover</span>
                    <div className="h-[1px] w-12 bg-pot-gold group-hover/btn:w-24 transition-all duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- ETHEREAL MODAL (FIXED) --- */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedService(null)}
          >
            {/* Modal Container: Fixed height (85vh) + Hidden Overflow */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#fcfcfc] w-full max-w-4xl h-[85vh] shadow-2xl relative flex flex-col md:flex-row rounded-sm cursor-default overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-white/50 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>

              {/* Image Side - Stays Fixed */}
              <div className="w-full md:w-1/3 h-48 md:h-full relative flex-shrink-0">
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-8 left-8 text-white">
                  <span className="font-serif text-6xl opacity-50 block">{selectedService.id}</span>
                  <h3 className="font-serif text-3xl leading-none">{selectedService.title}</h3>
                </div>
              </div>

              {/* Text Side - SCROLLS INDEPENDENTLY */}
              {/* data-lenis-prevent is CRITICAL here */}
              <div 
                className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto h-full"
                data-lenis-prevent="true"
              >
                <p className="font-serif text-xl md:text-2xl text-pot-black mb-8 leading-relaxed">
                  {selectedService.fullContent.intro}
                </p>
                <div className="space-y-8">
                  {selectedService.fullContent.sections.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="font-sans text-xs uppercase tracking-widest text-pot-gold mb-3">
                        {section.title}
                      </h4>
                      {section.items ? (
                        <ul className="space-y-2">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600 font-sans text-sm md:text-base leading-relaxed">
                              <ArrowRight size={14} className="mt-1 flex-shrink-0 text-pot-gold" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed">
                          {section.paragraph}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                {selectedService.fullContent.footer && (
                  <div className="mt-12 pt-8 border-t border-gray-100 mb-8">
                    <p className="font-serif text-lg text-pot-charcoal italic">
                      "{selectedService.fullContent.footer}"
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;