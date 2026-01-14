import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// --- Updated Data with Specific Image Lists ---
const projects = [
  {
    id: 1,
    title: "Embassy Pristine",
    location: "Bengaluru",
    type: "Residential",
    coverImage: "/images/project-embassy.jpg", 
    desc: "A luxury residence defining modern elegance through warm tones and bespoke carpentry.",
    galleryImages: [
      "/images/embassy-1.jpg", "/images/embassy-2.jpg", "/images/embassy-3.jpg",
      "/images/embassy-4.jpg", "/images/embassy-5.jpg", "/images/embassy-6.jpg", "/images/embassy-7.jpg"
    ]
  },
  {
    id: 2,
    title: "Independent Villa",
    location: "Mysuru",
    type: "Residential",
    coverImage: "/images/project-mysuru.jpg",
    desc: "A play of light and shadow, featuring double-height spaces and minimalist textures.",
    galleryImages: [
      "/images/mysuru-1.jpg", "/images/mysuru-2.jpg", "/images/mysuru-3.jpg", 
      "/images/mysuru-4.jpg", "/images/mysuru-5.jpg"
    ]
  },
  {
    id: 3,
    title: "Silverfrost Experience",
    location: "Corporate",
    type: "Commercial",
    coverImage: "/images/project-silverfrost.jpg",
    desc: "An immersive experience center blurring the lines between indoor luxury and outdoor serenity.",
    galleryImages: [
      "/images/silver-1.jpg", "/images/silver-2.jpg", "/images/silver-3.jpg", "/images/silver-4.jpg"
    ]
  },
  {
    id: 4,
    title: "Mantri Glades",
    location: "Bengaluru",
    type: "Residential",
    coverImage: "/images/project-mantri.jpg",
    desc: "Functional minimalism tailored for urban living, maximizing space and utility.",
    galleryImages: [
      "/images/mantri-1.jpg", "/images/mantri-2.jpg", "/images/mantri-3.jpg", 
      "/images/mantri-4.jpg", "/images/mantri-5.jpg", "/images/mantri-6.jpg"
    ]
  },
  {
    id: 5,
    title: "Hyderabad Mock-up",
    location: "Hyderabad",
    type: "Hospitality",
    coverImage: "/images/project-hyd.jpg",
    desc: "A boutique hospitality concept showcasing high-contrast palettes and premium finishes.",
    galleryImages: [
      "/images/hyd-1.jpg", "/images/hyd-2.jpg", "/images/hyd-3.jpg", "/images/hyd-4.jpg"
    ]
  },
  {
    id: 6,
    title: "Ongoing Concepts",
    location: "R&D",
    type: "Concept",
    coverImage: "/images/project-ongoing.jpg",
    desc: "Explorations in form, shadow, and material materiality for upcoming ventures.",
    galleryImages: [
      "/images/ongoing-1.jpg", "/images/ongoing-2.jpg", "/images/ongoing-3.jpg", 
      "/images/ongoing-4.jpg", "/images/ongoing-5.jpg"
    ]
  },
];

const ProjectItem = ({ project, index, onOpen }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={ref} 
      className="min-h-screen w-full flex flex-col items-center justify-center py-24 md:py-32 relative group cursor-pointer"
      onClick={() => onOpen(project)}
    >
      {/* Background Text */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] md:text-[15vw] font-serif text-white opacity-[0.03] whitespace-nowrap pointer-events-none z-0 transition-opacity group-hover:opacity-10">
        {project.type}
      </span>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 flex flex-col items-center"
      >
        <div className="text-center mb-12">
          <span className="font-sans text-pot-gold text-xs tracking-[0.3em] uppercase block mb-4">
            {project.location} — {project.id.toString().padStart(2, '0')}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white transition-colors group-hover:text-pot-gold">
            {project.title}
          </h2>
        </div>

        {/* IMAGE CONTAINER - Added hover scale effect */}
        <div className="relative w-full max-w-6xl aspect-video md:aspect-auto md:h-[70vh] flex items-center justify-center overflow-hidden">
          <motion.img 
            style={{ y }} 
            src={project.coverImage} 
            alt={project.title} 
            className="max-w-full max-h-full object-contain shadow-2xl transition-transform duration-700 group-hover:scale-105"
          />
          {/* View Gallery Indicator */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="font-sans text-white tracking-widest uppercase text-sm border-b border-white pb-1">View Gallery</span>
          </div>
        </div>

        <p className="mt-12 font-sans text-gray-400 text-sm md:text-base max-w-lg text-center leading-relaxed">
          {project.desc}
        </p>
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div id="projects" className="bg-[#0f0f0f] relative z-20">
        <div className="pt-32 pb-12 text-center">
          <h2 className="font-serif text-white text-2xl italic opacity-50">Selected Works</h2>
        </div>

        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} onOpen={setSelectedProject} />
        ))}
      </div>

      {/* --- FULL SCREEN PROJECT GALLERY MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#0f0f0f] overflow-y-auto"
            data-lenis-prevent="true" // Allows scrolling inside modal
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 z-50 p-4 bg-black/50 rounded-full text-white hover:text-pot-gold transition-colors"
            >
              <X size={32} />
            </button>

            {/* Modal Content */}
            <div className="container mx-auto px-6 py-24">
              <div className="text-center mb-24">
                 <span className="font-sans text-pot-gold text-xs tracking-[0.3em] uppercase block mb-4">
                    Project Gallery
                  </span>
                <h2 className="font-serif text-5xl md:text-7xl text-white">{selectedProject.title}</h2>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {selectedProject.galleryImages.map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="relative group overflow-hidden"
                  >
                    <img 
                      src={src} 
                      alt={`${selectedProject.title} ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;