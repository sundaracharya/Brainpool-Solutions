'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbyBWkhaPVPndvaSqckmvLoUKupkt21_4VGvMi4rjEj9XbR445C7zRFe3-6CxEf1k7uoaw/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.result === 'success') {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="newsletter" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8">
            Be the first to know when we launch. Subscribe to our newsletter for exclusive updates.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-background border border-white/10 rounded-full focus:outline-none focus:border-primary"
                required
              />
              <motion.button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-3 origin-center"
              >
                <Send className="w-5 h-5" />
              </motion.button>

            </div>
          </form>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-green-400"
            >
              Thank you for subscribing! We'll keep you updated.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}