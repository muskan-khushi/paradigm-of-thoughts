import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const allImages = [
  // Embassy (7)
  "/images/embassy-1.jpg", "/images/embassy-2.jpg", "/images/embassy-3.jpg",
  "/images/embassy-4.jpg", "/images/embassy-5.jpg", "/images/embassy-6.jpg", "/images/embassy-7.jpg",
  // Hyderabad (4)
  "/images/hyd-1.jpg", "/images/hyd-2.jpg", "/images/hyd-3.jpg", "/images/hyd-4.jpg",
  // Mantri (6)
  "/images/mantri-1.jpg", "/images/mantri-2.jpg", "/images/mantri-3.jpg", 
  "/images/mantri-4.jpg", "/images/mantri-5.jpg", "/images/mantri-6.jpg",
  // Mysuru (5)
  "/images/mysuru-1.jpg", "/images/mysuru-2.jpg", "/images/mysuru-3.jpg", 
  "/images/mysuru-4.jpg", "/images/mysuru-5.jpg",
  // Silverfrost (4)
  "/images/silver-1.jpg", "/images/silver-2.jpg", "/images/silver-3.jpg", "/images/silver-4.jpg",
  // Ongoing (5)
  "/images/ongoing-1.jpg", "/images/ongoing-2.jpg", "/images/ongoing-3.jpg", 
  "/images/ongoing-4.jpg", "/images/ongoing-5.jpg"
];

const Gallery = () => {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax Speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]); 
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const col1 = allImages.slice(0, 8);
  const col2 = allImages.slice(8, 16);
  const col3 = allImages.slice(16, 24);
  const col4 = allImages.slice(24, 31);

  return (
    <>
      <section ref={containerRef} className="bg-[#0f0f0f] min-h-[150vh] py-32 px-4 overflow-hidden relative z-30">
        
        {/* HEADER */}
        <div className="relative z-50 max-w-7xl mx-auto mb-64 text-center pointer-events-none">
          <h2 className="font-serif text-5xl md:text-8xl text-white opacity-90 mb-6 mix-blend-difference">
            The Archive
          </h2>
          <p className="font-sans text-gray-300 tracking-[0.3em] uppercase text-sm font-medium relative z-50">
            A visual index of spaces, textures, and moments.
          </p>
        </div>

        {/* The Parallax Grid */}
        <div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pointer-events-auto relative z-10">
          <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8">
            {col1.map((src, i) => <GalleryImage key={`c1-${i}`} src={src} onOpen={() => setSelectedImage(src)} />)}
          </motion.div>
          <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:gap-8 -mt-24 md:-mt-48">
            {col2.map((src, i) => <GalleryImage key={`c2-${i}`} src={src} onOpen={() => setSelectedImage(src)} />)}
          </motion.div>
          <motion.div style={{ y: y3 }} className="flex flex-col gap-4 md:gap-8">
            {col3.map((src, i) => <GalleryImage key={`c3-${i}`} src={src} onOpen={() => setSelectedImage(src)} />)}
          </motion.div>
          <motion.div style={{ y: y4 }} className="flex flex-col gap-4 md:gap-8 -mt-12 md:-mt-24">
            {col4.map((src, i) => <GalleryImage key={`c4-${i}`} src={src} onOpen={() => setSelectedImage(src)} />)}
          </motion.div>
        </div>
        
        <div className="h-48 bg-gradient-to-t from-[#0f0f0f] to-transparent absolute bottom-0 left-0 right-0 z-20 pointer-events-none" />
      </section>

      {/* FULL SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={40} strokeWidth={1} />
            </button>

            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const GalleryImage = ({ src, onOpen }) => (
  <div 
    onClick={onOpen}
    className="w-full relative group overflow-hidden bg-gray-900 rounded-sm cursor-zoom-in"
  >
    <img 
      src={src} 
      alt="Gallery Item" 
      loading="lazy"
      className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      onError={(e) => e.target.style.display = 'none'} 
    />
  </div>
);

export default Gallery;