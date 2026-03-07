import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Brain, Zap, Shield, TrendingUp, Target, Cpu, Network, Lock } from 'lucide-react';

const techPillars = [
  {
    icon: Brain,
    title: 'AI Recommendation Engine',
    description: 'Our proprietary AI learns from millions of data points to suggest destinations, activities, and itineraries perfectly matched to your preferences, budget, and travel style.',
    features: [
      'Deep learning models trained on travel behavior',
      'Real-time personalization based on user interactions',
      'Multi-factor optimization (budget, time, preferences, weather)',
      'Continuous learning and improvement',
    ],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Vibe Meter System',
    description: 'Revolutionary emotion-detection technology that matches travelers based on energy levels, interests, and personality compatibility — not just demographics.',
    features: [
      'Psychometric profiling for accurate matching',
      'Natural language processing of user preferences',
      'Behavioral pattern analysis',
      'Dynamic compatibility scoring',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: TrendingUp,
    title: 'Price Prediction Intelligence',
    description: 'Advanced algorithms analyze historical pricing data, seasonality, and market trends to predict optimal booking windows and unlock the best deals.',
    features: [
      'Historical price analysis across 10+ years',
      'Real-time market monitoring',
      'Predictive analytics for future prices',
      'Smart alerts for price drops',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Network,
    title: 'Matching Algorithms',
    description: 'Sophisticated matching technology connects solo travelers, groups, and experiences using multi-dimensional compatibility metrics.',
    features: [
      'Graph-based relationship mapping',
      'Collaborative filtering',
      'Preference clustering',
      'Real-time availability matching',
    ],
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Safety Intelligence System',
    description: 'Comprehensive safety infrastructure combining AI-powered risk assessment, real-time tracking, and verified vendor networks.',
    features: [
      'AI-powered risk assessment for destinations',
      'Real-time traveler tracking',
      'Emergency response coordination',
      'Verified vendor and accommodation network',
    ],
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Cpu,
    title: 'Behavioral Savings Engine',
    description: 'Smart financial technology that analyzes spending patterns and automatically optimizes savings strategies for travel goals.',
    features: [
      'Automated savings based on spending behavior',
      'Goal-based financial planning',
      'Group wallet management',
      'Dynamic budget optimization',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
];

const techStack = [
  { category: 'AI/ML', technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP Models'] },
  { category: 'Backend', technologies: ['Node.js', 'Python', 'GraphQL', 'Microservices'] },
  { category: 'Data', technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  { category: 'Cloud', technologies: ['AWS', 'Kubernetes', 'Docker', 'Serverless'] },
  { category: 'Mobile', technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter'] },
  { category: 'Security', technologies: ['End-to-End Encryption', 'OAuth 2.0', 'Biometric Auth'] },
];

export default function Technology() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <Zap className="text-teal-600" size={20} />
              <span className="text-sm font-semibold text-gray-700">Powered by AI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Technology &{' '}
              <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI, machine learning, and data science powering intelligent travel experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Image */}
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
              src="https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMG5ldHdvcmt8ZW58MXx8fHwxNzcyNjQ1ODYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-orange-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Not Just Travel — Tech-Driven Innovation</h2>
                <p className="text-xl text-teal-100">Building the most intelligent travel platform on the planet</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Pillars */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Technology Pillars</h2>
            <p className="text-xl text-gray-600">Six core innovations powering UVIGO</p>
          </div>

          <div className="space-y-24">
            {techPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className={`inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-gradient-to-r ${pillar.color} text-white mb-6`}>
                      <IconComponent size={24} />
                      <span className="font-semibold">Innovation {index + 1}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{pillar.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{pillar.description}</p>

                    <div className="space-y-3">
                      {pillar.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pillar.color} mt-2`}></div>
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className={`p-12 bg-gradient-to-br ${pillar.color} rounded-2xl shadow-xl`}>
                      <IconComponent className="text-white mx-auto" size={120} strokeWidth={1} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-xl text-gray-600">Built with industry-leading technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-teal-600">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-700"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Stats */}
      <section className="py-24 bg-gradient-to-br from-teal-900 via-cyan-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Innovation by Numbers</h2>
            <p className="text-xl text-teal-200">Our technology delivers measurable impact</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '10M+', label: 'Data Points Analyzed Daily' },
              { number: '95%', label: 'Prediction Accuracy' },
              { number: '<100ms', label: 'Response Time' },
              { number: '99.9%', label: 'Platform Uptime' },
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

      {/* Security & Privacy */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mb-6">
                <Lock className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold mb-6">Security & Privacy First</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your data is protected with enterprise-grade security and privacy controls.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-2">End-to-End Encryption</h4>
                  <p className="text-gray-600 text-sm">All sensitive data encrypted in transit and at rest</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-2">GDPR Compliant</h4>
                  <p className="text-gray-600 text-sm">Full compliance with international data protection regulations</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-2">Zero-Knowledge Architecture</h4>
                  <p className="text-gray-600 text-sm">We can't access your private conversations or payment details</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-2">Regular Security Audits</h4>
                  <p className="text-gray-600 text-sm">Third-party penetration testing and vulnerability assessments</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="p-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl shadow-2xl">
                <Shield className="text-white mx-auto" size={200} strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
