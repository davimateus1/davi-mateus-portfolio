"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    index: 1,
    title: "Desenvolvimento Web",
    description:
      "Desenvolvimento de sites, sistemas e aplicações web. Utilizando as melhores tecnologias do mercado, entregando soluções modernas e eficientes.",
  },
  {
    index: 2,
    title: "Desenvolvimento Mobile",
    description:
      "Desenvolvimento de aplicativos móveis para Android e iOS. Tenha um aplicativo exclusivo para a sua empresa ou negócio.",
  },
  {
    index: 3,
    title: "SEO",
    description:
      "Otimização de sites para mecanismos de busca. Aumente a visibilidade do seu site e alcance mais clientes.",
  },
  {
    index: 4,
    title: "Hospedagem",
    description:
      "Hospedagem de sites e sistemas web. Tenha um serviço de hospedagem seguro e confiável.",
  },
];

export const ServicesSection = () => {
  const whatsappLink =
    "https://api.whatsapp.com/send?l=pt-BR&phone=5587988476864&text=";

  const handleWhatsApp = (service: string) => {
    switch (service) {
      case "Desenvolvimento Web":
        return `${whatsappLink}Olá, gostaria de saber mais sobre o serviço de Desenvolvimento Web.`;
      case "Desenvolvimento Mobile":
        return `${whatsappLink}Olá, gostaria de saber mais sobre o serviço de Desenvolvimento Mobile.`;
      case "SEO":
        return `${whatsappLink}Olá, gostaria de saber mais sobre o serviço de SEO.`;
      case "Hospedagem":
        return `${whatsappLink}Olá, gostaria de saber mais sobre o serviço de Hospedagem.`;
      default:
        return `${whatsappLink}Olá, gostaria de saber mais sobre os serviços.`;
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map(({ description, index, title }) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <h1 className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {String(index).padStart(2, "0")}
                </h1>
                <Button
                  onClick={() => window.open(handleWhatsApp(title), "_blank")}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Button>
              </div>
              <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {title}
              </h2>
              <p className="text-white/60">{description}</p>
              <div className="border-b border-white/20 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
