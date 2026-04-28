import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Target, Heart, Users, TrendingUp, Lightbulb, Map } from 'lucide-react';

export default function About() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">
                UVIGO
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the future of travel — where technology meets emotion, and planning becomes an experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Make travel <span className="text-teal-600 font-semibold">intelligent</span>,{' '}
                <span className="text-cyan-600 font-semibold">emotional</span>, and{' '}
                <span className="text-orange-600 font-semibold">accessible</span> for everyone.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe travel is not just about destinations — it's about the journey, the people, the emotions, and the memories. UVIGO brings together cutting-edge AI, behavioral economics, and human psychology to create travel experiences that truly understand you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760907218396-6a8fb1a2fcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGdsb2JlJTIwdHJhdmVsJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcyNjQ1ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMG5ldHdvcmt8ZW58MXx8fHwxNzcyNjQ1ODYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Democratize Travel:</span> Make world-class travel experiences accessible to all income groups through intelligent savings and planning.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">AI-Powered Personalization:</span> Leverage artificial intelligence to understand individual preferences, budgets, and emotional needs.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Build Community:</span> Connect travelers, volunteers, and local communities to create meaningful shared experiences.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-700 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Preserve Culture:</span> Promote India's rich heritage through curated historical and spiritual journeys.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why UVIGO Exists */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why UVIGO Exists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The travel industry has a fundamental problem — and we're solving it
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-red-50 rounded-2xl border-2 border-red-200"
            >
              <h3 className="text-2xl font-bold mb-4 text-red-900">The Problem</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✕</span>
                  <span className="text-gray-700">Travel booking is transactional — lacks emotional connection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✕</span>
                  <span className="text-gray-700">No financial planning support — people delay dreams indefinitely</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✕</span>
                  <span className="text-gray-700">Generic recommendations ignore personal preferences and life stages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✕</span>
                  <span className="text-gray-700">Solo travelers struggle to find compatible companions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✕</span>
                  <span className="text-gray-700">Group planning is chaotic and time-consuming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✕</span>
                  <span className="text-gray-700">India's rich heritage is underexplored and poorly documented</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-green-50 rounded-2xl border-2 border-green-200"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-900">The UVIGO Solution</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Emotion-driven travel experiences tailored to mental wellness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Behavior-based savings system that makes travel financially achievable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">AI-powered matching based on life stage, vibe, and preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Intelligent companion matching with privacy-first approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Group Wallet for seamless collaborative planning and budgeting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Volunteer-powered historical travel series preserving culture</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-gradient-to-br from-teal-900 via-cyan-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center mx-auto mb-8">
              <Lightbulb className="text-white" size={48} />
            </div>
            <h2 className="text-4xl font-bold mb-8">The Story Behind UVIGO</h2>
            <div className="text-lg text-teal-100 leading-relaxed space-y-4">
              <p>
                UVIGO was born from a simple observation: <span className="text-white font-semibold">everyone dreams of travel, but few make it happen</span>. The gap wasn't just financial — it was planning fatigue, decision paralysis, and lack of personalized guidance.
              </p>
              <p>
                Our founding team combined expertise from <span className="text-white font-semibold">fintech, AI, travel, and behavioral psychology</span> to ask: What if we could make travel as intelligent and accessible as ordering food online?
              </p>
              <p>
                We started with friend groups struggling to plan trips together. Then we expanded to solo travelers seeking connections, students wanting farewell adventures, seniors exploring spiritual journeys, and corporations optimizing business travel.
              </p>
              <p className="text-white font-semibold text-xl pt-4">
                Today, UVIGO is a unified ecosystem that serves every traveler's unique journey.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Gap */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Market Gap We're Filling</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A $1.9 trillion opportunity waiting to be disrupted
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl"
            >
              <Users className="text-teal-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">Underserved Segments</h3>
              <p className="text-gray-600 mb-4">
                Student travelers, senior citizens, and mental wellness seekers have no dedicated platforms serving their unique needs.
              </p>
              <div className="text-3xl font-bold text-teal-600">200M+</div>
              <div className="text-sm text-gray-500">Potential users in India alone</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl"
            >
              <TrendingUp className="text-cyan-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">Financial Innovation</h3>
              <p className="text-gray-600 mb-4">
                No existing platform combines travel planning with behavioral savings and group financial management.
              </p>
              <div className="text-3xl font-bold text-cyan-600">Zero</div>
              <div className="text-sm text-gray-500">Direct competitors with Group Wallet</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl"
            >
              <Map className="text-orange-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">Cultural Heritage</h3>
              <p className="text-gray-600 mb-4">
                India's 5000+ heritage sites lack modern, engaging digital experiences and community-driven content.
              </p>
              <div className="text-3xl font-bold text-orange-600">5000+</div>
              <div className="text-sm text-gray-500">Sites ready for digital transformation</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles guiding everything we build</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'User-First', description: 'Every feature serves the traveler, not the algorithm' },
              { title: 'Innovation', description: 'We embrace AI and technology to solve real problems' },
              { title: 'Accessibility', description: 'Great travel experiences should be available to everyone' },
              { title: 'Trust', description: 'Privacy, safety, and transparency are non-negotiable' },
              { title: 'Community', description: 'We grow together through shared experiences' },
              { title: 'Sustainability', description: 'Responsible travel that respects culture and environment' },
              { title: 'Empathy', description: 'We understand the emotional journey of travel' },
              { title: 'Excellence', description: 'Continuous improvement in everything we do' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg mb-2 text-teal-600">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
