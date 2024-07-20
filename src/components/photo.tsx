"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            priority
            fill
            quality={100}
            alt="Davi Mateus"
            src="/assets/davi.png"
            className="object-contain opacity-80 rounded-full"
          />
        </motion.div>
        <motion.svg
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            strokeWidth="4"
            stroke="#00FF99"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};
