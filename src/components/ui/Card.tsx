import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}