'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Star } from 'lucide-react';

const Locations = () => {
  const location = {
    name: 'King Karahi Tawa',
    tagline: 'Manchester\'s Premier Pakistani Restaurant',
    address: '819 Stockport Rd, Levenshulme, Manchester M19 3PL, United Kingdom',
    phone: '+44 161 843 3513',
    email: 'info@kingkarahitawa.co.uk',
    hours: {
      'Monday - Thursday': '12pm-11pm',
      'Friday': '12pm-12am',
      'Saturday': '1pm-12am',
      'Sunday': '1pm-11pm'
    },
    featured: true
  };

  return (
    <section id="locations" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Where To Find Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit our restaurant in the heart of Levenshulme, Manchester
          </p>
        </motion.div>

        {/* Main Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display text-3xl font-bold mb-2">
                  {location.name}
                </h3>
                <p className="text-lg opacity-90">{location.tagline}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={24} className="text-accent" />
                <span className="font-semibold">Featured</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">Opening Times</h4>
                <div className="space-y-2">
                  {Object.entries(location.hours).map(([day, time]) => (
                    <div key={day} className="flex justify-between">
                      <span className="opacity-90">{day}</span>
                      <span className="font-semibold">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">Contact Details</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin size={20} className="mt-1" />
                    <span className="opacity-90">{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={20} />
                    <span className="font-semibold">{location.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={20} />
                    <span className="opacity-90">{location.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Order Online
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
                Book Table
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </motion.div>

        {/* Map/Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">
              Conveniently Located in Levenshulme
            </h3>
            <p className="text-gray-600 mb-6">
              Easy to reach by car, bus, or train. We're located on Stockport Road, 
              just a short distance from Manchester city centre and easily accessible 
              from surrounding areas.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">By Car</h4>
                <p className="text-gray-600">Free parking available on site</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">By Bus</h4>
                <p className="text-gray-600">Multiple bus routes serve Stockport Road</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">By Train</h4>
                <p className="text-gray-600">Levenshulme station is just 5 minutes away</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations; 