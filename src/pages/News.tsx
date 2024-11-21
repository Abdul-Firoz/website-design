import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Sustainable Design: Building a Greener Future in Architecture",
    description: "Explore eco-friendly materials and innovative practices that are shaping the future of sustainable architecture, reducing environmental impact significantly.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
    category: "Sustainability",
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "Maximizing Space: Tips for Multipurpose Architecture",
    description: "Learn how to create versatile, adaptable spaces that meet various needs, optimizing functionality and flexibility in architectural design.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    category: "Design Tips",
    date: "March 12, 2024"
  },
  {
    id: 3,
    title: "Enhancing Business through Thoughtful Design",
    description: "Architectural design can improve customer experiences, boost productivity, and drive success in commercial environments.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    category: "Commercial",
    date: "March 10, 2024"
  }
];

const News = () => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-light mb-4">Latest News</h1>
          <p className="text-xl text-gray-600">
            Insights and updates from our architecture studio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-2xl font-light">{post.title}</h2>
                <p className="text-gray-600">{post.description}</p>
                <button className="inline-flex items-center space-x-2 text-sm uppercase tracking-wider group">
                  <span>READ ARTICLE</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="group relative px-6 py-3 text-sm uppercase tracking-wider">
            VIEW ALL ARTICLES
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default News;