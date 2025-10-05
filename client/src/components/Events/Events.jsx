import design1 from "../../assets/Events designs/design1.png";
import star from "../../assets/Events designs/star.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    section: "RENAISSANCE",
    color: "#0087ff",
    description: `To encourage the entrepreneurial
journey of translating thoughts into
action, the flagship event of E-Cell, is
held annually, bringing together the
academic community, new age
entrepreneurs and fanatics who are
passionate about ideating and
innovating from all over the country.
Renaissance 2025 will include a gamut of
activities all of which provide an avenue
to harber entrepreneurial skills and
stimulate discussion on ideas that
possess the potential to turn the issues
that plague us into opportunities to
revolutionize the world.`,
  },
  {
    section: "TEDx",
    color: `rgb(248, 43, 43)`,
    description: `At TEDx MNNIT, we believe that every idea has the spark to change the world. Through curated talks, performances, and conversations, we aim to bring together thinkers, creators, and dreamers from diverse backgrounds, empowering them to share fresh perspectives and ignite inspiration across communities. TEDx is a globally respected platform that encourages local voices to be heard on a broader stage. It is independently organized under license from TED, combining live speakers and select TED Talk videos to foster deep dialogue and connection.`,
  },
];

export default function Events() {
  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);
  return (
    <div className="events flex-col">
      <h2
        className="font-garamond mb-3 underline pt-[30px] h-[86px] w-[300px] bg-center pl-[63px] text-[1.9rem] text-gray-800 mt-[15px] sm:m-[15px] font-bold text-2xl inline-block bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${design1})` }}
      >
        Events
      </h2>
      <div className="flex flex-col justify-center items-center">
        {events.map((event, index) => (
          <div
            key={index}
            className="card m-2 mb-8 sm:w-[80vw] p-4 text-center sm:p-11 text-white border-neutral-500 border-2 rounded-md shadow-md text-1xl backdrop-blur-sm [box-shadow:1px_1px_16px_gray]"
          >
            <img
              src={star}
              alt=""
              className="star absolute h-10 w-10 text-white top-[-20px] left-[-2%] sm:left-[48%]  invert"
            />
            <h3
              className={`font-garamond underline decoration-2 decoration-white underline-offset-4 title text-[2rem] p-2 sm-text-2xl mb-5 font-bold`}
              style={{ textShadow: `1px 1px 16px ${event.color}` }}
            >
              {event.section}
            </h3>
            <p className="content font-suse tracking-loose ">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
