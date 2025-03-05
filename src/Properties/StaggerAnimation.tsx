import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StaggerAnimation = () => {
  const cards = [
    {
      id: 1,
      title: "Apple's Smooth UI",
      desc: "Apple uses staggered animations in iOS to create fluid transitions.",
    },
    {
      id: 2,
      title: "Google's Material Design",
      desc: "Google's UI uses stagger effects for a more engaging user experience.",
    },
    {
      id: 3,
      title: "Microsoft's Fluent Design",
      desc: "Microsoft employs subtle hover animations to enhance UX.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center py-12">
      {/* Heading Section */}
      <div className="text-center mb-12 px-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
          Stagger Animation
        </h1>
        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          This is a simple example of how to use the stagger animation in Framer
          Motion. The stagger animation is used to animate multiple elements
          sequentially, with a delay between each element.
        </motion.p>
      </div>

      {/* Gesture Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-gray-800 rounded-xl shadow-lg text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-300">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StaggerAnimation;
