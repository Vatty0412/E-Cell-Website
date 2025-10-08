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
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 w-2 h-2"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
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
          <div className="relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50" />
            <img src={logo} alt="E-Cell MNNIT Logo" className="relative w-20 h-auto md:w-28 lg:w-32 drop-shadow-lg" />
          </div>
        </motion.div>
        
        {/* Headings */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ 
            textShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            transition: { duration: 0.3 }
          }}
        >
          THE ENTREPRENEURSHIP
          <motion.span 
            className="block text-blue-400 font-light"
            animate={{
              textShadow: [
                "0 0 10px rgba(59, 130, 246, 0.3)",
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 10px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            CELL
          </motion.span>
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
          <motion.span
            whileHover={{ color: "#60A5FA" }}
            transition={{ duration: 0.3 }}
          >
            Innovate
          </motion.span>
          {" • "}
          <motion.span
            whileHover={{ color: "#A855F7" }}
            transition={{ duration: 0.3 }}
          >
            Create
          </motion.span>
          {" • "}
          <motion.span
            whileHover={{ color: "#06B6D4" }}
            transition={{ duration: 0.3 }}
          >
            Transform
          </motion.span>
        </motion.p>
      </div>
    </section>
  );
}

export default Header;
