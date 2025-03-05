import { motion } from "framer-motion";

const gestureItems = [
  {
    text: "Hover & Tap",
    motionProps: {
      whileHover: { scale: 1.1, rotate: 8 },
      whileTap: { scale: 0.9 },
      transition: { type: "spring", stiffness: 250, damping: 12 },
    },
  },

  {
    text: "Drag Me",
    motionProps: {
      //   drag: true,drag="x or y"
      drag: true,
      dragConstraints: { top: -50, left: -50, right: 50, bottom: 50 },
      whileDrag: { scale: 1.05 },
    },
  },
  {
    text: "Drag with Constraints",
    motionProps: {
      drag: true,
      dragConstraints: { top: -100, left: -100, right: 100, bottom: 100 },
      whileHover: { scale: 1.1, rotate: -5 },
      whileTap: { scale: 0.95, backgroundColor: "red", color: "white" },
      transition: { type: "spring", stiffness: 250, damping: 12 },
    },
  },
];
const Gestures = () => {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center py-12">
      {/* Heading Section */}
      <div className="text-center mb-12 px-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
          Gestures
        </h1>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Explore Framer Motion's built-in gestures to create dynamic and
          interactive animations.
        </motion.p>
      </div>

      {/* Gesture Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {gestureItems.map(({ text, motionProps }, index) => (
          <motion.div
            key={index}
            className="bg-white text-black p-10 rounded-2xl shadow-xl w-80 h-80 flex justify-center items-center cursor-pointer"
            {...motionProps}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gestures;
