import { motion } from "framer-motion";

const FlipCard = () => {
  return (
    <div className="flex justify-center items-center h-full w-fullbg-gray-900">
      <motion.div
        className="w-40 h-40 bg-blue-500 text-white flex items-center justify-center text-lg font-bold rounded-lg"
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.5 }}
      >
        Flip Me
      </motion.div>
    </div>
  );
};

export default FlipCard;
