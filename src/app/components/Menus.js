'use client';

import { motion } from 'framer-motion';
import { Utensils, Coffee, Gift, Users, Star } from 'lucide-react';
import { useState } from 'react';

const Menus = () => {
  const menuCategories = [
    {
      title: 'Main Menu',
      description: 'Our famous diverse menu with something for everyone',
      icon: Utensils,
      color: 'from-primary to-primary-dark',
      items: ['Traditional Curries', 'Grills & BBQs', 'Biryani & Rice', 'Breads & Naan']
    },
    {
      title: 'Sharing Boxes & Uncooked Range',
      description: 'UK mainland delivery available',
      icon: Gift,
      color: 'from-secondary to-red-700',
      items: ['Party Boxes', 'Family Meals', 'Frozen Range', 'Ready to Cook']
    },
    {
      title: 'Cakes & Tray Bakes',
      description: 'Homemade gourmet goodness',
      icon: Coffee,
      color: 'from-accent to-yellow-600',
      items: ['Traditional Cakes', 'Tray Bakes', 'Celebration Cakes', 'Desserts']
    },
    {
      title: 'Catering',
      description: 'Special occasions and events',
      icon: Users,
      color: 'from-green-500 to-green-700',
      items: ['Weddings', 'Corporate Events', 'Private Parties', 'Canapes']
    }
  ];

  const popularDishes = [
    {
      name: 'Butter Chicken',
      category: 'Curry',
      price: '£12.95',
      spicy: false,
      image: '/WhatsApp Image 2025-06-24 at 11.36.07 AM (5).jpeg',
      description: 'Tender chicken cooked in a creamy tomato sauce with aromatic spices.',
      ingredients: 'Chicken, tomato, cream, butter, garam masala, ginger, garlic'
    },
    {
      name: 'Lamb Karahi',
      category: 'Grill',
      price: '£15.95',
      spicy: true,
      image: '/Platter3.webp',
      description: 'Succulent lamb pieces simmered in a traditional karahi wok.',
      ingredients: 'Lamb, tomatoes, green chili, ginger, garlic, coriander, spices'
    },
    {
      name: 'Chicken Biryani',
      category: 'Rice',
      price: '£13.95',
      spicy: false,
      image: '/Platter2.webp',
      description: 'Fragrant basmati rice layered with spiced chicken and herbs.',
      ingredients: 'Chicken, basmati rice, saffron, fried onions, yogurt, spices'
    },
    {
      name: 'Mixed Grill',
      category: 'BBQ',
      price: '£18.95',
      spicy: true,
      image: '/BBQ.webp',
      description: 'A sizzling selection of our best grilled meats and kebabs.',
      ingredients: 'Chicken tikka, lamb chops, seekh kebab, spices, lemon'
    },
    {
      name: 'Paneer Tikka',
      category: 'Vegetarian',
      price: '£11.95',
      spicy: false,
      image: '/Platter.webp',
      description: 'Grilled paneer cubes marinated in yogurt and spices.',
      ingredients: 'Paneer, yogurt, bell pepper, onion, spices, lemon'
    },
    {
      name: 'Fish Curry',
      category: 'Seafood',
      price: '£14.95',
      spicy: true,
      image: '/BBQ3.webp',
      description: 'Delicate fish fillets cooked in a spicy, tangy curry sauce.',
      ingredients: 'Fish, tomatoes, tamarind, mustard seeds, curry leaves, spices'
    }
  ];

  const categories = ['All', ...Array.from(new Set(popularDishes.map(d => d.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredDishes = selectedCategory === 'All' ? popularDishes : popularDishes.filter(d => d.category === selectedCategory);

  return (
    <section id="menus" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Menus
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Food to Make you Feel Sparklewowed
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white text-center h-full transform transition-transform group-hover:scale-105`}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon size={32} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm opacity-90 mb-4">{category.description}</p>
                <ul className="text-xs space-y-1">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="opacity-80">• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Menu Items Section with Background */}
        <div 
          className="relative py-12 mb-16 rounded-2xl overflow-hidden"
          style={{
            backgroundImage: 'url(/menu-bg.jpg)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
          {/* Content */}
          <div className="relative z-10">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full border font-semibold transition-colors text-base cursor-pointer ${selectedCategory === cat ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Menu Items Section Redesigned */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                {filteredDishes.map((dish, index) => (
                  <div key={dish.name} className="flex items-start gap-6 pb-8 border-b border-dashed border-gray-300 last:border-b-0">
                    {/* Circular Image with Shadow */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white bg-white">
                        <img src={dish.image} alt={dish.name} className="object-cover w-full h-full" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-lg text-gray-900 tracking-tight uppercase">
                          {dish.name}
                        </h4>
                        <span className="font-bold text-gray-900 text-base ml-4 whitespace-nowrap">
                          {dish.price}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-1">
                        {dish.description}
                      </div>
                      <div className="text-sm italic text-red-600 font-dancing-script">
                        {dish.ingredients}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}

      </div>
    </section>
  );
};

export default Menus; 