'use client';

import { motion } from 'framer-motion';
import { Brain, Code, BarChart, MicroscopeIcon, Cpu, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Advanced AI solutions for automation, data analysis, and intelligent decision-making systems.'
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions and responsive web applications built with cutting-edge technologies.'
  },
  {
    icon: BarChart,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your audience and boost conversions effectively.'
  },
  {
    icon: MicroscopeIcon,
    title: 'Research & Innovation',
    description: 'Pioneering research in emerging technologies to keep you ahead of industry trends.'
  },
  {
    icon: Cpu,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services for modern business needs.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover:bg-white/10 transition-colors"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}