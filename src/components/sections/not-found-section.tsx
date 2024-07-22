"use client";

import { motion } from "framer-motion";

export const NotFoundSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center gap-[20px]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
        }}
        className="text-5xl font-bold text-center text-accent"
      >
        404: Página não encontrada
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
        }}
        className="text-center text-xl"
      >
        Oops! Parece que você se perdeu. A página que você está procurando não
        existe.
      </motion.p>
    </motion.section>
  );
};
