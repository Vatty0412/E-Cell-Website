import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gary from "../../assets/Appreciation/Gary.png";
import Rajeev from "../../assets/Appreciation/Rajeev.jpg";
import Chetanya from "../../assets/Appreciation/chetanya.jpg";
import Abhilekh from "../../assets/Appreciation/Abhilekh.jpg";
import Mansi from "../../assets/Appreciation/Mansi.jpg";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    title: "Efficient Collaborating",
    quote: "I duly hope the legacy continues eternally and provide ample opportunities to cater and optimistic demeanor towards being an entrepreneur, surpassing the bars set by the previous endeavours.",
    name: "Rajeev Tripathi",
    position: "Director, MNNIT Allahabad",
    image: Rajeev,
    color: "#3b82f6"
  },
  {
    id: 2,
    title: "Intuitive Design",
    quote: "I would like to give my personal congrats to the entire team of NIT Allahabad for putting up a wonderful event. The attendees were more than ecstatic than what I have ever seen anywhere else and it is this spirit that puts up a favourable stage for people like us to speak/perform.",
    name: "Chetanya Golecha",
    position: "Co-Founder, Water Float",
    image: Chetanya,
    color: "#8b5cf6"
  },
  {
    id: 3,
    title: "Mindblowing Service",
    quote: "I would like to give my personal congrats to the entire team of NIT Allahabad for putting up a wonderful event. The attendees were more than ecstatic than what I have ever seen anywhere else and it is this spirit that puts up a favourable stage for people like us to speak/perform.",
    name: "Gary Dalal",
    position: "Director, Apptology FZCO",
    image: Gary,
    color: "#ef4444"
  },
  {
    id: 4,
    title: "Great Effort",
    quote: "It was a great effort by Team Renaissance. Greatly appreciated coming back to college. Your hard work and efforts has lead to such successful event.",
    name: "Abhilekh Agarwal",
    position: "CTO, Cube26",
    image: Abhilekh,
    color: "#10b981"
  },
  {
    id: 5,
    title: "Thrilling Experience",
    quote: "I was thrilled to see such an amazing audience. The events were extraordinary and it surely made an impact to many aspiring entrepreneurs. A platform for the genesis of great ideas.",
    name: "Mansi Matela",
    position: "Head Strategy & New Initiatives, SilverPus",
    image: Mansi,
    color: "#f59e0b"
  }
];

const Appreciation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900" id="appreciation">
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
            <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mr-4"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              LINES OF
              <span className="block text-yellow-400">APPRECIATION</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 ml-4"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            What our speakers, mentors, and partners say about E-Cell MNNIT
          </p>
        </motion.div>

        {/* Custom Slider Styles */}
        <style jsx global>{`
          .testimonial-slider .slick-dots {
            bottom: -50px;
          }
          .testimonial-slider .slick-dots li button:before {
            color: #9ca3af;
            font-size: 12px;
          }
          .testimonial-slider .slick-dots li.slick-active button:before {
            color: #3b82f6;
          }
          .testimonial-slider .slick-prev,
          .testimonial-slider .slick-next {
            z-index: 1;
          }
          .testimonial-slider .slick-prev:before,
          .testimonial-slider .slick-next:before {
            color: #3b82f6;
            font-size: 24px;
          }
        `}</style>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="testimonial-slider"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="px-4 pb-8">
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 min-h-[450px] h-auto flex flex-col hover:scale-105 transition-all duration-300 group"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${testimonial.color}20` }}
                    >
                      <svg 
                        className="w-6 h-6" 
                        style={{ color: testimonial.color }}
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-lg md:text-xl font-bold text-center mb-4 group-hover:scale-105 transition-transform duration-300"
                    style={{ color: testimonial.color }}
                  >
                    {testimonial.title}
                  </h3>

                  {/* Quote */}
                  <div className="flex-grow flex items-center mb-6">
                    <blockquote className="text-gray-300 text-center text-sm md:text-base leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>

                  {/* Author Info */}
                  <div className="flex flex-col items-center mt-auto">
                    <motion.div 
                      className="relative mb-3"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div 
                        className="absolute inset-0 rounded-full opacity-20 animate-pulse"
                        style={{ backgroundColor: testimonial.color }}
                      />
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-gray-600 group-hover:border-gray-400 transition-colors duration-300"
                      />
                    </motion.div>
                    <h4 className="text-white font-semibold text-sm text-center">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-xs text-center mt-1">
                      {testimonial.position}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>

      </div>
    </section>
  );
};

export default Appreciation;
