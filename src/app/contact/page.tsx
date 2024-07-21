"use client";
import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";

import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const infos = [
  {
    icon: <FaEnvelope />,
    title: "Telefone",
    description: "+55 (87) 98847-6864",
  },
  {
    icon: <FaPhoneAlt />,
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
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">
                Vamos criar algo incrível juntos?
              </h3>
              <p className="text-white/60">
                Estou sempre aberto a novos projetos e oportunidades. Se você
                tem uma ideia ou projeto em mente, entre em contato comigo.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Primeiro nome" />
                <Input type="text" placeholder="Último nome" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Telefone" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Desenvolvimento</SelectLabel>
                    <SelectItem value="Sistema">Sistema</SelectItem>
                    <SelectItem value="Website">Website</SelectItem>
                    <SelectItem value="Aplicativo">Aplicativo</SelectItem>
                    <SelectItem value="Landing Page">Landing Page</SelectItem>
                    <SelectItem value="Outros">Outros</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea placeholder="Informe sua mensagem aqui" />
              <Button size="md" type="submit">
                Enviar mensagem
              </Button>
            </form>
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
