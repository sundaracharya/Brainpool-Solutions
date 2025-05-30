'use client';

import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <BrainCircuit className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold gradient-text">
            Brainpool Solutions
          </span>
        </motion.div>
        
        <nav className="hidden md:flex gap-6">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#newsletter">Contact</NavLink>
        </nav>
      </div>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </motion.a>
  );
}