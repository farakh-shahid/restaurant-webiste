'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Phone, Mail, Download } from 'lucide-react';

const Events = () => {
  const eventVenues = [
    {
      name: 'MyLahore Marquee Manchester',
      description: 'We also host events in our 730 capacity venue, which is a unique, Grade II listed building, enveloped within 8 acres of lush greenery, close to the heart of Manchester; the perfect venue for weddings and corporate events!',
      capacity: '730 guests',
      location: 'British Muslim Heritage Centre, Manchester',
      contact: {
        phone: '07866308508',
        email: 'marquee@mylahore.co.uk',
        website: 'events.mylahore.co.uk'
      },
      features: ['Weddings', 'Corporate Events', 'Grade II Listed Building', '8 Acres of Greenery']
    },
    {
      name: 'The Glass Marquee, Blackburn',
      description: 'Set in 54 acres of idyllic Lancashire surroundings. We can accommodate up to 450 guests, providing the perfect backdrop for your special day.',
      capacity: '450 guests',
      location: '54 acres of Lancashire surroundings',
      contact: {
        phone: '07539164138',
        email: 'glassmarquee@mylahore.co.uk',
        website: 'events.mylahore.co.uk'
      },
      features: ['Weddings', 'Special Events', 'Idyllic Surroundings', 'Perfect Backdrop']
    },
    {
      name: 'MyLahore Leeds Events Lounge',
      description: 'Explore MyLahore\'s unique private hire event space in Leeds for up to 80 seated guests, ideal for celebrations with family and friends, as well as business, charity and community events.',
      capacity: '80 seated guests',
      location: 'Leeds',
      contact: {
        phone: '01132444441',
        email: 'leeds@mylahore.co.uk',
        website: 'events.mylahore.co.uk'
      },
      features: ['Private Hire', 'Business Events', 'Charity Events', 'Community Events']
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Events and Catering
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Catering for special occasions
          </p>
        </motion.div>

        {/* Main Catering Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl font-bold mb-4">
                MyLahore can take care of your catering requirements
              </h3>
              <p className="text-lg opacity-90 mb-6">
                With a wide variety of canapes, starters, mains, desserts and showpiece cakes 
                for all kinds of events at any venue of your choosing.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>01274952111</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>07498603763</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>events@mylahore.co.uk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Download size={16} />
                  <span>View Brochure</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-4">Our Services Include:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Canapes & Starters</li>
                <li>• Main Courses</li>
                <li>• Desserts</li>
                <li>• Showpiece Cakes</li>
                <li>• Wedding Catering</li>
                <li>• Corporate Events</li>
                <li>• Private Parties</li>
                <li>• Charity Events</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Event Venues */}
        <div className="space-y-8">
          {eventVenues.map((venue, index) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-muted rounded-2xl p-8"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="font-display text-2xl font-bold text-gray-800 mb-3">
                    {venue.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {venue.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Users size={20} className="text-primary" />
                      <span className="font-semibold">{venue.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={20} className="text-primary" />
                      <span className="text-gray-600">{venue.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {venue.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Contact Details</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone size={16} className="text-primary" />
                      <span className="font-medium">{venue.contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail size={16} className="text-primary" />
                      <span className="text-gray-600">{venue.contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download size={16} className="text-primary" />
                      <span className="text-gray-600">{venue.contact.website}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <button className="w-full bg-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
                      Submit Enquiry
                    </button>
                    <button className="w-full border border-primary text-primary py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                      View Brochure
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent to-yellow-500 rounded-2xl p-8 text-white">
            <h3 className="font-display text-3xl font-bold mb-4">
              Ready to Plan Your Special Event?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let us help you create unforgettable memories with our exceptional catering and venue services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Submit Catering Enquiry
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events; 