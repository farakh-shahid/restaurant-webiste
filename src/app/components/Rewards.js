'use client';

import { motion } from 'framer-motion';
import { Gift, Smartphone, Download, Star, Users, CreditCard } from 'lucide-react';

const Rewards = () => {
  return (
    <section id="rewards" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Rewards
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Online Rewards Reward
          </p>
        </motion.div>

        {/* Main Rewards Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-3xl font-bold text-gray-800 mb-6">
                Save money and enjoy more with MyLahore Rewards – sign up today!
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our huuugely rewarding scheme offers you 10% credit on the value of your restaurant 
                order to use on a future date! So every £10 spent earns you £1 worth of credit! 
                For example, spend £50 and get £5 credit to use later!
              </p>
              
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Example Reward</h4>
                    <p className="text-sm opacity-90">Spend £50 → Get £5 Credit</p>
                  </div>
                  <Gift size={32} className="text-accent" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-primary" />
                  <span>Available for dine-in and collection orders</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-primary" />
                  <span>Works at all our stores</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-primary" />
                  <span>Telephone delivery orders at Bradford Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-primary" />
                  <span>Not available for online delivery via UberEats</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <Smartphone size={20} className="mr-2 text-primary" />
                  Say hello to our refreshed App!
                </h4>
                <p className="text-gray-600 mb-4">
                  Rewards, perks & the MyLahore world at your fingertips.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex items-center justify-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    <Download size={16} />
                    <span>Download on Google</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    <Download size={16} />
                    <span>Download on Apple</span>
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent to-yellow-500 rounded-xl p-6 text-white">
                <h4 className="font-semibold text-lg mb-4">How it Works</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">1</div>
                    <span>Sign up for MyLahore Rewards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">2</div>
                    <span>Place orders at any MyLahore location</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">3</div>
                    <span>Earn 10% credit on every order</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">4</div>
                    <span>Use your credits on future visits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 text-center shadow-lg"
          >
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard size={32} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">10% Credit Back</h3>
            <p className="text-gray-600 text-sm">
              Earn 10% credit on every order to use on future visits
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 text-center shadow-lg"
          >
            <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">All Locations</h3>
            <p className="text-gray-600 text-sm">
              Available at all MyLahore restaurants and delivery locations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 text-center shadow-lg"
          >
            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift size={32} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Exclusive Perks</h3>
            <p className="text-gray-600 text-sm">
              Get access to special offers, birthday treats, and member-only events
            </p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="font-display text-3xl font-bold mb-4">
              Join MyLahore Rewards Today!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Start earning rewards on every visit and enjoy exclusive member benefits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Sign Up Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
                Download App
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">Terms Apply!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rewards; 