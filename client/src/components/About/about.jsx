import { motion } from "framer-motion";
import {
  IconRocket,
  IconUsers,
  IconCalendarEvent,
} from "@tabler/icons-react";
import Img from "../../assets/innov.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent pt-40 pb-24 md:pt-48 z-0"
    >
      {/* Subtle dark navy glow in corners */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-60 h-60 bg-[#0A1A3D]/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0A1A3D]/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 xl:px-20 relative z-10">
        {/* Title Section */}
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="text-white text-5xl sm:text-6xl font-bold tracking-wide shadow-md bg-transparent">
            About Us
          </div>
          <p className="mt-6 text-gray-200 text-lg md:text-xl max-w-3xl leading-relaxed">
            Where innovation meets impact — nurturing entrepreneurs and ideas
            that create real change.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE → Image */}
          <motion.div
            initial={{ x: "-20%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex items-center justify-center will-change-transform"
          >
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm">
              <img
                src={Img}
                alt="Innovation"
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1A3D]/50 to-transparent"></div>
            </div>
          </motion.div>

          {/* RIGHT SIDE → Transparent Content Box */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white/5 backdrop-blur-xl rounded-3xl shadow-lg p-10 md:p-14 hover:shadow-2xl will-change-transform"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              <span className="font-bold text-white">Entrepreneurship Cell </span>
              started its journey in October 2014 to ignite passion and cultivate
              entrepreneurial spirit among students. We aim to bring together
              creative minds with innovative solutions to societal challenges,
              transforming ideas into scalable business ventures.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3">
              Collaboration & Innovation
            </h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              <span className="font-bold text-white">E-Cell MNNIT </span>
              comprises dynamic teams in content, design, web, marketing,
              videography, and networking — ensuring a holistic environment for
              innovation. We bridge the gap between vision and execution through
              teamwork and creativity.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-3">
              Our Flagship Event
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Each year, we host{" "}
              <span className="font-bold text-white">Renaissance</span> — MNNIT’s
              premier entrepreneurial summit. It empowers young innovators to
              turn their ideas into reality through events like E-Plan, E-Talk,
              Panel Discussions, Mock IPL Auction, Game of Stocks, Internship
              Fair, and Business Quiz.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Section */}
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24"
        >
          {[
            {
              icon: IconRocket,
              title: "Entrepreneurship",
              description:
                "Fostering innovation and leadership through hands-on experiences.",
            },
            {
              icon: IconUsers,
              title: "Community",
              description:
                "Building a strong, collaborative network of innovators and changemakers.",
            },
            {
              icon: IconCalendarEvent,
              title: "Events & Initiatives",
              description:
                "Organizing impactful summits, talks, and workshops for aspiring founders.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 1.8, ease: "easeOut", delay: i * 0.2 }}
              className="group relative will-change-transform"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-[#5DA9E9]/40 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0A1A3D] to-[#1E3A8A] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#5DA9E9] transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
