import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Briefcase, Users } from 'lucide-react';
import { useState } from 'react';

const contactTypes = [
  { icon: MessageSquare, title: 'General Inquiry', value: 'general' },
  { icon: Briefcase, title: 'Partnership', value: 'partnership' },
  { icon: Users, title: 'Join Waitlist', value: 'waitlist' },
  { icon: Phone, title: 'Press & Media', value: 'press' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'general',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
              Get in{' '}
              <span className="bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? Want to partner? Join our waitlist? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-gray-600">hello@uvigo.com</p>
                    <p className="text-gray-600">support@uvigo.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 1800-UVIGO-HELP</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      UVIGO Technologies<br />
                      Koramangala, Bangalore<br />
                      Karnataka 560034, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
                <h3 className="font-bold mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Contact Type */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      What can we help you with? *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {contactTypes.map((type) => {
                        const IconComponent = type.icon;
                        return (
                          <label
                            key={type.value}
                            className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              formData.type === type.value
                                ? 'border-teal-500 bg-teal-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="type"
                              value={type.value}
                              checked={formData.type === type.value}
                              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                              className="sr-only"
                            />
                            <IconComponent
                              size={20}
                              className={formData.type === type.value ? 'text-teal-600' : 'text-gray-400'}
                            />
                            <span className="text-sm font-medium">{type.title}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Looking for Something Specific?</h2>
            <p className="text-xl text-gray-600">Quick links to common inquiries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Join Waitlist',
                description: 'Be among the first to experience UVIGO',
                icon: Users,
                color: 'from-teal-500 to-orange-500',
              },
              {
                title: 'Partner With Us',
                description: 'Explore partnership opportunities',
                icon: Briefcase,
                color: 'from-cyan-500 to-blue-500',
              },
              {
                title: 'Media Inquiries',
                description: 'Press kit and media resources',
                icon: MessageSquare,
                color: 'from-green-500 to-teal-500',
              },
              {
                title: 'Support',
                description: 'Get help with your account',
                icon: Phone,
                color: 'from-orange-500 to-red-500',
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24 bg-gradient-to-br from-teal-900 via-cyan-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-teal-100 mb-8">
              Most common questions are answered in our FAQ section
            </p>
            <button className="px-8 py-4 bg-white text-teal-600 rounded-full hover:shadow-xl transition-all">
              View FAQ
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
