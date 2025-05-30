'use client';

import { motion } from 'framer-motion';
import Countdown from './Countdown';
import { BrainCircuit, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="mx-auto mb-8 w-32 h-32 relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
          <BrainCircuit className="w-full h-full text-primary relative z-10" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute -inset-4 bg-primary/30 blur-2xl rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            The Future of Tech Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're crafting innovative solutions that bridge the gap between imagination and reality.
            <Sparkles className="inline-block ml-2 w-6 h-6 text-primary" />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#newsletter"
            className="neumorph-button px-8 py-4 rounded-full font-medium text-white"
          >
            Get Notified
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#services"
            className="neumorph-button px-8 py-4 rounded-full font-medium text-white/80"
          >
            Our Services
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}