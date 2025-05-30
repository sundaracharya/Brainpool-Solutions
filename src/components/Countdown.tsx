'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const difference = +new Date('June 15, 2025') - +new Date();
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center"
  >
    <div className="glass-card w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-2">
      <span className="text-4xl md:text-5xl font-bold gradient-text">
        {value.toString().padStart(2, '0')}
      </span>
    </div>
    <span className="text-sm uppercase tracking-wider text-muted-foreground">
      {label}
    </span>
  </motion.div>
);

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft()); // initialize on client only

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null; // or a loading skeleton

  return (
    <div className="flex justify-center gap-4 md:gap-6">
      <CountdownItem value={timeLeft.days} label="Days" />
      <CountdownItem value={timeLeft.hours} label="Hours" />
      <CountdownItem value={timeLeft.minutes} label="Minutes" />
      <CountdownItem value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
