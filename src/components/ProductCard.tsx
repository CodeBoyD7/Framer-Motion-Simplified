import { motion } from "framer-motion";

const ProductCard = () => {
  return (
    <motion.div
      className="w-60 h-80 bg-white shadow-lg rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src="https://via.placeholder.com/150" alt="Product" />
      <h2 className="text-lg font-bold p-2">Product Name</h2>
      <p className="text-gray-600 p-2">$49.99</p>
    </motion.div>
  );
};

export default ProductCard;
