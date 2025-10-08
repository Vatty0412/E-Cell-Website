import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo1.png";

function Header() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden pt-20"
    >
      {/* Decorative background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10 w-2 h-2"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 7 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
        {/* Logo */}
        <motion.div
          className="mb-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 80, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 inline-block">
            <img src={logo} alt="E-Cell MNNIT Logo" className="w-20 h-auto md:w-28 lg:w-32 drop-shadow-lg" />
          </div>
        </motion.div>
        {/* Headings */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          THE ENTREPRENEURSHIP
          <span className="block text-blue-400 font-light">CELL</span>
        </motion.h1>
        <motion.h2
          className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 tracking-widest mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          MNNIT ALLAHABAD
        </motion.h2>
        <motion.p
          className="text-sm sm:text-lg md:text-xl text-gray-400 font-light tracking-wide mb-10"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Innovate • Create • Transform
        </motion.p>
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
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
    </section>
  );
}

export default Header;
