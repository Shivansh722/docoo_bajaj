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
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          <Link href="/" className="text-gray-700 hover:text-[#1A237E]">Home</Link>
          <Link href="/find-doctor" className="text-gray-700 hover:text-[#1A237E]">Find Doctor</Link>
          <Link href="/services" className="text-gray-700 hover:text-[#1A237E]">Our Services</Link>
          <Link href="/about" className="text-gray-700 hover:text-[#1A237E]">About Us</Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#1A237E]">Contact</Link>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#1A237E] text-white px-6 py-2 rounded-full hover:bg-[#283593] transition-colors"
        >
          Get Started
        </motion.button>
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
              className="bg-blue-500 text-white px-8 py-3 rounded-full"
            >
              Book an Appointment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-blue-500 px-8 py-3 rounded-full border border-blue-500"
            >
              Our Services →
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-4 rounded-lg absolute top-20 -left-10 shadow-lg z-10"
          >
            Expert in<br />
            Surgical care
          </motion.div>
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
