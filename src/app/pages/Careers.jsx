import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router'; // Changed to react-router (standard)
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Briefcase, Users, Zap, Heart, TrendingUp, Globe, Coffee, Rocket } from 'lucide-react';

const openRoles = [
  {
    title: 'Senior AI/ML Engineer',
    department: 'Engineering',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    description: 'Build our AI recommendation engine and matching algorithms',
  },
  {
    title: 'Product Designer (UX/UI)',
    department: 'Design',
    location: 'Mumbai / Remote',
    type: 'Full-time',
    description: 'Craft beautiful, intuitive experiences for travelers',
  },
  {
    title: 'Backend Engineer (Node.js)',
    department: 'Engineering',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    description: 'Scale our microservices architecture to millions of users',
  },
  {
    title: 'Data Scientist',
    department: 'Data',
    location: 'Bangalore',
    type: 'Full-time',
    description: 'Analyze travel behavior and build predictive models',
  },
  {
    title: 'Content Strategist',
    department: 'Marketing',
    location: 'Delhi / Remote',
    type: 'Full-time',
    description: 'Tell compelling stories about travel and technology',
  },
  {
    title: 'Mobile Developer (React Native)',
    department: 'Engineering',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    description: 'Build delightful mobile experiences for iOS and Android',
  },
];

const benefits = [
  {
    icon: Rocket,
    title: 'Growth Opportunities',
    description: 'Fast-paced startup environment with rapid career progression',
  },
  {
    icon: Globe,
    title: 'Travel Perks',
    description: 'Generous travel credits and subsidized trips to test our platform',
  },
  {
    icon: Coffee,
    title: 'Flexible Work',
    description: 'Remote-first culture with flexible hours and work-from-anywhere options',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental wellness programs, and fitness benefits',
  },
  {
    icon: TrendingUp,
    title: 'Equity & Ownership',
    description: 'Stock options for all employees — grow with us',
  },
  {
    icon: Users,
    title: 'Amazing Team',
    description: 'Work with talented, passionate people from diverse backgrounds',
  },
];

const values = [
  {
    title: 'Think Big, Act Fast',
    description: "We're building the future of travel — ambition and speed matter",
  },
  {
    title: 'User Obsession',
    description: 'Every decision starts with "How does this help travelers?"',
  },
  {
    title: 'Own It',
    description: 'Take responsibility, deliver results, and learn from failures',
  },
  {
    title: 'Diversity Drives Innovation',
    description: 'Different perspectives make better products',
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build the Future of{' '}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Travel
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join our mission to make travel intelligent, emotional, and accessible for everyone
            </p>
            <a
              href="#open-roles"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full hover:shadow-xl transition-all"
            >
              View Open Positions
              <Briefcase className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwbW9kZXJuJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MjYxNjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-cyan-600/80 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h2 className="text-4xl font-bold mb-4">Work That Matters</h2>
                <p className="text-xl text-teal-100">Your code, designs, and ideas will touch millions of travelers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Join UVIGO?</h2>
            <p className="text-xl text-gray-600">More than just a job — it's a mission</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center mb-6">
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Culture & Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-3 text-teal-600">{value.title}</h3>
                <p className="text-gray-700 text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your next adventure</p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold group-hover:text-teal-600 transition-colors">
                        {role.title}
                      </h3>
                      <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-xs">
                        {role.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{role.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Briefcase size={14} className="mr-1" />
                        {role.department}
                      </span>
                      <span className="flex items-center">
                        <Globe size={14} className="mr-1" />
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full hover:shadow-lg transition-all text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Don't see your role?</h3>
            <p className="text-gray-600 mb-6">
              We're always looking for exceptional talent. Send us your resume and let's talk about how you can contribute.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-teal-900 via-blue-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Join a Growing Team</h2>
            <p className="text-xl text-teal-200">We're scaling fast and making an impact</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Team Members' },
              { number: '15+', label: 'Countries Represented' },
              { number: '$10M', label: 'Funding Raised' },
              { number: '100K+', label: 'Users Served' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-xl"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-teal-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="mx-auto mb-6 text-teal-600" size={64} />
            <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us in revolutionizing how the world travels. Your work will touch millions of lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-roles"
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full hover:shadow-xl transition-all"
              >
                View Open Positions
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-teal-600 rounded-full border-2 border-teal-600 hover:bg-teal-50 transition-all"
              >
                Contact Recruiting Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;