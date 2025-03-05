import { motion, useMotionValue } from "framer-motion";
import { ChangeEvent } from "react";

const RangeSlider = () => {
  const scale = useMotionValue(1);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(e.target.value));
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <motion.div className="box" style={{ scale }} />

      <div className="mt-[8rem]">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};
export default RangeSlider;
