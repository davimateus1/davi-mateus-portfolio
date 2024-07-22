"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const infos = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "+55 (87) 98847-6864",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "davimateusga@gmail.com",
  },
];

const Contact = () => {
  return (
    <motion.section
      className="py-6"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <ContactForm />
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {infos.map(({ description, icon, title }) => (
                <li key={description} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272C] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{title}</p>
                    <h3 className="text-xl">{description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
