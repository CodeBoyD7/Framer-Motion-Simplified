import { motion } from "framer-motion";

const Transitions = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-black">
      {/* Transition Properties Card */}
      <div className="flex flex-col items-center bg-black p-8 border-8 border-yellow-300 w-[80%] rounded-2xl shadow-lg">
        {/* Title */}
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 mb-8">
          Transitions Properties
        </h1>

        {/* Transition Items */}
        <div className="space-y-6 text-white text-lg font-medium">
          {/* Duration */}
          <div className="flex items-center gap-4">
            <motion.span
              className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-yellow-300"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
            <span className="text-white font-bold">Duration</span>
            <span className="ml-2 text-yellow-300 text-xl">👉</span>
            <p className="text-gray-300">How long the animation takes.</p>
          </div>

          {/* Easing */}
          <div className="flex items-center gap-4">
            <motion.span
              className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-yellow-300"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
            <span className="text-white font-bold">Easing</span>
            <span className="ml-2 text-yellow-300 text-xl">👉</span>
            <p className="text-gray-300">The speed curve of the animation.</p>
          </div>

          {/* Delay */}
          <div className="flex items-center gap-4">
            <motion.span
              className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-yellow-300"
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <span className="text-white font-bold">Delay</span>
            <span className="ml-2 text-yellow-300 text-xl">👉</span>
            <p className="text-gray-300">
              How long to wait before starting the animation.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Box */}
      <div className="flex justify-center items-center h-[50vh] w-full">
        <motion.div
          className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl shadow-xl"
          initial={{ x: -100 }}
          animate={{ x: 100 }}
          transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Transitions;
