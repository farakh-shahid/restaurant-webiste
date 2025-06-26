'use client';

import { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, ShoppingBasket } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#', highlight: true },
  { name: 'Our Menu', href: '#menus' },
  { name: 'Catering', href: '#catering' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reservations', href: '#reservations' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact Us', href: '#contact' },
];

const Logo = () => (
  <div className="flex items-center space-x-2">
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
    >
      <ellipse cx="20" cy="30" rx="12" ry="5" fill="#d97706" fillOpacity="0.7" />
      <path d="M10 28c0 5.5 20 5.5 20 0" stroke="#d97706" strokeWidth="2" fill="none" />
      <path d="M18 18c-2-2 2-4 0-6" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M22 18c-2-2 2-4 0-6" stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </motion.svg>
    <span className="font-display text-2xl font-bold" style={{ color: '#d97706' }}>King <span className="text-white">Karahi</span> Tawa</span>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Menus', href: '#menus' },
    { name: 'Where to Find us', href: '#locations' },
    { name: 'Events & Catering', href: '#events' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const secondaryNav = [
    { name: 'Join the Family', href: '#join' },
    { name: 'Our Heritage', href: '#heritage' },
    { name: 'Allergen Info', href: '#allergen' },
    { name: 'Gift Cards', href: '#gifts' },
    { name: 'Rewards', href: '#rewards' },
  ];

  return (
    <header className="bg-[#090806] w-full border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`uppercase tracking-wide text-base font-serif transition-colors duration-200 ${
                    link.highlight
                      ? 'font-semibold'
                      : 'text-gray-200'
                  } hover:text-black hover:bg-white px-3 py-1 rounded`}
                  style={link.highlight ? { color: '#d97706' } : {}}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Cart Icon */}
        <div className="ml-4 flex items-center">
          {/* Hamburger menu for mobile */}
          <button
            className="lg:hidden mr-2 p-2 rounded focus:outline-none"
            style={{ boxShadow: isMenuOpen ? '0 0 0 2px #d97706' : undefined }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
          <ShoppingBasket size={24} className="text-white" />
        </div>
      </div>
      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#232628] border-t border-gray-700 px-4 py-4">
          <ul className="flex flex-col space-y-4 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`uppercase tracking-wide text-base font-serif transition-colors duration-200 ${
                    link.highlight
                      ? 'font-semibold'
                      : 'text-gray-200'
                  } hover:text-black hover:bg-white px-3 py-1 rounded`}
                  style={link.highlight ? { color: '#d97706' } : {}}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header; 