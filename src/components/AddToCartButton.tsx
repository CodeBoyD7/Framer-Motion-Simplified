import { motion } from "framer-motion";

const AddToCartButton = () => {
  return (
    <motion.button
      className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg"
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      Add to Cart 🛒
    </motion.button>
  );
};

export default AddToCartButton;
