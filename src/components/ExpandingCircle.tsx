import { motion } from "framer-motion";

const ExpandingCircle = () => {
  return (
    <div className="flex justify-center items-center h-[100%] w-[100%] bg-gray-900">
      <motion.div
        className="w-10 h-10 bg-blue-500 rounded-full"
        animate={{
          scale: [1, 2.5],
          opacity: [1, 0],
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
      />
    </div>
  );
};

export default ExpandingCircle;
