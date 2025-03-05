import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const UseTransform = () => {
  const x = useMotionValue(0);
  const [outputRange, setOutputRange] = useState([0, 360]);
  const rotate = useTransform(x, [-100, 100], outputRange);

  return (
    <div className=" flex flex-col items-center justify-center bg-[#0a0a0a] py-12">
      {/* Title and Description */}
      <div className="text-center mb-12 px-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Transform Animation
        </h1>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          This example showcases the <code>useTransform</code> hook in Framer
          Motion. It maps motion values from one range to another. Drag the box
          to see it rotate dynamically based on the horizontal movement.
        </motion.p>
      </div>

      {/* Range Slider */}
      <div className="mb-6 flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center">
          <label className="text-gray-300 mb-1">
            Rotation Range: {outputRange[1]}°
          </label>
          <input
            type="range"
            min="0"
            max="720"
            value={outputRange[1]}
            onChange={(e) => setOutputRange([0, Number(e.target.value)])}
            className="w-64 cursor-pointer"
          />
        </div>
      </div>

      {/* Draggable Rotating Box */}
      <motion.div
        className="w-40 h-40 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-lg cursor-pointer"
        style={{ x, rotate, background: "#4d79ff" }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        Drag Me
      </motion.div>
    </div>
  );
};

export default UseTransform;
