import { motion } from "framer-motion";

const FadeInText = () => {
  return (
    <div className="flex justify-center items-center h-full w-full bg-gray-900">
      <motion.h1
        className="text-white text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        Welcome to My Site
      </motion.h1>
    </div>
  );
};

export default FadeInText;
