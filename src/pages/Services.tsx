import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Commercial Services",
    description: "We design engaging retail environments that attract customers and encourage longer visits. Our layouts optimize flow and product visibility, boosting sales and enhancing the shopping experience.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
  },
  {
    title: "Residential Design",
    description: "Creating comfortable and functional living spaces that reflect the unique personality and lifestyle of each client. We focus on sustainable solutions and timeless design.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  },
  {
    title: "Urban Planning",
    description: "Comprehensive urban development solutions that create sustainable, livable communities while preserving local character and promoting environmental responsibility.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
  }
];

const Services = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-light mb-6">Innovative Designs for Business Success</h1>
          <p className="text-xl text-gray-600 mb-12">
            Our commercial architecture services focus on creating dynamic and functional spaces
            that drive business success.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="flex-1">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-light">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <button className="group relative px-4 py-2 text-sm uppercase tracking-wider text-gray-800">
                  LEARN MORE
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-800 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;