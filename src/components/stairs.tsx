import { motion, Variants } from "framer-motion";

const TOTAL_STEPS = 6;

const stairAnimation: Variants = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

export const Stairs = () => {
  const reverseIndex = (index: number) => {
    return TOTAL_STEPS - index;
  };

  return (
    <>
      {[...Array(TOTAL_STEPS)].map((_, index) => (
        <motion.div
          key={index}
          exit="exit"
          initial="initial"
          animate="animate"
          variants={stairAnimation}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};
