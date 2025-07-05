'use client'

import { MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const OrderTakeaway = () => {
  return (
    <section
      className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/karahi.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark Gradient Overlay + Blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80 z-0" />
      <div className="absolute inset-0 backdrop-blur-md bg-black/30 z-0" />
      {/* Centered Card with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 bg-white/80 backdrop-blur-md rounded-lg shadow-xl px-8 py-10 max-w-xl w-full mx-4 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-gray-800 tracking-wide"
        >
          ORDER YOUR TAKE AWAY NOW
        </motion.h2>
        <ul className="space-y-4 text-gray-700 text-base md:text-lg">
          <li className="flex items-center justify-center gap-2">
            <MapPin size={20} className="text-primary" />
            819 Stockport Rd, Levenshulme, Manchester M19 3PL
          </li>
          <li className="flex items-center justify-center gap-2">
            <Clock size={20} className="text-primary" />
            Open 7 Days From 9:00 am to 11:30 pm
          </li>
          <li className="flex items-center justify-center gap-2">
            <Phone size={20} className="text-primary" />
            0161 843 3513
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default OrderTakeaway; 