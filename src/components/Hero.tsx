import React from 'react';
import { Shield, Clock, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative bg-blue-600 text-white overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
          alt="Plumber at work"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="relative container mx-auto px-4 py-24">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Professional Plumbing <br />
            <motion.span
              className="text-blue-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Services You Can Trust
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Available 24/7 for all your plumbing needs. Licensed, bonded, and insured.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Service
            </motion.button>
            <motion.button 
              className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Emergency Service
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Feature icon={Shield} title="Licensed & Insured" description="Fully licensed professionals you can trust" />
          <Feature icon={Clock} title="24/7 Service" description="Emergency services available anytime" />
          <Feature icon={ThumbsUp} title="Satisfaction Guaranteed" description="100% satisfaction guaranteed on all work" />
        </motion.div>
      </div>
    </div>
  );
}

function Feature({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <motion.div 
      className="flex items-start space-x-4"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-white p-3 rounded-full">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-blue-100">{description}</p>
      </div>
    </motion.div>
  );
}