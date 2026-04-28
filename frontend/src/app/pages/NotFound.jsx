import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home, ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-orange-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <div className="mb-8">
          <Compass className="mx-auto text-teal-500 mb-6" size={80} strokeWidth={1.5} />
          <h1 className="text-9xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lost Your Way?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Looks like you've wandered off the beaten path. This page doesn't exist, but there's plenty to explore at UVIGO!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full hover:shadow-xl transition-all"
          >
            <Home className="mr-2" size={20} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-8 py-4 bg-white text-teal-500 border-2 border-teal-500 rounded-full hover:bg-teal-50 transition-all"
          >
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </button>
        </div>

        <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm">
          <h3 className="font-bold mb-4">Popular Pages</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/ecosystem" className="text-teal-500 hover:underline">
              Ecosystem
            </Link>
            <Link to="/about" className="text-teal-500 hover:underline">
              About Us
            </Link>
            <Link to="/technology" className="text-teal-500 hover:underline">
              Technology
            </Link>
            <Link to="/contact" className="text-teal-500 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
