'use client';

import { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';

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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-white py-2">
        <div className="containadner mx-auto px-4">
          <div className=" flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+44 161 843 3513</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>819 Stockport Rd, Levenshulme, Manchester</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>100% Halal</span>
              <span>•</span>
              <span>Authentic Pakistani Cuisine</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-display text-3xl font-bold text-primary font-dancing-script">
              King Karahi Tawa
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
              Order Online
            </button>
            <button className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
              Book Table
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="border-t pt-4 mt-4">
              {secondaryNav.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-primary text-sm py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col space-y-2 pt-4">
              <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
                Order Online
              </button>
              <button className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                Book Table
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 