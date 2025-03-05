import { motion } from "framer-motion";

const TypewriterText = () => {
  const text = "Typing animation in Framer Motion!";
  return (
    <div className="flex justify-center items-center h-full w-fullbg-gray-900">
      <motion.h1
        className="text-white text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.05, delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default TypewriterText;
