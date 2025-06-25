'use client';

import { motion } from 'framer-motion';
import { Utensils, Coffee, Gift, Users, Star } from 'lucide-react';

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
    { name: 'Butter Chicken', category: 'Curry', price: '£12.95', spicy: false },
    { name: 'Lamb Karahi', category: 'Grill', price: '£15.95', spicy: true },
    { name: 'Chicken Biryani', category: 'Rice', price: '£13.95', spicy: false },
    { name: 'Mixed Grill', category: 'BBQ', price: '£18.95', spicy: true },
    { name: 'Paneer Tikka', category: 'Vegetarian', price: '£11.95', spicy: false },
    { name: 'Fish Curry', category: 'Seafood', price: '£14.95', spicy: true }
  ];

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

        {/* Popular Dishes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-3xl font-bold text-gray-800 mb-4">
            Sparklewowed Homemade Gourmet Goodness
          </h3>
          <p className="text-lg text-gray-600">
            100% Superlicious
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">{dish.name}</h4>
                  <p className="text-sm text-gray-500">{dish.category}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {dish.spicy && <Star size={16} className="text-red-500" />}
                  <span className="font-bold text-primary">{dish.price}</span>
                </div>
              </div>
              <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                <Utensils size={32} className="text-primary" />
              </div>
              <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors">
                Add to Order
              </button>
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
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="font-display text-3xl font-bold mb-4">
              Order Online the MyLahore Way
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Choose your location and start your culinary journey
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Choose Location & Order
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menus; 