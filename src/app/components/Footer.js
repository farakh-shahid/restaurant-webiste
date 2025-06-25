'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    main: [
      { name: 'Our Story', href: '#story' },
      { name: 'Our Menus', href: '#menus' },
      { name: 'Where to Find us', href: '#locations' },
      { name: 'Charity Request', href: '#charity' },
      { name: 'Catering & Events', href: '#events' },
      { name: 'Gallery', href: '#gallery' }
    ],
    secondary: [
      { name: 'Join the Family', href: '#join' },
      { name: 'Our Heritage', href: '#heritage' },
      { name: 'Allergen Info', href: '#allergen' },
      { name: 'Gift Cards', href: '#gifts' },
      { name: 'Rewards', href: '#rewards' },
      { name: 'Subscribe to Our Newsletter', href: '#newsletter' }
    ],
    support: [
      { name: 'Gallery', href: '#gallery' },
      { name: 'Feedback', href: '#feedback' },
      { name: 'FAQs', href: '#faqs' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms & Conditions', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="font-display text-2xl font-bold mb-4">King Karahi Tawa</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Manchester's premier destination for authentic Pakistani cuisine, 
              specializing in traditional karahi and tawa dishes with royal flavors.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-300">+44 161 843 3513</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-300">info@kingkarahitawa.co.uk</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-gray-300">819 Stockport Rd, Levenshulme, Manchester</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h4 className="font-semibold text-lg mb-4">More Info</h4>
            <ul className="space-y-2">
              {footerLinks.secondary.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-800 py-12"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Stay updated with our latest offers, new menu items, and special events. 
              Join our family and never miss out on the King Karahi Tawa experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 King Karahi Tawa. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms & Conditions
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 