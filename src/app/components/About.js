'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where Tradition Meets Taste
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                King Karahi Tawa is Manchester's premier destination for authentic Pakistani cuisine, 
                specializing in traditional karahi and tawa dishes that bring the royal flavors of 
                Pakistan to the heart of Levenshulme.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey began with a passion for preserving the authentic taste of Pakistani 
                cuisine, particularly the rich and aromatic karahi dishes and the sizzling tawa 
                specialties that have been perfected over generations.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We take pride in using the finest ingredients, traditional cooking methods, and 
                family recipes passed down through generations. Every dish tells a story of 
                Pakistan's rich culinary heritage, from our signature karahi to our sizzling 
                tawa creations.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Made with Love</h3>
                <p className="text-sm text-gray-600">Every dish prepared with passion and care</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Family Friendly</h3>
                <p className="text-sm text-gray-600">Welcoming atmosphere for all ages</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star size={24} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Authentic Taste</h3>
                <p className="text-sm text-gray-600">Traditional Pakistani flavors</p>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white text-center">
              <h3 className="font-display text-3xl font-bold mb-4">
                Authentic Pakistani Cuisine
              </h3>
              <p className="text-lg mb-6">
                Traditional karahi and tawa dishes with royal flavors
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-bold text-2xl">100%</div>
                  <div>Halal</div>
                </div>
                <div>
                  <div className="font-bold text-2xl">20+</div>
                  <div>Years</div>
                </div>
                <div>
                  <div className="font-bold text-2xl">1</div>
                  <div>Location</div>
                </div>
                <div>
                  <div className="font-bold text-2xl">50+</div>
                  <div>Dishes</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 