import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

// --- DATA (Unchanged) ---
const services = [
  {
    id: "01",
    title: "Spatial Design",
    shortDesc:
      "At Studio POT, we create environments that inspire, uplift, and meet practical needs by blending architecture, interior design, and urban planning into cohesive spatial design.",
    image: "/images/service-spatial.jpg",
    fullContent: {
      intro:
        "At Studio POT [Paradigm Of Thoughts], we create environments that inspire, uplift, and meet practical needs by blending architecture, interior design, and urban planning into cohesive spatial design.",
      sections: [
        {
          title: "Spatial design shapes environments that are:",
          items: [
            "Functional: Serving their purpose with efficiency.",
            "Aesthetic: Reflecting identity through visual appeal.",
            "Emotional: Evoking comfort and connection.",
            "Sustainable: Eco-conscious and future-ready.",
          ],
        },
        {
          title: "We emphasize:",
          items: [
            "Human-Centric Design: Tailored to individual needs and lifestyles.",
            "Innovation: Integrating technology and sustainable practices.",
            "Collaboration: Partnering with clients and skilled craftsmen.",
          ],
        },
        {
          title: "Process",
          items: [
            "Discovery: Understanding your vision and goals.",
            "Concept Design: Developing layouts and 3D visualizations.",
            "Planning: Crafting detailed drawings for seamless execution.",
            "Execution: Overseeing construction to ensure precision.",
            "Finishing Touches: Delivering ready-to-use, polished spaces.",
          ],
        },
        {
          title: "We deliver:",
          items: [
            "Personalized Elegance: Reflecting your unique identity.",
            "Functional Layouts: Enhancing comfort and productivity.",
            "Timeless Appeal: Balancing trends with lasting style.",
            "Sustainability: Offering eco-friendly, efficient solutions.",
          ],
        },
      ],
      footer:
        "At Studio POT, spatial design is the foundation of impactful environments, harmonizing functionality and aesthetics to create spaces with enduring purpose.",
    },
  },
  {
    id: "02",
    title: "Interior Design",
    shortDesc:
      "Interior design is more than arranging furniture or choosing colors—it's about shaping experiences and creating environments that resonate with purpose and emotion.",
    image: "/images/service-interior.jpg",
    fullContent: {
      intro:
        "Interior design is more than arranging furniture or choosing colors—it's about shaping experiences and creating environments that resonate with purpose and emotion. At Studio Pot, we honor the rich history of interior design, blending time-honored principles with contemporary innovation.",
      sections: [
        {
          title: "Our Process",
          items: [
            "Discovery: Every project begins with listening. We learn how you live, work, and interact with your space. This understanding shapes designs that reflect your identity while considering architectural elements, cultural influences, and sustainability.",
            "Conceptualization: Ideas evolve through sketches, material exploration, and digital visualization, ensuring every detail aligns with your vision.",
          ],
        },
        {
          title: "Transformative Results",
          paragraph:
            "Our designs go beyond aesthetics to deliver transformations. Whether crafting a serene home, a dynamic office, or an immersive commercial space, the result strikes a perfect balance where functionality meets creativity and intention.",
        },
        {
          title: "Integrity and Innovation",
          paragraph:
            "At Studio Pot, we prioritize thoughtful material choices, integrate advanced technology where it adds value, and create future-ready spaces. Every project is a chance to design environments that inspire, engage, and endure.",
        },
      ],
    },
  },
  {
    id: "03",
    title: "Furniture Design",
    shortDesc:
      "At our interior design studio, we believe furniture goes beyond function—it's an extension of your home's character and personal style.",
    image: "/images/service-furniture.jpg",
    fullContent: {
      intro:
        "At our interior design studio, we believe furniture goes beyond function—it's an extension of your home's character and personal style. Our bespoke furniture design service begins with a thorough understanding of your space, needs, and aesthetic preferences. Inspired by your home's architecture, design story, and unique features, we craft concepts that reflect your vision.",
      sections: [
        {
          title: "The process includes:",
          items: [
            "Hand-drawn sketches and digital renderings: Bringing your vision to life with precision and meticulous attention to detail.",
            "Material selection guidance: Presenting luxury, durable, and sustainable options, such as exotic hardwoods and handcrafted metal accents, to ensure the perfect balance of form and function.",
          ],
        },
        {
          title: "Execution",
          paragraph:
            "Once finalized, we collaborate with master artisans and cutting-edge fabrication workshops to transform ideas into reality. Every piece is custom-built to fit your space perfectly, delivering a one-of-a-kind result that mass-produced furniture cannot replicate.",
        },
      ],
      footer:
        "The result is functional art—furniture that not only fills a room but completes it, redefining elegance, innovation, and timeless design tailored exclusively to your lifestyle.",
    },
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const scrollContainerRef = useRef(null);

  return (
    <>
      <section
        id="services"
        className="relative bg-gradient-to-b from-[#f8f7f4] to-[#f4f4f0] py-32 border-b border-black/5 overflow-hidden"
      >
        {/* ===== ELEGANT BACKGROUND TEXT ===== */}
        <div className="absolute top-20 left-0 right-0 z-0 pointer-events-none overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="font-serif text-[10rem] md:text-[14rem] lg:text-[18rem] uppercase tracking-tighter text-pot-black opacity-[0.02] leading-none whitespace-nowrap">
              Expertise
            </h2>
          </div>
        </div>

        {/* ===== REFINED HEADER ===== */}
        <div className="container mx-auto px-6 md:px-12 mb-20 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="font-sans text-pot-gold text-xs tracking-[0.35em] uppercase block">
              What We Do
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-pot-black tracking-tight">
              Our Expertise
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-pot-gold to-transparent" />
          </motion.div>
        </div>

        {/* ===== LUXURY SCROLL CONTAINER ===== */}
        <div
          ref={scrollContainerRef}
          className="relative z-10 w-full flex overflow-x-auto snap-x snap-mandatory pb-24 px-6 md:px-12 gap-20 scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="snap-center shrink-0 w-[90vw] md:w-[65vw] group relative"
            >
              {/* LUXURY IMAGE CONTAINER */}
              <div className="relative z-10 h-[60vh] bg-white overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-[1400ms] ease-out group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.background =
                      "linear-gradient(135deg, #e8e6e1 0%, #dcdcdc 100%)";
                  }}
                />
              </div>

              {/* ELEVATED LUXURY CARD */}
              <div className="relative z-30 -mt-28 mx-auto w-[92%] bg-white p-10 md:p-14 shadow-2xl border border-black/5">
                {/* LARGE ELEGANT NUMBER */}
                <span className="absolute -top-16 -right-8 text-[14rem] font-serif text-pot-gold opacity-[0.08] leading-none select-none pointer-events-none group-hover:opacity-[0.12] transition-opacity duration-700">
                  {service.id}
                </span>

                <div className="relative z-10">
                  <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-pot-black mb-6 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-12 max-w-2xl">
                    {service.shortDesc}
                  </p>

                  {/* ===== ULTRA LUXURY DISCOVER BUTTON ===== */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="relative inline-flex items-center gap-6 group/btn overflow-hidden"
                  >
                    {/* Multi-layer glow effect */}
                    <span className="absolute -inset-4 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.4),rgba(201,164,92,0.2)_40%,transparent_70%)] opacity-0 group-hover/btn:opacity-100 blur-2xl transition-all duration-700" />
                    <span className="absolute -inset-2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.3),transparent_60%)] opacity-0 group-hover/btn:opacity-100 blur-xl transition-all duration-500" />

                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-pot-gold/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />

                    <span className="relative z-10 text-xs uppercase tracking-[0.35em] text-pot-gold font-medium transition-all duration-300 group-hover/btn:tracking-[0.4em] group-hover/btn:text-[#d4a854]">
                      Discover
                    </span>

                    <span className="relative z-10 h-[1.5px] w-16 bg-gradient-to-r from-pot-gold to-pot-gold/60 group-hover/btn:w-28 transition-all duration-500 shadow-[0_0_8px_rgba(201,164,92,0.5)] group-hover/btn:shadow-[0_0_16px_rgba(201,164,92,0.8)]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="shrink-0 w-[5vw]" />
        </div>
      </section>

      {/* ===== REFINED MODAL ===== */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 80, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="bg-white w-full max-w-6xl h-[90vh] flex flex-col md:flex-row shadow-2xl border border-black/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 z-50 p-3 bg-white/80 hover:bg-black hover:text-white rounded-full transition-all duration-300 shadow-lg cursor-pointer"
                onClick={() => setSelectedService(null)}
              >
                <X size={20} />
              </button>

              {/* LEFT SIDE - IMAGE */}
              <div className="w-full md:w-5/12 h-64 md:h-full relative bg-gradient-to-br from-[#f8f7f4] to-[#f4f4f0] flex-shrink-0">
                <div className="relative w-full h-full p-8 md:p-12 flex items-center justify-center">
                  <img
                    src={selectedService.image}
                    className="w-full h-full object-cover shadow-lg"
                    alt={selectedService.title}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.style.background =
                        "linear-gradient(135deg, #e8e6e1 0%, #dcdcdc 100%)";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                    <span className="font-serif text-7xl md:text-8xl text-white/30 block leading-none mb-2">
                      {selectedService.id}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-white tracking-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - CONTENT */}
              {/* Added 'data-lenis-prevent' and 'overscroll-contain' to enable internal scrolling */}
              <div
                className="w-full md:w-7/12 flex-1 overflow-y-auto overflow-x-hidden p-8 md:p-12 lg:p-16 overscroll-contain"
                data-lenis-prevent="true"
              >
                <p className="font-serif text-lg md:text-xl lg:text-2xl text-pot-black mb-10 leading-relaxed">
                  {selectedService.fullContent.intro}
                </p>

                <div className="space-y-10">
                  {selectedService.fullContent.sections.map((sec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="border-l-2 border-pot-gold/20 pl-6"
                    >
                      <h4 className="text-xs uppercase tracking-[0.3em] text-pot-gold mb-4 font-semibold">
                        {sec.title}
                      </h4>

                      {sec.items ? (
                        <ul className="space-y-4">
                          {sec.items.map((item, j) => (
                            <li
                              key={j}
                              className="flex gap-4 text-gray-700 text-sm md:text-base leading-relaxed group/item"
                            >
                              <ArrowRight
                                size={16}
                                className="mt-1 flex-shrink-0 text-pot-gold transition-transform duration-300 group-hover/item:translate-x-1"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                          {sec.paragraph}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {selectedService.fullContent.footer && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="font-serif text-base md:text-lg text-pot-black/80 italic leading-relaxed">
                      {selectedService.fullContent.footer}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Services;