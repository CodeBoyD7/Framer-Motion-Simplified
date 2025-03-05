import { motion } from "framer-motion";

const Keyframe = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-[30vh] flex justify-center items-center ">
        <div className="flex flex-col items-center justify-center  bg-[#0a0a0a] p-10">
          {/* Heading with Gradient Effect */}
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
            Keyframes
          </h1>

          {/* Animated Description */}
          <motion.p
            className="mt-6 text-lg text-gray-300 max-w-2xl text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Keyframes allow us to create more complex animations by specifying
            multiple points in an animation sequence. Instead of just animating
            from one state to another, we can define several intermediate states
            (<span className="font-bold text-white">frames</span>) to control
            the animation more precisely by Splitting /Dividing Animations into
            multiple frames.
          </motion.p>
        </div>
      </div>
      <div className="flex justify-center items-center h-[70vh]">
        <motion.div
          className="box"
          //   animate={{ scale: [1, 2, 3, 4, 5, 4, 3, 2, 1] }}
          //   animate={{ rotate: [0, 0, 10, 20, 50, 100, 200, 100, 50, 10, 0, 0] }}
          animate={{ borderRadius: ["20%", "20%", "50%", "50%", "20%"] }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
};

export default Keyframe;
