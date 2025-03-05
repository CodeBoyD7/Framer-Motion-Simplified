import { motion } from "framer-motion";

const FloatingElement = () => {
  return (
    <div className="flex justify-center items-center h-full w-full bg-gray-900">
      <motion.div
        className="w-16 h-16 bg-blue-500 rounded-full"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default FloatingElement;
