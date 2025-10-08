"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


export default function Gallery() {
  const galleryRef = useRef(null);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);


  const showcaseItems = [
  {
    image: "/gallery/1.png",
    smallImage: "/gallery/2.png",
    text: "140+",
    subText: "Startups & Ideas Showcased",
    color: "#f087ff",
    glowColor: "rgba(191, 253, 255, 0.2)",
  },

  {
    image: "/gallery/6.png",
    smallImage: "/gallery/4.png",
    text: "18,000+",
    subText: "Participants Over 9 Years",
    color: "#19fb9b",
    glowColor: "rgba(191, 253, 255, 0.2)",
  },

  {
    image: "/gallery/5.png",
    smallImage: "/gallery/3.png",
    text: "50+",
    subText: "Speakers & Keynotes",
    color: "#ffeb3b",
    glowColor: "rgba(191, 253, 255, 0.2)",
  },

  {
    image: "/gallery/7.png",
    smallImage: "/gallery/2.png",
    text: "90+",
    subText: "Colleges Represented",
    color: "#ffeb3b",
    glowColor: "rgba(191, 253, 255, 0.2)",
  },
];




  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const mm = gsap.matchMedia();


    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isDesktop, isMobile, reduceMotion } = context.conditions;

        if (!reduceMotion) {
          cardsRef.current.forEach((card, index) => {
            if (!card) return;


            gsap.fromTo(
              card,
              {
                opacity: 0,
                y: isDesktop ? 100 : 50,
                scale: isDesktop ? 0.8 : 0.9,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: isDesktop ? 1 : 0.6,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  end: "top 60%",
                  scrub: isDesktop ? 1 : 0.5,
                  toggleActions: "play none none reverse",
                },
              }
            );

            if (isDesktop) {
              const images = card.querySelectorAll("img");
              images.forEach((img, imgIndex) => {
                gsap.to(img, {
                  y: imgIndex === 0 ? -30 : -15,
                  scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                  },
                });
              });
            }
          });
        }


        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }
    );


    return () => {
      window.removeEventListener("resize", checkMobile);
      mm.revert();
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;


    const handleMouseMove = (e) => {
      cardsRef.current.forEach((card) => {
        if (!card) return;


        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;


        const distanceX = e.clientX - cardCenterX;
        const distanceY = e.clientY - cardCenterY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);


        const maxDistance = 200;
        if (distance < maxDistance) {
          const strength = (maxDistance - distance) / maxDistance;
          const moveX = (distanceX / distance) * strength * 15;
          const moveY = (distanceY / distance) * strength * 15;


          gsap.to(card, {
            x: moveX,
            y: moveY,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(card, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
        }
      });
    };


    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  useEffect(() => {
    const animateCounter = (element, target) => {
      if (!element) return;
      
      const obj = { count: 0 };
      gsap.to(obj, {
        count: target,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          element.textContent = Math.floor(obj.count) + "+";
        },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          once: true,
        },
      });
    };


    const counters = document.querySelectorAll(".counter-text");
    counters.forEach((counter, index) => {
      const target = parseInt(showcaseItems[index % 4].text);
      animateCounter(counter, target);
    });
  }, []);


  return (
    <section
      ref={galleryRef}
      className="relative py-10 overflow-hidden scroll-mt-40 bg-black/30 md:py-16"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="800"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-cyber-blue blur-3xl animate-pulse-slow md:w-96 md:h-96"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-cyber-pink blur-3xl animate-pulse-slow md:w-96 md:h-96"></div>
      </div>


      {/* Heading Section */}
      <div className="relative p-4 sm:p-6 md:p-8 space-y-2 text-center text-white">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider uppercase">
          Renaissance in Action
        </h1>
        
      </div>




      {/* Infinite Scrolling Showcase */}
      <div className="relative w-full mt-6 overflow-hidden md:mt-20">
        
        <div 
          ref={containerRef}
          className="overflow-visible flex gap-3 md:gap-4 h-[22rem] md:h-[26rem] animate-scroll hover:animate-scroll-paused gallery-container"
        >
          {[...showcaseItems, ...showcaseItems].map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="grid shrink-0 grid-cols-2 grid-rows-2 gap-2 w-[85vw] sm:w-[28rem] md:w-[40rem] group perspective-1000 gallery-card-wrapper"
              style={{
                willChange: "transform, opacity",
              }}
            >
              {/* Large Image with hover effects */}
              <div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg shadow-2xl gallery-card">
                <img
                  src={item.image}
                  alt="Showcase Image"
                  className="object-cover w-full h-full transition-all duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${item.glowColor} 0%, transparent 70%)`,
                  }}
                ></div>
              </div>


              {/* Small Image with tilt effect */}
              <div className="relative row-span-1 overflow-hidden rounded-lg shadow-2xl gallery-card">
                <img
                  src={item.smallImage}
                  alt="Showcase Small Image"
                  className="object-cover w-full h-full transition-all duration-500 ease-out group-hover:scale-105 group-hover:rotate-2"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    boxShadow: `inset 0 0 30px ${item.glowColor}`,
                  }}
                ></div>
              </div>


              {/* Stats Card with counter animation */}
              <div
                className="relative flex items-center justify-center w-full h-full row-span-1 p-3 text-center rounded-lg shadow-2xl md:p-4 bg-gradient-to-br from-gray-900 to-gray-800 gallery-card group-hover:shadow-neon"
                style={{
                  boxShadow: `0 0 0 1px ${item.color}33`,
                }}
              >
                <div className="space-y-2 md:space-y-4">
                  <h1
                    className="text-2xl font-semibold counter-text md:text-3xl"
                    style={{ 
                      color: item.color,
                      textShadow: `0 0 20px ${item.glowColor}`,
                    }}
                  >
                    {item.text}
                  </h1>
                  <p className="text-xs leading-tight text-white uppercase md:text-sm">
                    {item.subText}
                  </p>
                </div>
                {/* Animated border glow */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-lg pointer-events-none group-hover:opacity-100"
                  style={{
                    boxShadow: `0 0 20px ${item.glowColor}, inset 0 0 20px ${item.glowColor}`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Tailwind CSS Animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }


        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }


        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }


        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
          width: max-content;
        }


        .animate-scroll-paused:hover {
          animation-play-state: paused;
        }


        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }


        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }


        .gallery-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }


        .gallery-card:hover {
          transform: translateZ(20px);
        }


        .perspective-1000 {
          perspective: 1000px;
        }


        .shadow-neon {
          box-shadow: 0 0 30px rgba(25, 251, 155, 0.6), 0 0 60px rgba(240, 135, 255, 0.4);
        }


        /* BLUR SIBLINGS ON HOVER + SCALE UP EFFECT */
        .gallery-card-wrapper {
          transition: filter 0.4s ease, opacity 0.4s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }


        /* When container is hovered, blur and shrink all cards */
        .gallery-container:hover .gallery-card-wrapper {
          filter: blur(1px);
          opacity: 0.8;
          transform: scale(0.85);
        }


        /* Scale up and remove blur from the currently hovered card */
        .gallery-container:hover .gallery-card-wrapper:hover {
          filter: blur(0px);
          opacity: 1;
          transform: scale(1.45);
          z-index: 10;
        }


        /* Mobile optimizations */
        @media (max-width: 767px) {
          .animate-scroll {
            animation-duration: 25s;
          }
          
          .gallery-card-wrapper:active {
            transform: scale(0.98);
          }


          /* Reduce blur intensity and scale on mobile for performance */
          .gallery-container:hover .gallery-card-wrapper {
            filter: blur(0px);
            transform: scale(0.90);
          }

          .gallery-container:hover .gallery-card-wrapper:hover {
            transform: scale(1.08);
          }
        }


        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll,
          .animate-gradient,
          .animate-pulse-slow,
          .gallery-card,
          .gallery-card-wrapper {
            animation: none !important;
            transition: none !important;
          }
        }


        /* Performance optimizations */
        .gallery-card,
        .gallery-card img,
        .gallery-card-wrapper {
          will-change: transform, filter;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
