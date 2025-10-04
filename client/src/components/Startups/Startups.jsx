import { useRef, useEffect, useState } from 'react';
import { startups } from '../../assets/startups';
import { motion } from 'framer-motion';

const Marquee = ({ items, direction, pixelsPerSecond }) => {
    const marqueeRef = useRef(null);
    const [marqueeWidth, setMarqueeWidth] = useState(0);
    const duplicatedItems = [...items, ...items];
    
    useEffect(() => { if (marqueeRef.current) setMarqueeWidth(marqueeRef.current.scrollWidth / 2); }, []);
    const duration = marqueeWidth / pixelsPerSecond;

    return (
        <motion.div
            ref={marqueeRef}
            className="flex flex-nowrap gap-16 justify-start py-5"
            animate={{
                x: direction === 'left' ? [0, -marqueeWidth] : [-marqueeWidth, 0],
            }}
            transition={{
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: duration,
                    ease: 'linear',
                },
            }}
        >
            {duplicatedItems.map((startup, index) => (
                <motion.a
                    key={index}
                    whileHover={{
                        scale: [1, 1.05, 0.98, 1.02, 1],
                        transition: { duration: 0.6 },
                    }}
                    href={startup.link}
                    target="_blank"
                >
                    <div className="bg-orange-100 h-40 w-40 rounded-full flex justify-center items-center p-3">
                        <img
                            className="object-contain max-w-full max-h-full"
                            src={startup.logo}
                            alt={startup.alt}
                        />
                    </div>
                </motion.a>
            ))}
        </motion.div>
    );
};


const Startups = () => {
    const firstRow = startups.slice(0, Math.ceil(startups.length / 2));
    const secondRow = startups.slice(Math.ceil(startups.length / 2));

    return (
        <motion.div
            className="flex flex-col items-center xl:py-20 xl:pb-16 sm:py-10" id="startups"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <motion.div
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 2, ease: 'easeOut' }}
                className="text-4xl text-stone-300 flex flex-col items-center mb-4"
            >
                <div className="text-4xl text-center text-stone-300">STARTUPS BY MNNITians</div>
            </motion.div>

            <div id="stick" className="flex justify-center">
                <div className="bg-stone-400 w-80 h-1 my-10"></div>
            </div>

            <div className="w-full overflow-hidden flex flex-col space-y-10">
                <Marquee items={ firstRow } direction="left" pixelsPerSecond={ 75 } />
                <Marquee items={ secondRow } direction="right" pixelsPerSecond={ 75 } />
            </div>
            
            <div id="stick" className="flex justify-center">
                <div className="bg-stone-400 w-80 h-1 my-10"></div>
            </div>
        </motion.div>
    );
};

export default Startups;