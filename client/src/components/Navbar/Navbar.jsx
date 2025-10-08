import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const allNavItems = [
    { name: "home", label: "Home" },
    { name: "about", label: "About" },
    { name: "events", label: "Events" },
    { name: "startups", label: "Startups" },
    { name: "webinars", label: "Webinars" },
    { name: "team", label: "Team" },
    { name: "contact", label: "Contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [toggle]);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img 
              src={logo} 
              alt="E-Cell MNNIT Logo" 
              className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 drop-shadow-lg"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1">
            <div className="ml-10 flex items-center justify-center space-x-6 xl:space-x-8">
              {allNavItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ScrollLink
                    to={item.name}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-300 hover:text-blue-400 px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium uppercase tracking-wider cursor-pointer transition-colors duration-300 relative group whitespace-nowrap"
                    onClick={() => navigate("/")}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </ScrollLink>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: allNavItems.length * 0.1 }}
              >
                <RouterLink
                  to="/campus-ambassadors"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 xl:px-4 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors duration-300 whitespace-nowrap"
                >
                  Campus Ambassadors
                </RouterLink>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <motion.button
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              onClick={() => setToggle(!toggle)}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              {toggle ? (
                <HiX className="block h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <HiMenuAlt4 className="block h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {toggle && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setToggle(false)}
            />
            
            {/* Mobile menu panel */}
            <motion.div
              className="lg:hidden fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-lg border-l border-gray-800/50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col h-full">
                
                {/* Mobile header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-800/50">
                  <img 
                    src={logo} 
                    alt="E-Cell MNNIT Logo" 
                    className="h-8 w-auto"
                  />
                  <motion.button
                    className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => setToggle(false)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiX className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Mobile navigation links */}
                <div className="flex-1 px-4 py-6 space-y-2">
                  {allNavItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <ScrollLink
                        to={item.name}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="text-gray-300 hover:text-white hover:bg-gray-800/50 block px-4 py-3 text-sm font-medium uppercase tracking-wide cursor-pointer transition-colors duration-200 rounded-lg border border-transparent hover:border-gray-700"
                        onClick={() => {
                          setToggle(false);
                          navigate("/");
                        }}
                      >
                        {item.label}
                      </ScrollLink>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: allNavItems.length * 0.05 }}
                    className="pt-4"
                  >
                    <RouterLink
                      to="/campus-ambassadors"
                      className="bg-blue-600 hover:bg-blue-700 text-white block px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 text-center"
                      onClick={() => setToggle(false)}
                    >
                      Campus Ambassadors
                    </RouterLink>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
