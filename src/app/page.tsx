'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 grid-pattern opacity-20" />
      <div className="fixed inset-0 siri-gradient" />
      <div className="fixed inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Header />
        <main>
          <Hero />
          <Services />
          <Features />
          <Newsletter />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}