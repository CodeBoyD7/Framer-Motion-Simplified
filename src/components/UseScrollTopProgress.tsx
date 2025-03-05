import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const UseScrollTopProgress = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] py-12">
      {/* Title and Description */}
      <motion.div className="text-center mb-12 px-6" style={{ scale, opacity }}>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Scroll Animation
        </h1>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          This example showcases the <code>useScroll</code> hook in Framer
          Motion. It tracks the user's scroll progress and triggers animations
          based on scrolling behavior.
        </motion.p>
      </motion.div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-red-500 origin-left"
        style={{ scaleX: smoothScroll }}
      />

      {/* Scrollable Content with Scroll-Driven Animation */}
      <div
        ref={containerRef}
        className="w-full max-w-2xl h-96 overflow-y-scroll bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <p className="text-gray-300 mb-4">
          Scroll down to see how animations are triggered and driven by scroll
          progress. The text below fades out gradually as you scroll.
        </p>
        {[...Array(20)].map((_, index) => (
          <motion.p
            key={index}
            className="text-gray-400 mb-4"
            style={{
              opacity: useTransform(scrollYProgress, [0, 1], [1, 0.2]),
              x: useTransform(scrollYProgress, [0, 1], [0, 50]),
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque et facilisis ligula.
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default UseScrollTopProgress;
