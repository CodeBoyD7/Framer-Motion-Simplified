import { motion } from "framer-motion";

const SlideInCard = () => {
  return (
    <div className="flex justify-center items-center h-full w-full ">
      <motion.div
        className="p-6 bg-white rounded-lg shadow-lg"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        Hello, I'm a sliding card!
      </motion.div>
    </div>
  );
};

export default SlideInCard;
