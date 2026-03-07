import React from 'react';
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
];

const categories = ['All', 'Travel Psychology', 'Trends', 'Heritage', 'Wellness', 'Solo Travel', 'Student Travel'];

const Blog = () => {
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
                className={`px-6 py-2 rounded-full transition-all ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts[0] && (
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
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-4 py-1 bg-purple-600 text-white rounded-full text-sm mb-4 w-fit">
                  {blogPosts[0].category}
                </span>
                <h3 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
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
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
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