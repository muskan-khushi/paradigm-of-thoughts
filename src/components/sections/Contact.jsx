import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect your backend logic here later
    console.log("Form Submitted", formState);
  };

  return (
    <section id="contact" className="bg-[#0f0f0f] min-h-screen relative z-40 py-24 px-6 border-t border-white/5 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* --- LEFT COLUMN: THE CLEAN FORM --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Start the conversation.
          </h2>
          <p className="font-sans text-gray-500 text-sm mb-12">
            Share your details below, and we'll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs font-sans text-pot-gold uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                className="w-full bg-[#1a1a1a] border border-white/10 p-4 text-white font-sans text-sm focus:outline-none focus:border-pot-gold transition-colors rounded-sm"
                placeholder="Enter your name"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-sans text-pot-gold uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                className="w-full bg-[#1a1a1a] border border-white/10 p-4 text-white font-sans text-sm focus:outline-none focus:border-pot-gold transition-colors rounded-sm"
                placeholder="Enter your email"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-sans text-pot-gold uppercase tracking-widest">Project Details</label>
              <textarea 
                className="w-full bg-[#1a1a1a] border border-white/10 p-4 text-white font-sans text-sm focus:outline-none focus:border-pot-gold transition-colors resize-none h-32 rounded-sm"
                placeholder="Tell us about your space..."
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              />
            </div>

            <button type="submit" className="bg-white text-black px-8 py-4 font-sans text-xs uppercase tracking-widest hover:bg-pot-gold hover:text-white transition-colors w-full md:w-auto flex items-center justify-center gap-2">
              Send Message <Send size={14} />
            </button>
          </form>
        </motion.div>


        {/* --- RIGHT COLUMN: INFO & LINKS --- */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-12 border-l border-white/5 lg:pl-16"
        >
          {/* Contact Item 1 */}
          <div>
            <h4 className="font-serif text-2xl text-white mb-2">Get in touch</h4>
            <p className="font-sans text-gray-400 text-sm leading-relaxed mb-6">
              For project inquiries and collaborations.
            </p>
            <a href="mailto:paradigmofthoughts@gmail.com" className="block font-sans text-lg text-white hover:text-pot-gold transition-colors mb-2">
              paradigmofthoughts@gmail.com
            </a>
            <a href="tel:+919686762392" className="block font-sans text-lg text-white hover:text-pot-gold transition-colors">
              +91 96867 62392
            </a>
          </div>

          {/* Contact Item 2 */}
          <div>
            <h4 className="font-serif text-2xl text-white mb-2">Visit Us</h4>
            <p className="font-sans text-gray-400 text-sm leading-relaxed">
              Bengaluru, Karnataka<br />
              India
            </p>
          </div>

          {/* Socials - Updated Links */}
          <div className="pt-8">
            <h4 className="font-sans text-xs text-pot-gold uppercase tracking-widest mb-4">Follow Us</h4>
            <div className="flex gap-6">
              
              <a 
                href="https://www.instagram.com/paradigmofthoughts/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-sans text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Instagram size={18} /> Instagram
              </a>

              <a 
                href="https://www.linkedin.com/company/paradigm-of-thoughts/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-sans text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <Linkedin size={18} /> LinkedIn
              </a>

            </div>
          </div>

        </motion.div>

      </div>

      {/* FOOTER */}
      <div className="max-w-6xl mx-auto w-full mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-[10px] text-gray-600 uppercase tracking-widest">
          © 2024 Studio POT.
        </p>
        <p className="font-sans text-[10px] text-gray-600 uppercase tracking-widest">
          Paradigm of Thoughts
        </p>
      </div>
    </section>
  );
};

export default Contact;