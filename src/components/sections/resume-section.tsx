"use client";

import { motion } from "framer-motion";

import {
  SiCsharp,
  SiOracle,
  SiPrisma,
  SiShadcnui,
  SiChakraui,
  SiFirebase,
  SiVuedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiSocketdotio,
  SiStyledcomponents,
  SiDocker,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const about = {
  title: "Sobre mim",
  description:
    "Desenvolvedor com experiência em desenvolvimento de sites, sistemas web e aplicativos. Trabalho com tecnologias como React, React Native, Next.js, Node.js, TypeScript, entre outras. Sou especialista em desenvolvimento web front-end e back-end. Atualmente, estou focado em desenvolver aplicações web e mobile com as melhores práticas de programação.",
  infos: [
    {
      fieldName: "Nome",
      fieldValue: "Davi Mateus",
    },
    {
      fieldName: "Telefone",
      fieldValue: "+55 (87) 98847-6864",
    },
    {
      fieldName: "Experiência",
      fieldValue: "4 anos",
    },
    {
      fieldName: "E-mail",
      fieldValue: "davimateusga@gmail.com",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
    },
    {
      fieldName: "Freelancer",
      fieldValue: "Disponível",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Português, Inglês (intermediário)",
    },
  ],
};

const experience = {
  icon: "",
  title: "Experiência",
  description:
    "Um resumo sobre a minha trajetória profissional, e as empresas que tive a oportunidade de deixar a minha marca.",
  items: [
    {
      company: "Elev* Health Technology",
      position: "Web Developer",
      duration: "Set 2021 - Nov 2021",
    },
    {
      company: "BZU Tech",
      position: "Front-end Engineer",
      duration: "Dez 2021 - Mar 2022",
    },
    {
      company: "Loomi",
      position: "Front-end Engineer",
      duration: "Mar 2022 - Set 2023",
    },
    {
      company: "FCx Labs",
      position: "Software Engineer",
      duration: "Set 2023 - Atual",
    },
  ],
};

const education = {
  icon: "",
  title: "Formação",
  description:
    "Um resumo sobre a minha trajetória acadêmica, e as instituições que tive a oportunidade de estudar.",
  items: [
    {
      institution: "Universidade Católica de Pernambuco",
      course: "BSc. Ciência da Computação",
      duration: "2020.1 - 2023.2",
    },
    {
      institution: "Universidade de São Paulo",
      course: "MSc. Engenharia de Software",
      duration: "2024.2 - 2026.1",
    },
    {
      institution: "Semana da Computação (UNICAP)",
      course: "Ministrante do curso inicial de ReactJS",
      duration: "Mai 2022",
    },
    {
      institution: "Semana da Computação (UNICAP)",
      course: "Ministrante do curso React + TypeScript intermédiario/avançado",
      duration: "Mar 2023",
    },
  ],
};

const skills = {
  title: "Habilidades",
  description:
    "Minhas habilidades técnicas, tecnologias e ferramentas que utilizo no meu dia a dia.",
  skillList: [
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      percentage: 95,
    },
    {
      icon: <FaCss3 />,
      title: "CSS3",
      percentage: 95,
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
      percentage: 90,
    },
    {
      icon: <FaReact />,
      title: "React.js",
      percentage: 90,
    },
    {
      icon: <FaReact />,
      title: "React Native",
      percentage: 75,
    },
    {
      icon: <SiNextdotjs />,
      title: "Next.js",
      percentage: 75,
    },
    {
      icon: <SiVuedotjs />,
      title: "Vue.js",
      percentage: 50,
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
      percentage: 70,
    },
    {
      icon: <SiChakraui />,
      title: "Chakra UI",
      percentage: 95,
    },
    {
      icon: <SiShadcnui />,
      title: "Shadcn UI",
      percentage: 80,
    },
    {
      icon: <SiStyledcomponents />,
      title: "Styled Components",
      percentage: 95,
    },
    {
      icon: <SiSocketdotio />,
      title: "Socket.io",
      percentage: 70,
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
      percentage: 80,
    },
    {
      icon: <SiCsharp />,
      title: "C#",
      percentage: 30,
    },
    {
      icon: <SiPrisma />,
      title: "Prisma ORM",
      percentage: 65,
    },
    {
      icon: <SiFirebase />,
      title: "Firebase",
      percentage: 50,
    },
    {
      icon: <SiOracle />,
      title: "OracleDB",
      percentage: 50,
    },
    {
      icon: <SiPostgresql />,
      title: "PostgreSQL",
      percentage: 60,
    },
    {
      icon: <SiDocker />,
      title: "Docker",
      percentage: 40,
    },
  ],
};

export const ResumeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Formação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map(({ company, duration, position }) => (
                      <li
                        key={company}
                        className="bg-[#232329] minh-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map(
                      ({ course, duration, institution }) => (
                        <li
                          key={course}
                          className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {course}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                            <p className="text-white/60 text-sm">
                              {institution}
                            </p>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.skillList.map(({ icon, title, percentage }) => (
                      <li key={title} className="flex items-center gap-3">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center hover:text-accent">
                              <div className="text-6xl transition-all duration-300">
                                {icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="capitalize flex justify-center items-center gap-2">
                              <h3 className="text-lg font-bold">{title}</h3>
                              <span className="text-md bg-accent px-2 py-1 rounded-full">
                                {percentage}%
                              </span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.infos.map(({ fieldName, fieldValue }) => (
                    <li
                      key={fieldName}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-accent">{fieldName}:</span>
                      <span className="text-white/60">{fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
