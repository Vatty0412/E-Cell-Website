import React from "react";
import { motion } from "framer-motion";

import logo from "../../assets/logo1.png";

function Header() {
  return (
    <div 
      className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black"
      id="home"
    >
      {/* Subtle background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10 w-2 h-2"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        
        {/* Logo section */}
        <motion.div
          className="mb-12"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            type: "spring", 
            stiffness: 80,
            delay: 0.3 
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <img 
              src={logo} 
              alt="E-Cell MNNIT Logo" 
              className="w-20 h-auto md:w-28 lg:w-32 drop-shadow-lg" 
            />
          </div>
        </motion.div>
        
        {/* Main heading */}
        <motion.div
          className="mb-12 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="block text-white">
              THE ENTREPRENEURSHIP
            </span>
            <span className="block text-blue-400 font-light">
              CELL
            </span>
          </motion.h1>
          
          <motion.h2
            className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-300 tracking-widest"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            MNNIT ALLAHABAD
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg text-gray-400 font-light tracking-wide"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Innovate • Create • Transform
          </motion.p>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          <motion.button
            className="px-8 py-3 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Us
          </motion.button>
          
          <motion.button
            className="px-8 py-3 font-medium text-gray-300 bg-transparent border border-gray-600 hover:border-gray-400 hover:text-white rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
