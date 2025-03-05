import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

const UseSpring = () => {
  const x = useMotionValue(0);
  const [stiffness, setStiffness] = useState(100);
  const [damping, setDamping] = useState(10);
  const springX = useSpring(x, { stiffness, damping });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] py-12">
      {/* Title and Description */}
      <div className="text-center mb-12 px-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent py-6">
          Spring Animation
        </h1>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          This example demonstrates how to use <code>useSpring</code> in Framer
          Motion. The spring animation creates a smooth, natural movement effect
          as you drag the box horizontally. Adjust the stiffness and damping
          values using the sliders below to see how the animation changes.
        </motion.p>
      </div>

      {/* Range Sliders */}
      <div className="mb-6 flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center">
          <label className="text-gray-300 mb-1">Stiffness: {stiffness}</label>
          <input
            type="range"
            min="10"
            max="300"
            value={stiffness}
            onChange={(e) => setStiffness(Number(e.target.value))}
            className="w-64 cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-gray-300 mb-1">Damping: {damping}</label>
          <input
            type="range"
            min="1"
            max="50"
            value={damping}
            onChange={(e) => setDamping(Number(e.target.value))}
            className="w-64 cursor-pointer"
          />
        </div>
      </div>

      {/* Draggable Box */}
      <motion.div
        className="w-40 h-40 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-lg cursor-pointer"
        style={{ x: springX, background: "#ff4d4d" }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        Drag Me
      </motion.div>
    </div>
  );
};

export default UseSpring;
