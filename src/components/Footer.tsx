'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: 'https://www.linkedin.com/company/103104723', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/103104723', label: 'LinkedIn' },
    { icon: Github, href: 'https://www.linkedin.com/company/103104723', label: 'GitHub' }
  ];

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Brainpool Solutions. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.1 }}
              className="p-2 glass-card hover:bg-white/10 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}