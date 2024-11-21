import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  details?: {
    client?: string;
    location?: string;
    year?: string;
    size?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Oslo Opera House",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1552879890-3a06dd3a06c2",
    description: "A contemporary masterpiece reflecting the essence of Nordic design.",
    details: {
      client: "Norwegian National Opera & Ballet",
      location: "Oslo, Norway",
      year: "2023",
      size: "38,500 m²"
    }
  },
  {
    id: 2,
    title: "Urban Living Complex",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545917992-dea2d782ef46",
    description: "Modern living spaces that blend comfort with sustainability.",
    details: {
      client: "Oslo Housing Development",
      location: "Bergen, Norway",
      year: "2023",
      size: "25,000 m²"
    }
  },
  {
    id: 3,
    title: "Eco Office Tower",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1",
    description: "Sustainable architecture meeting contemporary business needs.",
    details: {
      client: "Green Business Solutions",
      location: "Stockholm, Sweden",
      year: "2023",
      size: "45,000 m²"
    }
  },
  {
    id: 4,
    title: "Nordic Museum",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04",
    description: "A cultural hub celebrating Nordic heritage through modern architecture.",
    details: {
      client: "Nordic Cultural Foundation",
      location: "Copenhagen, Denmark",
      year: "2022",
      size: "28,000 m²"
    }
  },
  {
    id: 5,
    title: "Waterfront Apartments",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    description: "Luxury waterfront living with panoramic views and sustainable features.",
    details: {
      client: "Harbor Development Group",
      location: "Helsinki, Finland",
      year: "2023",
      size: "32,000 m²"
    }
  },
  {
    id: 6,
    title: "Innovation Campus",
    category: "Educational",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    description: "A state-of-the-art educational facility fostering collaboration and innovation.",
    details: {
      client: "Nordic Tech University",
      location: "Malmö, Sweden",
      year: "2022",
      size: "52,000 m²"
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-light mb-8">Our Projects</h1>
          <div className="flex space-x-4">
            {['all', 'cultural', 'residential', 'commercial', 'educational'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm uppercase tracking-wider ${
                  filter === category 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-light">{project.title}</h3>
                    <p className="text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white max-w-4xl w-full p-8 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover mb-6"
              />
              <h2 className="text-3xl font-light mb-2">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-6">{selectedProject.category}</p>
              <p className="text-gray-800 mb-6">{selectedProject.description}</p>
              
              {selectedProject.details && (
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(selectedProject.details).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <p className="text-sm text-gray-600 uppercase">{key}</p>
                      <p className="font-light">{value}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;