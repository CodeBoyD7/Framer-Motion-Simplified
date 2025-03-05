import { motion } from "framer-motion";

const ShakingButton = () => {
  return (
    <div className="flex justify-center items-center h-full w-full  bg-gray-900">
      <motion.button
        className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg"
        whileHover={{
          x: [-5, 5, -5, 5, 0],
        }}
        transition={{ duration: 0.3 }}
      >
        Shake Me
      </motion.button>
    </div>
  );
};

export default ShakingButton;
