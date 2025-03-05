import { motion } from "framer-motion";

const AnimateCard = () => {
  return (
    <motion.div
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      whileDrag={{ scale: 1.1 }}
      drag
      dragConstraints={{
        top: 50,
        bottom: 50,
        left: 0,
        right: 0,
      }}
      dragElastic={0.7}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
    >
      <img
        className="w-full  h-48 object-cover"
        src="https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg"
        alt="eat-death"
      />
      <div className="flex items-center px-6 py-4 flex-col">
        <h2 className="text-xl font-semibold text-gray-900">Card Title</h2>
        <p className="text-gray-600 text-sm">
          battle death for azeroth world of warcraft video games warcraft
          alliance wallpaper
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  transition duration-300 ease-in-out">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};
export default AnimateCard;
