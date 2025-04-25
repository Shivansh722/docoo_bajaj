'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EEF4FF]">
      {/* Navigation */}
      <nav className="py-4 px-8 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <h1 className="text-2xl font-bold text-[#1A237E]">DocSyne</h1>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold text-[#1A237E] mb-6">
            Quality & expert care for your health
          </h1>
          <p className="text-gray-600 mb-8">
            YOUR WELLNESS,<br />
            OUR PRIORITY EVERY<br />
            STEP OF THE WAY
          </p>
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => window.location.href = '/find-doctor'}
              className="bg-blue-500 text-white px-8 py-3 rounded-full"
            >
              Find Doctor
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-[#1A237E]">24/7</h3>
              <p className="text-gray-600">Online Support</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-[#1A237E]">100+</h3>
              <p className="text-gray-600">Doctors</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-[#1A237E]">1M+</h3>
              <p className="text-gray-600">Active Patients</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          
          <Image
            src="/doctor.png"
            alt="Doctor"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </motion.div>
      </div>

      {/* Sphere of Health Section */}
      <div className="container mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1A237E]">Sphere of</h2>
          <p className="text-4xl text-gray-400">health haven</p>
        </motion.div>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Embark on a transformative journey into the world of health, where our 
          unwavering commitment to your well-being goes beyond expectations, 
          ensuring trusted, compassionate care every step of the way.
        </p>
      </div>
    </div>
  );
}
