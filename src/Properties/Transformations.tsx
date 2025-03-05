import { motion } from "framer-motion";

const Transformations = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-fullbg-gradient-to-br from-purple-600 to-indigo-900 p-10 gap-10">
      {/* Skew Animation */}
      <motion.div
        className="w-52 h-20 flex items-center justify-center bg-white text-black text-xl font-bold rounded-xl shadow-lg"
        animate={{ skewY: -20 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Hi Hello 👋
      </motion.div>

      {/* Transformation Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Move X & Y */}
        <motion.div
          className="box w-24 h-24 flex items-center justify-center text-white font-bold bg-blue-500 rounded-lg shadow-lg"
          animate={{ x: [0, 100, -100, 0], y: [0, 100, -100, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Move XY
        </motion.div>

        {/* Rotate Transformations */}
        <motion.div
          className="box w-24 h-24 flex items-center justify-center text-white font-bold bg-green-500 rounded-lg shadow-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          Rotate
        </motion.div>
        <motion.div
          className="box w-24 h-24 flex items-center justify-center text-white font-bold bg-yellow-500 rounded-lg shadow-lg"
          animate={{ rotateX: 180 }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          RotateX
        </motion.div>
        <motion.div
          className="box w-24 h-24 flex items-center justify-center text-white font-bold bg-red-500 rounded-lg shadow-lg"
          animate={{ rotateY: 180 }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          RotateY
        </motion.div>

        {/* Scale Transformations */}
        <motion.div
          className="box w-24 h-24 flex items-center justify-center text-white font-bold bg-pink-500 rounded-lg shadow-lg"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          Scale
        </motion.div>
        <motion.div
          className="box w-24 h-24 flex items-center justify-center text-white font-bold bg-purple-500 rounded-lg shadow-lg"
          animate={{ scaleX: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          ScaleX
        </motion.div>
        <motion.div
          className="box w-24 h-24 flex items-center justify-center text-white font-bold bg-cyan-500 rounded-lg shadow-lg"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          ScaleY
        </motion.div>
      </div>
    </div>
  );
};

export default Transformations;
