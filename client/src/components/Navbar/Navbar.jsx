import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Events", to: "events" },
  { name: "Startups", to: "startups" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50" : "bg-gray-900/80 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <img src={logo} alt="E-Cell Logo" className="h-10 w-auto" />
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-200 hover:text-blue-400 px-2 py-1 text-sm font-medium uppercase tracking-wide cursor-pointer transition-colors duration-200"
                onClick={() => navigate("/")}
              >
                {link.name}
              </ScrollLink>
            ))}
            <RouterLink
              to="/campus-ambassadors"
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors duration-200"
            >
              Campus Ambassadors
            </RouterLink>
          </div>
          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700/50 focus:outline-none transition-all duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX className="h-7 w-7" /> : <HiMenuAlt4 className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 h-screen z-[9999] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              // Prevent clicking through to background elements
              e.stopPropagation();
            }}
          >
            {/* Solid Background Overlay */}
            <motion.div
              className="absolute inset-0 bg-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Animated Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.div
                className="absolute bottom-40 right-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </div>

            {/* Menu Content */}
            <div className="relative z-10 flex flex-col h-full bg-gray-900">
              
              {/* Header Section */}
              <motion.div
                className="flex items-center justify-between px-6 py-4 border-b border-gray-700/50 bg-gray-800/80"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <motion.img
                  src={logo}
                  alt="E-Cell Logo"
                  className="h-10 w-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.button
                  className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm text-gray-200 hover:text-white hover:bg-gray-700/70 transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiX className="h-6 w-6" />
                </motion.button>
              </motion.div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-6 bg-gray-900">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.1 + (index * 0.1),
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      <ScrollLink
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="group block py-4 px-6 rounded-xl transition-all duration-300 hover:bg-gray-800/30 backdrop-blur-sm border border-transparent hover:border-gray-700/50"
                        onClick={() => { setMenuOpen(false); navigate("/"); }}
                      >
                        <div className="flex items-center justify-between">
                          <motion.span
                            className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300"
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.name}
                          </motion.span>
                          <motion.div
                            className="w-6 h-6 rounded-full bg-blue-500/20 group-hover:bg-blue-500/40 transition-all duration-300"
                            whileHover={{ scale: 1.2 }}
                          >
                            <div className="w-full h-full rounded-full border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-300" />
                          </motion.div>
                        </div>
                        <motion.div
                          className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </ScrollLink>
                    </motion.div>
                  ))}
                </div>

                {/* Campus Ambassador Button */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-8"
                >
                  <RouterLink
                    to="/campus-ambassadors"
                    onClick={() => setMenuOpen(false)}
                    className="block"
                  >
                    <motion.div
                      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm" />
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-2">
                          Campus Ambassadors
                        </h3>
                        <p className="text-blue-100 text-sm">
                          Join our ambassador program
                        </p>
                      </div>
                      
                      {/* Animated particles */}
                      <motion.div
                        className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full"
                        animate={{ 
                          y: [0, -10, 0],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: 0
                        }}
                      />
                      <motion.div
                        className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white/40 rounded-full"
                        animate={{ 
                          y: [0, -8, 0],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{ 
                          duration: 2.5,
                          repeat: Infinity,
                          delay: 0.5
                        }}
                      />
                    </motion.div>
                  </RouterLink>
                </motion.div>
              </div>

              {/* Footer Section */}
              <motion.div
                className="px-6 py-6 border-t border-gray-700/50 bg-gray-800/80"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <span>E-Cell MNNIT</span>
                
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
