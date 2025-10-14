import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import TeamImg from "../../assets/TshirtLogo.jpg";
import { motion } from "framer-motion";

const GetInTouch = () => {
  const socialLinks = [
    {
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/mnnitecell",
      label: "Facebook",
      color: "#1877F2"
    },
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/ecellmnnit/",
      label: "Instagram",
      color: "#E4405F"
    },
    {
      icon: <TwitterIcon />,
      href: "https://twitter.com/ecellmnnit",
      label: "Twitter",
      color: "#1DA1F2"
    },
    {
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/company/entrepreneurship-cell-nit-allahabad/?original_referer=",
      label: "LinkedIn",
      color: "#0A66C2"
    }
  ];

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Inspirational Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-relaxed">
              "Success is walking from failure to failure with no loss of enthusiasm."
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium">
              - Winston Churchill
            </p>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex flex-col items-center lg:items-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-6"
              >
                <img
                  src={TeamImg}
                  alt="E-Cell MNNIT"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-xl"
                />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                E-Cell MNNIT
              </h3>
              <p className="text-gray-400 text-center lg:text-left leading-relaxed">
                Fostering entrepreneurship and innovation at MNNIT Allahabad. 
                Join us in building the next generation of entrepreneurs.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <EmailIcon fontSize="small" />
                </span>
                Get In Touch
              </h4>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center group"
                >
                  <LocationOnIcon className="text-gray-400 mr-4 group-hover:text-blue-400 transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    E-Cell, MNNIT Allahabad, India
                  </span>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center group"
                >
                  <PhoneIcon className="text-gray-400 mr-4 group-hover:text-green-400 transition-colors" />
                  <div className="text-gray-300 group-hover:text-white transition-colors">
                    <div>Priyanshu Agrawal - 8755799544</div>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center group"
                >
                  <PhoneIcon className="text-gray-400 mr-4 group-hover:text-green-400 transition-colors" />
                  <div className="text-gray-300 group-hover:text-white transition-colors">
                    <div>Parth Kumar - 8532036865</div>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center group"
                >
                  <EmailIcon className="text-gray-400 mr-4 group-hover:text-blue-400 transition-colors" />
                  <a 
                    href="mailto:renaissance@mnnit.ac.in"
                    className="text-gray-300 group-hover:text-white transition-colors hover:underline"
                  >
                    renaissance@mnnit.ac.in
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Social Media & Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              {/* Social Media */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Follow Us</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                        style={{ 
                          backgroundColor: `${social.color}20`,
                          border: `1px solid ${social.color}30`
                        }}
                      >
                        <div style={{ color: social.color }}>
                          {social.icon}
                        </div>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {social.label}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['About Us', 'Events', 'Gallery', 'Renaissance'].map((link, index) => (
                    <motion.a
                      key={link}
                      href={`#${link.toLowerCase().replace(' ', '')}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 5, color: '#60A5FA' }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 py-1"
                    >
                      {link}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2025 E-Cell MNNIT. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default GetInTouch;
