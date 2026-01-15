import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight, Instagram, Linkedin, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formState);
  };

  return (
    <section id="contact" className="bg-[#0f0f0f] min-h-screen relative z-40 py-32 px-6 flex flex-col justify-center overflow-hidden">
      
      {/* 1. Ambient Golden Glow (Subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -left-32 w-96 h-96 bg-pot-gold/5 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pot-gold/5 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.05, 0.08] 
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* 2. Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 border border-pot-gold/30 rounded-full bg-pot-gold/5"
          >
            <Sparkles size={16} className="text-pot-gold" />
            <span className="font-sans text-xs text-pot-gold uppercase tracking-[0.3em]">
              Let's Connect
            </span>
          </motion.div>
          
          <h2 className="font-serif text-6xl md:text-8xl text-white mb-6 leading-[0.9]">
            Begin your<br />
            <span className="italic text-pot-gold">design journey</span>
          </h2>
          <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Every great space starts with a conversation. Share your vision, and let's create something extraordinary together.
          </p>
        </motion.div>

        {/* 3. Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Contact Cards */}
            <div className="space-y-8">
              {/* Email Card */}
              <ContactCard title="Email Us" iconDelay={0}>
                <a 
                  href="mailto:paradigmofthoughts@gmail.com" 
                  className="block font-serif text-2xl text-white hover:text-pot-gold transition-colors mb-2 duration-300"
                >
                  paradigmofthoughts@gmail.com
                </a>
                <p className="font-sans text-sm text-gray-500 uppercase tracking-widest">
                  Response within 24 hours
                </p>
              </ContactCard>

              {/* Phone Card */}
              <ContactCard title="Call Us" iconDelay={0.1}>
                <a 
                  href="tel:+919686762392" 
                  className="block font-sans text-xl text-white tracking-[0.1em] hover:text-pot-gold transition-colors mb-2 duration-300"
                >
                  +91 96867 62392
                </a>
                <p className="font-sans text-[10px] text-gray-500 uppercase tracking-[0.2em]">
                  Mon – Sat, 9 AM – 7 PM IST
                </p>
              </ContactCard>

              {/* Location Card */}
              <ContactCard title="Visit Us" iconDelay={0.2}>
                <p className="font-serif text-2xl text-white mb-2">
                  Bengaluru, Karnataka
                </p>
                <p className="font-sans text-sm text-gray-500 uppercase tracking-widest">
                  India
                </p>
              </ContactCard>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-8 border-t border-white/10"
            >
              <h4 className="font-sans text-xs text-pot-gold uppercase tracking-widest mb-6">
                Follow Our Journey
              </h4>
              <div className="flex gap-4">
                <SocialBtn href="https://instagram.com/paradigmofthoughts" icon={Instagram} label="Instagram" />
                <SocialBtn href="https://linkedin.com/company/paradigm-of-thoughts" icon={Linkedin} label="LinkedIn" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Premium Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative">
              {/* Form Container */}
              <div className="relative bg-white/5 p-10 md:p-12 rounded-sm border border-white/10 shadow-2xl backdrop-blur-sm">
                <h3 className="font-serif text-3xl text-white mb-3">
                  Share your vision
                </h3>
                <p className="font-sans text-gray-500 text-xs uppercase tracking-widest mb-10">
                  Tell us about your project
                </p>

                <div className="space-y-8">
                  <FormInput 
                    label="Your Name" 
                    placeholder="John Doe" 
                    value={formState.name} 
                    onChange={(e) => setFormState({...formState, name: e.target.value})} 
                  />
                  
                  <FormInput 
                    label="Email Address" 
                    type="email"
                    placeholder="john@example.com" 
                    value={formState.email} 
                    onChange={(e) => setFormState({...formState, email: e.target.value})} 
                  />

                  <div className="space-y-3">
                    <label className="text-[10px] font-sans text-pot-gold uppercase tracking-[0.2em] block">
                      Project Details
                    </label>
                    <textarea 
                      className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white font-sans text-base placeholder:text-white/20 focus:outline-none focus:border-pot-gold transition-colors resize-none"
                      placeholder="Describe your vision, timeline, and requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <motion.button 
                    onClick={handleSubmit}
                    className="relative w-full bg-pot-gold text-black px-10 py-5 font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-sm shadow-lg hover:bg-white transition-all duration-500 flex items-center justify-center gap-3 group overflow-hidden mt-10"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Send Message</span>
                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto w-full mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10"
      >
        <p className="font-sans text-[10px] text-gray-600 uppercase tracking-[0.2em]">
          © 2024 POT. All Rights Reserved.
        </p>
        <p className="font-sans text-[10px] text-gray-600 uppercase tracking-[0.2em]">
          Paradigm of Thoughts
        </p>
      </motion.div>
    </section>
  );
};

// --- Sub Components for Cleanliness ---

const ContactCard = ({ title, children }) => (
  <motion.div 
    className="p-8 bg-white/5 border border-white/5 rounded-sm backdrop-blur-sm hover:border-pot-gold/30 transition-all duration-500 group"
    whileHover={{ x: 10 }}
  >
    <h4 className="font-sans text-[10px] text-pot-gold uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
      <div className="w-6 h-[1px] bg-pot-gold/50"></div>
      {title}
    </h4>
    <div className="group-hover:translate-x-2 transition-transform duration-500">
      {children}
    </div>
  </motion.div>
);

const SocialBtn = ({ href, icon: Icon, label }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/5 rounded-sm hover:border-pot-gold/30 transition-all group"
    whileHover={{ y: -3 }}
  >
    <Icon size={18} className="text-pot-gold group-hover:text-white transition-colors" />
    <span className="font-sans text-xs text-white uppercase tracking-widest">{label}</span>
  </motion.a>
);

const FormInput = ({ label, type = "text", placeholder, value, onChange }) => (
  <div className="space-y-3">
    <label className="text-[10px] font-sans text-pot-gold uppercase tracking-[0.2em] block">
      {label}
    </label>
    <input 
      type={type}
      className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white font-sans text-base placeholder:text-white/20 focus:outline-none focus:border-pot-gold transition-colors"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Contact;