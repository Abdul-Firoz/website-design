import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          alt="Modern architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-light mb-4"
        >
          Architecture Studio in Oslo
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8"
        >
          <button className="group relative px-4 py-2 text-sm uppercase tracking-wider">
            DISCOVER
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;