import { motion } from "framer-motion";

const StaggeredList = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div className="flex flex-col items-center h-full w-fullbg-gray-900 pt-10">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="p-4 mb-2 bg-white rounded-lg shadow-lg w-40 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default StaggeredList;
