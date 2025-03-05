import { motion, useMotionValue, useTransform } from "framer-motion";

const UseMotionValue = () => {
  const x = useMotionValue(0);
  const background = useTransform(x, [-100, 100], ["#ff0000", "#0000ff"]);

  return (
    <div className="flex flex-col items-center justify-center bg-[#0a0a0a] py-12">
      {/* Title and Description */}
      <div className="text-center mb-12 px-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Motion Value Animation
        </h1>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          This example demonstrates how to use <code>useMotionValue</code> and{" "}
          <code>useTransform</code> in Framer Motion. Drag the box horizontally
          to see the background color change dynamically.
        </motion.p>
      </div>

      {/* Draggable Box */}
      <motion.div
        className="w-40 h-40 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-lg cursor-pointer"
        style={{ x, background }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        Drag Me
      </motion.div>
    </div>
  );
};

export default UseMotionValue;
