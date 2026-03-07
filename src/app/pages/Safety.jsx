import React from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Shield, CheckCircle, Phone, MapPin, Lock, Users, AlertCircle, Star } from 'lucide-react';

const safetyFeatures = [
  {
    icon: CheckCircle,
    title: 'Verified Vendors',
    description: 'Every hotel, transport provider, and tour operator undergoes rigorous verification and quality checks.',
    features: [
      'Background checks and license verification',
      'Regular quality audits',
      'User rating and review system',
      'Insurance and legal compliance',
    ],
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Stay connected with travelers through live location sharing and trip monitoring.',
    features: [
      'GPS-based live location sharing',
      'Trip status updates',
      'Automatic check-ins at destinations',
      'Emergency location broadcasting',
    ],
  },
  {
    icon: Phone,
    title: '24/7 Emergency Support',
    description: 'Round-the-clock assistance for any travel emergency or safety concern.',
    features: [
      'Dedicated emergency hotline',
      'Multi-language support team',
      'Local emergency contacts database',
      'Medical and legal assistance coordination',
    ],
  },
  {
    icon: Lock,
    title: 'Privacy Protection',
    description: 'Your personal data and travel information are protected with enterprise-grade security.',
    features: [
      'End-to-end encrypted communications',
      'Secure payment processing',
      'GDPR and data protection compliance',
      'Anonymous travel matching options',
    ],
  },
  {
    icon: Users,
    title: 'Women Safety Features',
    description: 'Special features designed to ensure safe travel experiences for women.',
    features: [
      'Women-only travel groups',
      'Female guide preference options',
      'Safe accommodation verification',
      'Emergency SOS with location sharing',
    ],
  },
  {
    icon: Star,
    title: 'Trust Score System',
    description: 'Transparent rating system for vendors, guides, and travel companions.',
    features: [
      'Verified user reviews',
      'Photo and video proof requirements',
      'Community reporting system',
      'Fraud detection algorithms',
    ],
  },
];

const safetyStandards = [
  'ISO 27001 certified security practices',
  'PCI DSS compliant payment processing',
  'Regular third-party security audits',
  'Travel industry safety certifications',
  'Partnership with local law enforcement',
  'Emergency response protocols',
];

const Safety = () => {
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <Shield className="text-teal-600" size={20} />
              <span className="text-sm font-semibold text-gray-700">Your Safety is Our Priority</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Safety &{' '}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Trust
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive safety infrastructure ensuring secure, trusted, and worry-free travel experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Hero Image */}
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
              src="https://images.unsplash.com/photo-1652739758426-56a564265f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBzZWN1cml0eSUyMHRydXN0JTIwc2hpZWxkfGVufDF8fHx8MTc3MjY0NTg2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Safety"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-cyan-600/80 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <Shield size={80} className="mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4">Travel with Confidence</h2>
                <p className="text-xl text-teal-100">Multi-layered security protecting every journey</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Safety Features</h2>
            <p className="text-xl text-gray-600">Comprehensive protection at every step</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Statistics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600">Our commitment to safety delivers results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '99.9%', label: 'Safe Trip Completion Rate' },
              { number: '24/7', label: 'Emergency Support' },
              { number: '5,000+', label: 'Verified Vendors' },
              { number: '<5min', label: 'Average Response Time' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl"
              >
                <div className="text-5xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Standards Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Industry-Leading Standards</h2>
              <p className="text-lg text-gray-600 mb-8">
                We adhere to the highest international safety and security standards to protect our travelers.
              </p>
              <div className="space-y-3">
                {safetyStandards.map((standard, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-medium">{standard}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center"
            >
              <div className="p-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl shadow-2xl">
                <Shield className="text-white" size={200} strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Protocol Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AlertCircle className="text-red-600 mx-auto mb-4" size={64} />
            <h2 className="text-4xl font-bold mb-4">Emergency Protocol</h2>
            <p className="text-xl text-gray-600">In case of emergency, we're here to help</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              {[
                { step: 1, title: 'Press SOS Button', desc: 'Access the emergency button in the app to instantly alert our team' },
                { step: 2, title: 'Automatic Location Sharing', desc: 'Your location is immediately shared with our emergency response team' },
                { step: 3, title: 'Emergency Contact Notification', desc: 'Your designated emergency contacts are automatically notified' },
                { step: 4, title: 'Local Assistance Dispatch', desc: 'We coordinate with local authorities and service providers for immediate help' }
              ].map((item) => (
                <div key={item.step} className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-100">
              <h4 className="font-bold mb-2 flex items-center text-red-900">
                <Phone className="mr-2 text-red-600" size={20} />
                Emergency Hotline
              </h4>
              <p className="text-3xl font-bold text-red-600">1800-UVIGO-HELP</p>
              <p className="text-sm text-gray-600 mt-1">Available 24/7 in multiple languages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Commitment Section */}
      <section className="py-24 bg-gradient-to-br from-teal-900 via-blue-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="mx-auto mb-6 opacity-80" size={80} />
            <h2 className="text-4xl font-bold mb-6">Our Safety Commitment</h2>
            <p className="text-xl text-teal-100 leading-relaxed">
              At UVIGO, safety isn't an afterthought — it's the foundation of everything we build. 
              From verified vendors to real-time tracking, from emergency protocols to privacy protection, 
              we invest heavily in creating the safest travel platform in the industry. 
              <span className="block mt-4 text-white font-semibold">
                Your trust is our most valuable asset, and we protect it with unwavering commitment.
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Safety;