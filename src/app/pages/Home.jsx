import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Wallet,
  Brain,
  Target,
  Heart,
  Users,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
} from 'lucide-react';

const ecosystemCards = [
  {
    title: 'Friend Group Planner',
    description: 'Plan together, save together, travel together',
    icon: Users,
    color: 'from-teal-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1760638261786-159e37aa5c6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZyaWVuZHMlMjB0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzcyNjAyNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Historical Tours',
    description: 'Discover India\'s rich heritage',
    icon: Sparkles,
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1682918350375-f48720d782ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwbW9udW1lbnQlMjBpbmRpYSUyMHRlbXBsZXxlbnwxfHx8fDE3NzI2NDU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Corporate Travel',
    description: 'Streamlined business travel solutions',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1772354789994-87ced36abb72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHRyYXZlbHxlbnwxfHx8fDE3NzI2NDU4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Student Ecosystem',
    description: 'Memorable journeys for students',
    icon: Sparkles,
    color: 'from-green-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1770223914355-76a1f1c8f6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9uJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcyNjQ1ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Solo Travel',
    description: 'Connect with like-minded travelers',
    icon: Target,
    color: 'from-indigo-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1630317171721-d58349d5c889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xvJTIwdHJhdmVsZXIlMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzI2NDU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Senior Travel',
    description: 'Comfort-first spiritual journeys',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1764816647520-1cfd6867f53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwdHJhdmVsJTIwY291cGxlfGVufDF8fHx8MTc3MjY0NTg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Mental Wellness',
    description: 'Healing journeys and digital detox',
    icon: Heart,
    color: 'from-emerald-500 to-green-500',
    image: 'https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBuYXR1cmUlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzI2NDU4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

const innovations = [
  {
    icon: Wallet,
    title: 'Behavior-Driven Savings',
    description: 'Smart Group Wallet that learns and optimizes',
  },
  {
    icon: Brain,
    title: 'AI-Powered Decisions',
    description: 'Intelligent recommendations based on your preferences',
  },
  {
    icon: Target,
    title: 'Hyper-Personalization',
    description: 'Every journey tailored to your unique needs',
  },
  {
    icon: Heart,
    title: 'Emotion-Driven Travel',
    description: 'Mental wellness and vibe-based matching',
  },
  {
    icon: Users,
    title: 'Community-Powered',
    description: 'Discover through shared experiences',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'Verified vendors and real-time support',
  },
];

const experienceFlow = [
  { step: 'Save', description: 'Start your journey fund' },
  { step: 'Unlock', description: 'Access exclusive deals' },
  { step: 'Match', description: 'Find your perfect trip' },
  { step: 'Plan', description: 'AI-assisted planning' },
  { step: 'Experience', description: 'Live your adventure' },
  { step: 'Remember', description: 'Capture memories' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50 to-orange-50 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Travel,{' '}
              <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">
                Reimagined
              </span>
              <br />
              Around You.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A unified travel ecosystem powered by savings, AI, community, and human emotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ecosystem"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-full text-lg hover:shadow-xl transition-all inline-flex items-center justify-center"
              >
                Explore Ecosystem
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-teal-600 rounded-full text-lg border-2 border-teal-500 hover:bg-teal-50 transition-all inline-flex items-center justify-center"
              >
                Join Early Access
              </Link>
            </div>
          </motion.div>

          {/* Hero Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {ecosystemCards.slice(0, 4).map((card, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What is UVIGO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What is UVIGO?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              UVIGO is an <span className="text-teal-600 font-semibold">intelligent travel ecosystem</span> that combines{' '}
              <span className="text-cyan-600 font-semibold">financial planning</span>,{' '}
              <span className="text-orange-600 font-semibold">AI-driven recommendations</span>, and{' '}
              <span className="text-orange-700 font-semibold">personalized experiences</span> across every stage of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Ecosystem */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Ecosystem</h2>
            <p className="text-xl text-gray-600">
              Seven unique travel experiences, one unified platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to="/ecosystem" className="block">
                    <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                      <ImageWithFallback
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-60`}></div>
                      <div className="absolute inset-0 flex items-end p-6">
                        <div className="text-white">
                          <IconComponent size={32} className="mb-2" />
                          <h3 className="text-2xl font-bold">{card.title}</h3>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 group-hover:text-teal-600 transition-colors">
                      {card.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/ecosystem"
              className="inline-flex items-center px-8 py-4 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all"
            >
              Explore Full Ecosystem
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* How UVIGO is Different */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How UVIGO is Different</h2>
            <p className="text-xl text-gray-600">
              Not just features — innovation pillars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-orange-500 flex items-center justify-center mb-4">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Flow */}
      <section className="py-24 bg-gradient-to-br from-teal-900 via-cyan-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Journey with UVIGO</h2>
            <p className="text-xl text-teal-200">
              From savings to memories — simplified
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {experienceFlow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center flex-1"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.step}</h3>
                <p className="text-teal-200">{item.description}</p>
                {index < experienceFlow.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="mx-auto text-white/40" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for the Next Generation of Travelers
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Join thousands of early adopters who are reimagining how they travel, save, and explore the world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-teal-50 rounded-2xl">
                <div className="text-4xl font-bold text-teal-600 mb-2">10,000+</div>
                <div className="text-gray-600">Early Access Sign-ups</div>
              </div>
              <div className="p-8 bg-cyan-50 rounded-2xl">
                <div className="text-4xl font-bold text-cyan-600 mb-2">7</div>
                <div className="text-gray-600">Travel Ecosystems</div>
              </div>
              <div className="p-8 bg-orange-50 rounded-2xl">
                <div className="text-4xl font-bold text-orange-600 mb-2">AI-First</div>
                <div className="text-gray-600">Personalization Engine</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Travel Experience?
            </h2>
            <p className="text-xl mb-8 text-teal-100">
              Join our waitlist and be among the first to experience intelligent travel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-teal-600 rounded-full text-lg hover:shadow-xl transition-all inline-flex items-center justify-center"
              >
                Join Waitlist
              </Link>
              <Link
                to="/ecosystem"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
