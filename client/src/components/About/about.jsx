import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Section - Title */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center lg:items-start">
              {/* Decorative line */}
              <motion.div
                className="w-1 h-16 bg-gradient-to-b from-blue-500 to-blue-700 mb-6"
                initial={{ height: 0 }}
                whileInView={{ height: 64 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
              
              {/* Title */}
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                ABOUT
                <span className="block text-blue-400">US</span>
              </motion.h2>
              
              {/* Subtitle */}
              <motion.p
                className="text-lg text-gray-400 font-light tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Empowering Innovation Since 2014
              </motion.p>
            </div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-6">
              <motion.p
                className="text-gray-300 leading-relaxed text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                Entrepreneurship Cell started its functioning in <span className="text-blue-400 font-semibold">October 2014</span> to 
                inculcate the passion and spirit among students to pursue entrepreneurship and bring together the 
                hustling minds having innovative solutions to common societal problems.
              </motion.p>
              
              <motion.p
                className="text-gray-300 leading-relaxed text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                E-Cell MNNIT comprises <span className="text-blue-400 font-semibold">content, design, web, marketing, videography and networking teams</span> for 
                a collaborative and holistic work approach, acting as a catalyst between young minds and brilliant ideas.
              </motion.p>
              
              <motion.p
                className="text-gray-300 leading-relaxed text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
              >
                We organize <span className="text-blue-400 font-semibold">RENAISSANCE</span>, our annual flagship entrepreneurial summit that 
                provides a platform for aspiring entrepreneurs through events like E-PLAN, E-TALK, Panel Discussions, 
                Mock IPL Auction, Game of Stocks, Internship Fair and Business Quiz.
              </motion.p>

              {/* Call to Action */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                viewport={{ once: true }}
              >
                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 transform hover:scale-105">
                  Learn More About Us
                </button> */}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: "10+", label: "Years of Excellence" },
            { number: "5000+", label: "Students Impacted" },
            { number: "50+", label: "Events Organized" },
            { number: "20+", label: "Startups Mentored" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
