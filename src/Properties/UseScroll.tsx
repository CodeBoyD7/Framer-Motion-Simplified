import { motion, useScroll, useTransform } from "framer-motion";

const UseScroll = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  return (
    <div className=" flex items-center justify-center">
      <motion.div
        className="bg-blue-500 w-32 h-32 rounded-lg shadow-lg"
        style={{ scale, opacity }}
      ></motion.div>
      <div className="w-full h-[150vh]"></div>
    </div>
  );
};
export default UseScroll;
