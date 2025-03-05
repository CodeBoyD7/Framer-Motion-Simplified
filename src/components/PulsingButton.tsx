import { motion } from "framer-motion";

const PulsingButton = () => {
  return (
    <div className="flex justify-center items-center h-full w-fullbg-gray-900 w-screen">
      <motion.button
        className="px-6 py-3 text-lg font-semibold rounded-lg border-2 border-white"
        animate={{
          scale: [1, 1.1, 1.2, 1.1, 1],
          backgroundColor: ["#000000", "#ffffff", "#000000"],
          color: ["#ffffff", "#000000", "#ffffff"],
        }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
      >
        Click Me
      </motion.button>
    </div>
  );
};

export default PulsingButton;
