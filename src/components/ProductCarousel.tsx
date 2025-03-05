import { motion } from "framer-motion";

const ProductCarousel = () => {
  return (
    <motion.div
      className="flex space-x-4 overflow-hidden"
      animate={{ x: [-100, 0, -100] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="Product"
        className="w-40"
      />
      <img
        src="https://via.placeholder.com/150"
        alt="Product"
        className="w-40"
      />
      <img
        src="https://via.placeholder.com/150"
        alt="Product"
        className="w-40"
      />
    </motion.div>
  );
};

export default ProductCarousel;
