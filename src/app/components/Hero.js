'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/WhatsApp Image 2025-06-24 at 11.36.07 AM (1).jpeg"
          alt="King Karahi Tawa Restaurant Interior"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-dark/70 to-secondary/80"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="font-display text-6xl md:text-8xl font-bold">
              King Karahi Tawa
            </h1>
            <div className="space-y-2">

            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
          >
            Where Tradition Meets Taste - Experience the Royal Flavors of Pakistan
          </motion.p>

          {/* Quick Link Boxes */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="#menus"
              className="w-48 h-48 rounded-xl flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform border-4 border-yellow-400 relative overflow-hidden"
              style={{ backgroundImage: "url('/button-pattern-orange.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-primary/80"></div>
              <span className="font-bold text-lg md:text-xl text-white tracking-wide relative z-10">OUR MENUS</span>
              <span className="text-xs text-yellow-100 mt-2 relative z-10">Explore our dishes</span>
            </a>
            <a
              href="#gallery"
              className="w-48 h-48 rounded-xl flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform border-4 border-pink-400 relative overflow-hidden"
              style={{ backgroundImage: "url('/button-pattern-pink.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-secondary/80"></div>
              <span className="font-bold text-lg md:text-xl text-white tracking-wide relative z-10">GALLERY</span>
              <span className="text-xs text-pink-100 mt-2 relative z-10">See our food & venue</span>
            </a>
            <a
              href="#events"
              className="w-48 h-48 rounded-xl flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform border-4 border-green-400 relative overflow-hidden"
              style={{ backgroundImage: "url('/button-pattern-green.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-accent/80"></div>
              <span className="font-bold text-lg md:text-xl text-white tracking-wide relative z-10">EVENTS & CATERING</span>
              <span className="text-xs text-green-100 mt-2 relative z-10">Book your event</span>
            </a>
            <a
              href="#locations"
              className="w-48 h-48 rounded-xl flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform border-4 border-blue-400 relative overflow-hidden"
              style={{ backgroundImage: "url('/button-pattern-blue.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-green-600/80"></div>
              <span className="font-bold text-lg md:text-xl text-white tracking-wide relative z-10">FIND US</span>
              <span className="text-xs text-blue-100 mt-2 relative z-10">Visit our restaurant</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Order Online
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Book a Table
            </button>
            <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-full hover:bg-white/30 transition-colors">
              <Play size={20} />
              <span>Watch Our Story</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center space-x-6 pt-8"
          >
            <a href="#" className="text-white hover:text-accent transition-colors">
              Follow us on Twitter
            </a>
            <a href="#" className="text-white hover:text-accent transition-colors">
              Join us on Facebook
            </a>
            <a href="#" className="text-white hover:text-accent transition-colors">
              Follow us on Instagram
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 