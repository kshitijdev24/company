import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Users,
  Sparkles,
  Briefcase,
  GraduationCap,
  Compass,
  Heart,
  Brain,
  Wallet,
  MapPin,
  Camera,
  Shield,
  TrendingUp,
  Calendar,
  MessageCircle,
  Flower2,
} from 'lucide-react';

const ecosystemSegments = [
  {
    id: 'friend-group',
    title: 'Friend Group Travel Planner',
    tagline: 'Plan Together, Save Together, Travel Together',
    icon: Users,
    color: 'from-teal-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1760638261786-159e37aa5c6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZyaWVuZHMlMjB0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzcyNjAyNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'The ultimate solution for friend groups who dream of traveling together but struggle with coordination, budgeting, and decision-making.',
    features: [
      {
        icon: Wallet,
        title: 'Group Wallet',
        description: 'Collective savings with smart contribution tracking. Each member contributes based on their capacity, and AI optimizes savings strategies.',
      },
      {
        icon: Brain,
        title: 'AI Planning Assistant',
        description: 'Our AI analyzes group preferences, budgets, and constraints to suggest perfect destinations and itineraries that satisfy everyone.',
      },
      {
        icon: Calendar,
        title: 'Smart Scheduling',
        description: 'Find the perfect dates when everyone is available. Syncs with calendars and suggests optimal booking windows for best prices.',
      },
      {
        icon: MessageCircle,
        title: 'Collaborative Decision Making',
        description: 'Polls, voting, and consensus-building tools make group decisions transparent and democratic.',
      },
    ],
    useCases: [
      'College friend reunions',
      'Annual bachelor/bachelorette trips',
      'Family vacation planning',
      'Corporate team offsites',
    ],
  },
  {
    id: 'historical',
    title: 'Historical Travel Series',
    tagline: 'Discover India\'s Rich Heritage',
    icon: Sparkles,
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1682918350375-f48720d782ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwbW9udW1lbnQlMjBpbmRpYSUyMHRlbXBsZXxlbnwxfHx8fDE3NzI2NDU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A community-powered initiative to map, document, and share India\'s 5000+ heritage sites with authentic stories and expert-curated content.',
    features: [
      {
        icon: MapPin,
        title: 'Heritage Mapping',
        description: 'Comprehensive database of temples, forts, monuments, and cultural sites with historical context, architecture details, and visiting guides.',
      },
      {
        icon: Users,
        title: 'Volunteer Network',
        description: 'History enthusiasts, researchers, and local experts contribute stories, photos, and insights to enrich every destination.',
      },
      {
        icon: Sparkles,
        title: 'Curated Journeys',
        description: 'Thematic routes like "Mughal Trail", "Temple Architecture", "Freedom Struggle Sites" designed by historians.',
      },
      {
        icon: Camera,
        title: 'Digital Archive',
        description: 'User-contributed photos, videos, and oral histories create a living archive of India\'s cultural legacy.',
      },
    ],
    useCases: [
      'Educational student tours',
      'Heritage enthusiast expeditions',
      'Photography-focused trips',
      'Cultural immersion experiences',
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Travel Solutions',
    tagline: 'Streamlined Business Travel',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1772354789994-87ced36abb72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHRyYXZlbHxlbnwxfHx8fDE3NzI2NDU4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Enterprise-grade travel management with AI-powered expense optimization, policy compliance, and seamless booking workflows.',
    features: [
      {
        icon: TrendingUp,
        title: 'Expense Optimization',
        description: 'AI analyzes travel patterns to negotiate better rates, suggest cost-effective alternatives, and predict budget needs.',
      },
      {
        icon: Shield,
        title: 'Policy Compliance',
        description: 'Automated approval workflows ensure all bookings align with company travel policies while reducing admin overhead.',
      },
      {
        icon: Brain,
        title: 'Intelligent Booking',
        description: 'Learn employee preferences, predict travel needs, and proactively suggest bookings that balance cost and comfort.',
      },
      {
        icon: Briefcase,
        title: 'Unified Dashboard',
        description: 'Real-time visibility into all corporate travel, expenses, and employee locations for managers and finance teams.',
      },
    ],
    useCases: [
      'Business travel management',
      'Conference and event logistics',
      'Team offsite planning',
      'Client meeting coordination',
    ],
  },
  {
    id: 'student',
    title: 'Student Travel Ecosystem',
    tagline: 'Memorable Journeys for Students',
    icon: GraduationCap,
    color: 'from-green-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1770223914355-76a1f1c8f6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9uJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcyNjQ1ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Purpose-built for student travelers — from budget-friendly farewell trips to creating YJHD-style cinematic memories.',
    features: [
      {
        icon: Wallet,
        title: 'Student-Friendly Pricing',
        description: 'Special rates, flexible payment plans, and EMI options make dream trips affordable for college students.',
      },
      {
        icon: Camera,
        title: 'Memory Capture',
        description: 'Professional photography and videography packages create movie-like memories of your farewell trips.',
      },
      {
        icon: Users,
        title: 'Batch Planning',
        description: 'Tools designed for large groups (50+ students) with accommodation, transport, and activity management.',
      },
      {
        icon: MapPin,
        title: 'Campus Ambassadors',
        description: 'Student representatives in every college help organize trips, negotiate group rates, and build community.',
      },
    ],
    useCases: [
      'College farewell trips',
      'Inter-college cultural exchanges',
      'Educational tours',
      'Budget backpacking adventures',
    ],
  },
  {
    id: 'solo',
    title: 'Solo Travel Companion',
    tagline: 'Connect with Like-Minded Travelers',
    icon: Compass,
    color: 'from-indigo-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1630317171721-d58349d5c889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xvJTIwdHJhdmVsZXIlMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzI2NDU4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'For solo travelers who want the freedom of independent travel with the option to connect with compatible companions.',
    features: [
      {
        icon: Brain,
        title: 'Vibe Matching',
        description: 'AI analyzes travel style, interests, energy levels, and personality to match you with compatible travel companions.',
      },
      {
        icon: Shield,
        title: 'Privacy-First Design',
        description: 'Anonymous profiles, verified users, and gradual information disclosure ensure safety and comfort.',
      },
      {
        icon: Users,
        title: 'Flexible Groups',
        description: 'Join existing trips, create your own, or travel completely solo with optional meetup opportunities.',
      },
      {
        icon: MessageCircle,
        title: 'Pre-Trip Connection',
        description: 'Chat, video calls, and virtual meetups before committing to travel together.',
      },
    ],
    useCases: [
      'Solo backpacking trips',
      'Adventure activities (trekking, diving)',
      'Spiritual journeys',
      'Work-from-anywhere experiences',
    ],
  },
  {
    id: 'senior',
    title: 'Senior Travel Experiences',
    tagline: 'Comfort-First Spiritual Journeys',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1764816647520-1cfd6867f53a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwdHJhdmVsJTIwY291cGxlfGVufDF8fHx8MTc3MjY0NTg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Thoughtfully designed travel experiences for senior citizens prioritizing comfort, accessibility, and meaningful connections.',
    features: [
      {
        icon: Heart,
        title: 'Comfort Prioritization',
        description: 'Carefully selected accommodations, comfortable transport, and manageable itineraries suited for senior travelers.',
      },
      {
        icon: Sparkles,
        title: 'Spiritual Journeys',
        description: 'Curated temple tours, pilgrimage routes, and spiritual retreats with knowledgeable guides.',
      },
      {
        icon: Shield,
        title: 'Medical Support',
        description: 'Travel insurance, emergency medical assistance, and accessibility information for every destination.',
      },
      {
        icon: Users,
        title: 'Social Groups',
        description: 'Connect with fellow senior travelers for companionship and shared experiences.',
      },
    ],
    useCases: [
      'Pilgrimage tours (Char Dham, Varanasi)',
      'Hill station retreats',
      'Cultural heritage tours',
      'Wellness and Ayurveda trips',
    ],
  },
  {
    id: 'wellness',
    title: 'Mental Wellness Travel',
    tagline: 'Healing Journeys & Digital Detox',
    icon: Flower2,
    color: 'from-emerald-500 to-green-500',
    image: 'https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBuYXR1cmUlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzI2NDU4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Travel as therapy — curated experiences designed to heal, rejuvenate, and restore mental and emotional balance.',
    features: [
      {
        icon: Flower2,
        title: 'Healing Destinations',
        description: 'Serene locations selected for their natural beauty, quietude, and therapeutic environments.',
      },
      {
        icon: Brain,
        title: 'Emotion-Based Matching',
        description: 'AI recommends destinations based on your current emotional state and wellness goals (stress relief, creativity, healing).',
      },
      {
        icon: Heart,
        title: 'Digital Detox',
        description: 'Structured programs that help you disconnect from technology and reconnect with yourself and nature.',
      },
      {
        icon: Sparkles,
        title: 'Wellness Activities',
        description: 'Yoga, meditation, journaling, nature walks, and therapeutic workshops integrated into every journey.',
      },
    ],
    useCases: [
      'Post-breakup healing trips',
      'Burnout recovery retreats',
      'Creative inspiration journeys',
      'Mindfulness and meditation retreats',
    ],
  },
];

export default function Ecosystem() {
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
              The{' '}
              <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">
                UVIGO Ecosystem
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seven unique travel verticals, one intelligent platform. Every journey, every traveler, every dream — covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {ecosystemSegments.map((segment, index) => {
              const IconComponent = segment.icon;
              return (
                <motion.a
                  key={index}
                  href={`#${segment.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-teal-50 hover:to-orange-50 transition-all cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${segment.color} flex items-center justify-center mb-2`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <span className="text-xs text-center font-medium text-gray-700">{segment.title.split(' ')[0]}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Segments */}
      {ecosystemSegments.map((segment, index) => {
        const IconComponent = segment.icon;
        return (
          <section
            key={segment.id}
            id={segment.id}
            className={index % 2 === 0 ? 'py-24 bg-white' : 'py-24 bg-gray-50'}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'md:order-2' : ''}
                >
                  <div className={`inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-gradient-to-r ${segment.color} text-white mb-6`}>
                    <IconComponent size={24} />
                    <span className="font-semibold">Segment {index + 1}</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{segment.title}</h2>
                  <p className="text-xl text-teal-600 font-semibold mb-6">{segment.tagline}</p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{segment.description}</p>

                  <div className="space-y-6">
                    {segment.features.map((feature, idx) => {
                      const FeatureIconComponent = feature.icon;
                      return (
                        <div key={idx} className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${segment.color} flex items-center justify-center flex-shrink-0`}>
                            <FeatureIconComponent className="text-white" size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                    <h4 className="font-bold mb-3">Perfect For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {segment.useCases.map((useCase, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white rounded-full text-sm border border-gray-200"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'md:order-1' : ''}
                >
                  <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={segment.image}
                      alt={segment.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${segment.color} opacity-20`}></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Unified Platform */}
      <section className="py-24 bg-gradient-to-br from-teal-900 via-cyan-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">One Platform, Infinite Possibilities</h2>
            <p className="text-xl text-teal-100 mb-12 leading-relaxed">
              Whether you're a student planning a farewell trip, a solo traveler seeking adventure, or a senior exploring spiritual journeys — UVIGO understands your unique needs and delivers personalized experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl">
                <div className="text-4xl font-bold mb-2">7</div>
                <div className="text-teal-200">Travel Ecosystems</div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl">
                <div className="text-4xl font-bold mb-2">1</div>
                <div className="text-teal-200">Unified Platform</div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl">
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="text-teal-200">Possibilities</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
