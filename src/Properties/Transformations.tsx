import { motion } from "framer-motion";

const Transformations = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-900 p-10 gap-8">
      <motion.div
        className="w-52 h-20 flex items-center justify-center bg-white text-black text-xl font-bold rounded-xl shadow-lg"
        animate={{ skewY: -20 }}
      >
        hi hello
      </motion.div>

      <div className="grid grid-cols-3 gap-6">
        {/* Move X & Y */}
        <motion.div className="box bg-blue-500" animate={{ x: 100, y: 100 }} />

        {/* Rotate Transformations */}
        <motion.div className="box bg-green-500" animate={{ rotate: 180 }} />
        <motion.div className="box bg-yellow-500" animate={{ rotateX: 180 }} />
        <motion.div className="box bg-red-500" animate={{ rotateY: 180 }} />

        {/* Scale Transformations */}
        <motion.div className="box bg-pink-500" animate={{ scale: 0.5 }} />
        <motion.div className="box bg-purple-500" animate={{ scaleX: 0.5 }} />
        <motion.div className="box bg-cyan-500" animate={{ scaleY: 0.5 }} />
      </div>
    </div>
  );
};

export default Transformations;
