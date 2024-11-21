import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    label: 'PROJECTS',
    value: '240+',
    description: 'Delivering diverse architectural solutions, showcasing our expertise and creativity.'
  },
  {
    label: 'CLIENTS',
    value: '150+',
    description: 'Building strong relationships through trust, collaboration, and exceptional service.'
  },
  {
    label: 'HAPPY CLIENTS',
    value: '100%',
    description: 'Client satisfaction is our top priority, reflected in glowing reviews.'
  },
  {
    label: 'COMMITMENT',
    value: '110%',
    description: 'Going above and beyond to exceed expectations in every project.'
  }
];

const team = [
  {
    name: 'Erik Anderson',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d'
  },
  {
    name: 'Michael Stevens',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
  }
];

const Studio = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-gray-100 pt-8"
            >
              <p className="text-sm text-gray-500 mb-4">{stat.label}</p>
              <h2 className="text-7xl font-light mb-4">{stat.value}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-32 mb-16 text-center"
        >
          <h2 className="text-5xl font-light">Our Team</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="aspect-[3/4] mb-6 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-light">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Studio;