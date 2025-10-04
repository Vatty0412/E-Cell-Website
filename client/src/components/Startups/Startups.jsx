import { startups } from "../../assets/startups";
import { motion } from "framer-motion";
const Startups = () => {
  return (
      <div className="flex flex-col items-center xl:py-20 xl:pb-16 sm:py-10" id="startups">
        <div id="stick" className="flex justify-center">
          <div className="bg-stone-400 h-20 w-1 mb-8"></div>
        </div>
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 2, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
          className="text-4xl text-stone-300 flex flex-col items-center mb-4"
        >
          <div className="text-4xl text-center text-stone-300">
            STARTUPS BY MNNITians
          </div>
        </motion.div>
        <div className="flex flex-wrap justify-center">
          {startups.map((startup, index) => (
            <motion.a
              key={index}
              whileInView={{ x: [-20, 0], opacity: [0, 1] }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              href={startup.link}
              target="_blank"
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex justify-center items-center space-y-5 py-5 rounded-2xl"
            >
              <div className="bg-orange-100 h-fit w-fit rounded-full flex justify-center items-center">
                <img
                  className="object-contain w-40 h-40 rounded-2xl"
                  src={startup.logo}
                  alt={startup.alt}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
  );
};

export default Startups;
