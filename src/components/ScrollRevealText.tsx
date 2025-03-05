import { motion } from "framer-motion";

const ScrollRevealText = () => {
  return (
    <motion.h2
      className="text-3xl font-bold text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      I create amazing web experiences!
    </motion.h2>
  );
};

export default ScrollRevealText;
