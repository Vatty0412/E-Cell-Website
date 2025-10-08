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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50" : "bg-transparent"}`}>
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
              Campus
            </RouterLink>
          </div>
          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX className="h-7 w-7" /> : <HiMenuAlt4 className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/95">
              <img src={logo} alt="E-Cell Logo" className="h-9 w-auto" />
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                <HiX className="h-7 w-7" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-6 bg-gray-900/95">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-gray-200 hover:text-blue-400 text-lg font-semibold uppercase tracking-wide cursor-pointer transition-colors duration-200"
                  onClick={() => { setMenuOpen(false); navigate("/"); }}
                >
                  {link.name}
                </ScrollLink>
              ))}
              <RouterLink
                to="/campus-ambassadors"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Campus
              </RouterLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
