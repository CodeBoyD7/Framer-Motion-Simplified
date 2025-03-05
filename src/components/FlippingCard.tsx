import { motion } from "framer-motion";
import { useState } from "react";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex justify-center items-center ">
      <div className="relative w-[300px] h-[400px] perspective-1000">
        <motion.div
          className="w-full h-full relative"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            transformStyle: "preserve-3d",
            cursor: "pointer",
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full bg-blue-500 flex justify-center items-center rounded-lg shadow-xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <h2 className="text-white text-2xl font-semibold">Front Side</h2>
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full bg-green-500 flex justify-center items-center rounded-lg shadow-xl"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h2 className="text-white text-2xl font-semibold">Back Side</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlippingCard;
