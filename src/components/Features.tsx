'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  'State-of-the-art AI Models',
  'Cloud-Native Architecture',
  'Enterprise-Grade Security',
  'Real-time Analytics',
  '24/7 Expert Support',
  'Scalable Infrastructure',
  'Custom Integration',
  'Continuous Innovation'
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our cutting-edge solutions and expert team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-4 flex items-center gap-3"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}