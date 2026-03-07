import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Users, GraduationCap, Briefcase, Heart, MapPin, Award, BookOpen, Calendar } from 'lucide-react';

const communitySegments = [
  {
    icon: Users,
    title: 'Volunteers',
    description: 'Join our community of travel enthusiasts, historians, and culture experts',
    color: 'from-teal-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1758599668547-2b1192c10abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwdGVhbXdvcmslMjBkaXZlcnNlfGVufDF8fHx8MTc3MjY0NTg2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    opportunities: [
      { icon: MapPin, title: 'Historical Contributors', description: 'Document heritage sites, share local stories, and preserve cultural knowledge' },
      { icon: BookOpen, title: 'Content Creators', description: 'Write travel guides, create photo essays, and produce educational content' },
      { icon: Heart, title: 'Community Moderators', description: 'Help maintain safe, welcoming spaces for travelers to connect' },
      { icon: Award, title: 'Expert Guides', description: 'Share your expertise as a certified local guide or specialist' },
    ],
    benefits: [
      'Free travel credits and exclusive experiences',
      'Recognition in our global volunteer network',
      'Access to volunteer-only events and meetups',
      'Professional development opportunities',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Student Ambassadors',
    description: 'Represent UVIGO on your campus and shape the future of student travel',
    color: 'from-cyan-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1770223914355-76a1f1c8f6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9uJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcyNjQ1ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    opportunities: [
      { icon: Users, title: 'Campus Programs', description: 'Organize travel talks, workshops, and student trip planning sessions' },
      { icon: Calendar, title: 'Event Coordination', description: 'Lead farewell trips, cultural exchanges, and adventure activities' },
      { icon: BookOpen, title: 'Content Creation', description: 'Share student travel stories, tips, and budget hacks' },
      { icon: Award, title: 'Leadership Development', description: 'Build skills in marketing, event management, and community building' },
    ],
    benefits: [
      'Paid stipend and commission on trips',
      'Free trips and exclusive student experiences',
      'Resume-building leadership experience',
      'Networking with students across India',
    ],
  },
  {
    icon: Briefcase,
    title: 'Corporate Partners',
    description: 'Partner with UVIGO to deliver exceptional travel experiences',
    color: 'from-green-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1772354789994-87ced36abb72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHRyYXZlbHxlbnwxfHx8fDE3NzI2NDU4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    opportunities: [
      { icon: Briefcase, title: 'Travel Vendors', description: 'Join our verified network of hotels, transport providers, and activity operators' },
      { icon: Users, title: 'Tour Operators', description: 'Partner to offer curated experiences across our ecosystem segments' },
      { icon: MapPin, title: 'Destination Partners', description: 'Tourism boards and local governments promoting your region' },
      { icon: Award, title: 'Corporate Clients', description: 'Access our B2B platform for employee and team travel' },
    ],
    benefits: [
      'Access to our growing traveler base',
      'Marketing and promotional support',
      'Data insights and analytics',
      'Streamlined booking and payment systems',
    ],
  },
];

export default function Community() {
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
              Join the{' '}
              <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">
                UVIGO Community
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Volunteers, students, and partners building the future of travel together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Hero Image */}
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
              src="https://images.unsplash.com/photo-1758599668547-2b1192c10abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwdGVhbXdvcmslMjBkaXZlcnNlfGVufDF8fHx8MTc3MjY0NTg2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-orange-600/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Powered by People Like You</h2>
                <p className="text-xl text-teal-100">Join thousands making travel better for everyone</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Segments */}
      {communitySegments.map((segment, index) => {
        const IconComponent = segment.icon;
        return (
          <section
            key={index}
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
                    <span className="font-semibold">{segment.title}</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{segment.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">{segment.description}</p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-bold">Opportunities</h3>
                    {segment.opportunities.map((opportunity, idx) => {
                      const OpportunityIconComponent = opportunity.icon;
                      return (
                        <div key={idx} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${segment.color} flex items-center justify-center flex-shrink-0`}>
                            <OpportunityIconComponent className="text-white" size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold mb-1">{opportunity.title}</h4>
                            <p className="text-gray-600 text-sm">{opportunity.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {segment.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className={`inline-flex items-center px-8 py-3 bg-gradient-to-r ${segment.color} text-white rounded-full hover:shadow-lg transition-all`}
                    >
                      Apply Now
                    </Link>
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

      {/* Community Stats */}
      <section className="py-24 bg-gradient-to-br from-teal-900 via-cyan-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Growing Community</h2>
            <p className="text-xl text-teal-200">Join thousands of contributors worldwide</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '5,000+', label: 'Active Volunteers' },
              { number: '500+', label: 'Campus Ambassadors' },
              { number: '1,000+', label: 'Partner Vendors' },
              { number: '50+', label: 'Countries Represented' },
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

      {/* How to Join */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How to Join</h2>
            <p className="text-xl text-gray-600">Getting started is easy</p>
          </div>

          <div className="space-y-8">
            {[
              { step: '1', title: 'Choose Your Path', description: 'Decide whether you want to volunteer, become a student ambassador, or partner with us' },
              { step: '2', title: 'Submit Application', description: 'Fill out the application form with your background, interests, and motivation' },
              { step: '3', title: 'Interview & Onboarding', description: 'Join a brief interview call and complete our onboarding program' },
              { step: '4', title: 'Start Contributing', description: 'Begin making an impact and earning rewards in our community' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-orange-500 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-full hover:shadow-xl transition-all"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
