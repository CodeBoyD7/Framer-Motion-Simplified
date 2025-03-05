import { motion } from "framer-motion";
import { useState } from "react";

const Variants = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className=" flex flex-col items-center bg-[#0a0a0a] p-6">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center bg-[#121212] p-8 rounded-xl shadow-lg border border-gray-800">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
          Variants in Framer Motion
        </h1>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Variants provide a powerful way to define animations in Framer Motion.
          They allow you to manage animation states efficiently and apply smooth
          transitions with ease.
        </motion.p>
      </div>

      {/* Animated Box Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        <motion.div
          className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl shadow-xl cursor-pointer"
          variants={{
            hidden: { opacity: 0, scale: 0.7 },
            visible: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.5 },
          }}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        />
        {/* Toggle Button */}
        <button
          onClick={() => setIsVisible((prev) => !prev)}
          className="mt-6 px-6 py-3 text-lg font-semibold text-black bg-yellow-400 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        >
          Toggle Animation
        </button>
      </div>
    </div>
  );
};

export default Variants;
