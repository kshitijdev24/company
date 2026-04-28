import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Standard import for motion
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Psychology of Travel: Why Experiences Matter More Than Possessions',
    excerpt: 'Exploring the scientific research behind why travel creates lasting happiness and how UVIGO enhances these experiences.',
    category: 'Travel Psychology',
    author: 'Dr. Sarah Mehta',
    date: 'March 1, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBuYXR1cmUlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzI2NDU4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    title: 'Group Travel Trends 2026: The Rise of Collaborative Planning',
    excerpt: 'How friend groups are revolutionizing travel planning with Group Wallets and AI-powered decision making.',
    category: 'Trends',
    author: 'Raj Kumar',
    date: 'February 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1760638261786-159e37aa5c6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZyaWVuZHMlMjB0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzcyNjAyNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Hidden Gems: 10 Underexplored Heritage Sites in India',
    excerpt: "Discover India's lesser-known historical treasures that deserve a spot on your travel bucket list.",
    category: 'Heritage',
    author: 'Priya Singh',
    date: 'February 25, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1682918350375-f48720d782ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwbW9udW1lbnQlMjBpbmRpYSUyMHRlbXBsZXxlbnwxfHx8fDE3NzI2NDU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Mental Wellness Through Travel: A Scientific Approach',
    excerpt: 'How strategic travel can help combat burnout, anxiety, and depression through evidence-based destination matching.',
    category: 'Wellness',
    author: 'Dr. Arun Patel',
    date: 'February 22, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBuYXR1cmUlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzI2NDU4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Solo but Not Alone: The Art of Safe Independent Travel',
    excerpt: 'Expert tips and safety protocols for solo travelers, plus how vibe-matching technology creates meaningful connections.',
    category: 'Solo Travel',
    author: 'Maya Desai',
    date: 'February 20, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1630317171721-d58349d5c889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xvJTIwdHJhdmVsZXIlMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzI2NDU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Student Travel on a Budget: Making Dreams Affordable',
    excerpt: 'Practical strategies for college students to plan incredible farewell trips without breaking the bank.',
    category: 'Student Travel',
    author: 'Vikram Sharma',
    date: 'February 18, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1770223914355-76a1f1c8f6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9uJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcyNjQ1ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'The Digital Nomad Trend: Blending Work and Travel in 2026',
    excerpt: 'How remote work is shaping long-term travel habits and what destinations are adapting best to this shift.',
    category: 'Trends',
    author: 'Neha Gupta',
    date: 'February 15, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXJ8ZW58MXx8fHwxNjg3MTk0OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Mindful Journeys: Overcoming Post-Vacation Blues',
    excerpt: 'A psychological perspective on transitioning back to daily life and keeping the vacation glow alive.',
    category: 'Travel Psychology',
    author: 'Dr. Sarah Mehta',
    date: 'February 12, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlbGF4fGVufDF8fHx8MTY4NzE5NDkxMnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Tracing the Silk Route: India\'s Ancient Trade Networks',
    excerpt: 'Explore the remnants of historical trade routes and their cultural impact on modern Indian heritage.',
    category: 'Heritage',
    author: 'Priya Singh',
    date: 'February 10, 2026',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbHxlbnwxfHx8fDE2ODcxOTQ5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Digital Detox Retreats: Disconnect to Reconnect',
    excerpt: 'The rising popularity of tech-free wellness centers and their benefits for cognitive health.',
    category: 'Wellness',
    author: 'Dr. Arun Patel',
    date: 'February 8, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxheHxlbnwxfHx8fDE2ODcxOTQ5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Finding Yourself: The Solo Backpacker\'s Guide to Southeast Asia',
    excerpt: 'An inspiring journey of self-discovery, resilience, and navigating unknown territories independently.',
    category: 'Solo Travel',
    author: 'Maya Desai',
    date: 'February 5, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbnxlbnwxfHx8fDE2ODcxOTQ5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Semester at Sea: Enhancing Education Through Global Exposure',
    excerpt: 'Why international travel programs are essential for modern students and how to fund them.',
    category: 'Student Travel',
    author: 'Vikram Sharma',
    date: 'February 2, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50c3xlbnwxfHx8fDE2ODcxOTQ5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  }
];

const categories = ['All', 'Travel Psychology', 'Trends', 'Heritage', 'Wellness', 'Solo Travel', 'Student Travel'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = activeCategory === 'All' ? blogPosts[0] : null;
  const gridPosts = activeCategory === 'All' ? blogPosts.slice(1) : filteredPosts;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              UVIGO{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Travel psychology, industry trends, hidden heritage, and stories from the road
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-violet-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 mb-8">
              <TrendingUp className="text-purple-600" size={24} />
              <h2 className="text-2xl font-bold">Featured Article</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="h-96 md:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-4 py-1 bg-purple-600 text-white rounded-full text-sm mb-4 w-fit">
                  {featuredPost.category}
                </span>
                <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all w-fit">
                  Read Article
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">
            {activeCategory === 'All' ? 'Latest Articles' : `${activeCategory} Articles`}
          </h2>

          {gridPosts.length === 0 ? (
            <p className="text-gray-500 text-center py-10">No articles found in this category.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs mb-3 w-fit">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t mt-auto">
                    <div className="flex items-center space-x-2">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-purple-100 mb-8">
              Get the latest insights, travel tips, and UVIGO updates delivered to your inbox
            </p>
            <form 
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;