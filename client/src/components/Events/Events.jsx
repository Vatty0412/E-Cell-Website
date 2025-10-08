import { motion } from "framer-motion";
import { useEffect } from "react";

const events = [
  {
    section: "RENAISSANCE",
    color: "#3b82f6",
    description: `To encourage the entrepreneurial journey of translating thoughts into action, the flagship event of E-Cell is held annually, bringing together the academic community, new age entrepreneurs and fanatics who are passionate about ideating and innovating from all over the country. Renaissance 2025 will include a gamut of activities all of which provide an avenue to harbor entrepreneurial skills and stimulate discussion on ideas that possess the potential to turn the issues that plague us into opportunities to revolutionize the world.`,
    features: ["E-PLAN", "E-TALK", "Panel Discussions", "Business Quiz", "Internship Fair"]
  },
  {
    section: "TEDx",
    color: "#ef4444",
    description: `At TEDx MNNIT, we believe that every idea has the spark to change the world. Through curated talks, performances, and conversations, we aim to bring together thinkers, creators, and dreamers from diverse backgrounds, empowering them to share fresh perspectives and ignite inspiration across communities. TEDx is a globally respected platform that encourages local voices to be heard on a broader stage.`,
    features: ["Curated Talks", "Live Performances", "Networking", "Innovation Showcase", "Community Building"]
  },
];

export default function Events() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-red-500 mr-4"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              EVENTS
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-blue-500 ml-4"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our flagship events that inspire innovation and entrepreneurship
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Event Info */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <motion.div
                    className="space-y-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Event Title */}
                    <div className="relative">
                      <motion.h3
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                        style={{ 
                          textShadow: `0 0 20px ${event.color}`,
                          color: event.color 
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {event.section}
                      </motion.h3>
                      <div 
                        className="absolute -top-2 -left-2 w-8 h-8 rounded-full opacity-20 animate-pulse"
                        style={{ backgroundColor: event.color }}
                      />
                    </div>

                    {/* Event Description */}
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      {event.description}
                    </p>

                    {/* Event Features */}
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold text-lg">Key Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.features.map((feature, featureIndex) => (
                          <motion.span
                            key={featureIndex}
                            className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-gray-500 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            style={{ borderColor: `${event.color}30` }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: event.color,
                        boxShadow: `0 4px 15px ${event.color}30`
                      }}
                      whileHover={{ 
                        boxShadow: `0 8px 25px ${event.color}40`,
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </div>

                {/* Event Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-80 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-500 to-transparent transform rotate-45"></div>
                    </div>
                    
                    {/* Event Logo/Visual */}
                    <div className="relative z-10 text-center">
                      <motion.div
                        className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${event.color}20`, border: `2px solid ${event.color}` }}
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity, 
                          ease: "linear"
                        }}
                      >
                        <span className="text-2xl font-bold" style={{ color: event.color }}>
                          {event.section.charAt(0)}
                        </span>
                      </motion.div>
                      <h4 className="text-white text-xl font-semibold mb-2">{event.section}</h4>
                      <p className="text-gray-400 text-sm">Annual Flagship Event</p>
                    </div>

                    {/* Floating Elements */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full opacity-30"
                        style={{
                          backgroundColor: event.color,
                          top: `${Math.random() * 80 + 10}%`,
                          left: `${Math.random() * 80 + 10}%`,
                        }}
                        animate={{
                          x: [0, Math.random() * 100 - 50],
                          y: [0, Math.random() * 100 - 50],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 4 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}

      </div>
    </section>
  );
}
