import { motion } from "framer-motion";
import { useState } from "react";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-600">
      <div className="relative w-[300px] h-[400px]">
        <motion.div
          className="w-full h-full absolute"
          variants={cardVariants}
          animate={isFlipped ? "back" : "front"}
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ transformStyle: "preserve-3d", cursor: "pointer" }}
        >
          {/* Front Side */}
          <div
            className="w-full h-full bg-blue-500 flex justify-center items-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <h2 className="text-white text-2xl">Front Side</h2>
          </div>

          {/* Back Side */}
          <div
            className="w-full h-full bg-green-500 flex justify-center items-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h2 className="text-white text-2xl">Back Side</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlippingCard;
