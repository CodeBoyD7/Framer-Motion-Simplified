import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      className="text-center text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
    </motion.div>
  );
};

export default HeroSection;
