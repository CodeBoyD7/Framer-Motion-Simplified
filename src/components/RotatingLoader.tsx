import { motion } from "framer-motion";

const RotatingLoader = () => {
  return (
    <div className="flex justify-center items-center h-full w-full bg-gray-900">
      <motion.div
        className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default RotatingLoader;
