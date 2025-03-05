import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const AnimationScroll = () => {
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 15 });

  const scale = useTransform(smoothScrollY, [0, 1000], [1, 0.5]);
  const borderRadius = useTransform(smoothScrollY, [0, 1000], ["0%", "50%"]);

  return (
    <div>
      {/* Scrolling Animation Section */}
      <div className="relative h-[200vh] overflow-hidden w-full">
        <motion.img
          src="https://cdn.pixabay.com/photo/2018/04/26/16/31/marine-3352341_640.jpg"
          alt="A beautiful ocean view"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale, borderRadius }}
        />
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Scroll Down</h1>
        </div>
      </div>

      {/* Additional Content */}
      <div className="h-[200vh] flex items-center justify-center text-3xl text-gray-800">
        More Content Here
      </div>
    </div>
  );
};

export default AnimationScroll;
