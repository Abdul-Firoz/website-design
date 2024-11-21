import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Left side - Image and Social Media */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-xl mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/accounts/login" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/login" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <Facebook size={24} />
              </a>
              <a href="https://linkedin.com/login" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="px-8 md:px-16 py-12 md:py-24 flex flex-col justify-center bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 2 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <h1 className="text-5xl font-light mb-4">Let's Talk</h1>
            <p className="text-gray-600 mb-12">
              Get in touch with our Oslo-based architecture studio to discuss your
              next project. We look forward to collaborating with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <label className="absolute -top-2.5 left-0 text-sm text-gray-500">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-900 bg-transparent mt-2"
                  required
                />
              </div>
              <div className="relative">
                <label className="absolute -top-2.5 left-0 text-sm text-gray-500">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-900 bg-transparent mt-2"
                  required
                />
              </div>
              <div className="relative">
                <label className="absolute -top-2.5 left-0 text-sm text-gray-500">
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gray-900 bg-transparent resize-none h-32 mt-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 hover:bg-gray-900 transition-colors uppercase text-sm tracking-wider"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;