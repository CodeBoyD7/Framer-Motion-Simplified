import { motion } from "framer-motion";

const PortfolioGrid = () => {
  return (
    <a
      href="https://github.com/CodeBoyD7"
      className="flex justify-center items-center "
    >
      <motion.img
        src="https://avatars.githubusercontent.com/u/169260481?v=4"
        className="rounded-lg shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </a>
  );
};

export default PortfolioGrid;
