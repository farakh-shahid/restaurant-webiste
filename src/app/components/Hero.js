'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const heroImages = [
  // '/bg-header.jpg',
  '/Lahori-Butt-Karahi-Hero-Setion-Image.webp',
  // '/karahi.jpg',
  // '/daily-slowdown-7-TOCB28rms-unsplash.jpg',
  // '/Lahori-Butt-Karahi-Hero-Setion-Image.webp',
  // '/pexels-hasan-kurt-154798938-10749578.jpg',
  // '/pexels-hasan-kurt-154798938-13151204.jpg',
  // '/pexels-hot-wok-3583741-12232804.jpg',
  // '/pexels-jonathanborba-2983102.jpg',
];

const heroSlogans = [
  'BEST KARAHI IN MANCHESTER',
  'Authentic Pakistani Flavours',
  'Where Taste Meets Tradition',
  'Sizzling Specialties Await',
  'A Royal Feast Experience',
];

// Animation variants for falling letters
const letterVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.07,
      type: 'spring',
      stiffness: 500,
      damping: 30,
    },
  }),
};

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 7000); // 7 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={heroImages[current]}
            src={heroImages[current]}
            alt="King Karahi Tawa Restaurant Hero Background"
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        {/* Gradient Overlay */}
        <div className="absolute inset-0" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center text-white relative z-10 flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="font-display text-4xl md:text-8xl font-semibold md:font-bold flex justify-center flex-wrap">
              {"King Karahi Tawa".split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
            {/* Typewriter Slogan */}
            <div className="text-xl md:text-4xl font-sans font-normal mt-4">
              <Typewriter
                words={[heroSlogans[current]]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={30}
                deleteSpeed={25}
                delaySpeed={5000}
              />
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
          >
            {/* Where Tradition Meets Taste - Experience the Royal Flavors of Pakistan */}
          </motion.p>

          {/* Quick Link Boxes */}
          {/* Removed as per user request */}

          {/* CTA Buttons */}
          {/* Removed CTA buttons as per user request */}

          {/* Social Links */}
          {/* Removed social links as per user request */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 