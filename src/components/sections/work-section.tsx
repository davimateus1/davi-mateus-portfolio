"use client";
import "swiper/css";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperProps } from "swiper/types";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { WorkSliderButtons } from "@/components/work-slider-buttons";

const projects = [
  {
    index: 1,
    category: "Fullstack",
    title: "Financify",
    description:
      "Uma aplicação de finanças pessoais, onde o usuário pode cadastrar suas receitas e despesas, visualizar um gráfico de suas transações e importar um arquivo CSV com suas transações.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "React Hook Form",
      "Papaparse",
      "Recharts",
      "React Query",
      "Zustand",
      "Zod",
      "Hono.js",
      "Drizzle ORM",
      "Neon DB",
      "Clerk Auth",
    ],
    image: "/assets/works/financify.png",
    live: "https://financify-io.vercel.app/",
    github: "https://github.com/davimateus1/financify",
  },
  {
    index: 2,
    category: "Frontend",
    title: "Ibiaapis",
    description:
      "Uma landing page para uma associação de apicultores, com um SEO otimizado, responsivo, com animações e formulário de contato.",
    stack: [
      "Next.js 13",
      "TypeScript",
      "Chakra UI",
      "Framer Motion",
      "Swiper",
      "React Icons",
    ],
    image: "/assets/works/ibiaapis.png",
    live: "https://ibiaapis.vercel.app/",
    github: "",
  },
  {
    index: 3,
    category: "Frontend",
    title: "Fernanda Cicalese Nutri",
    description:
      "Um site + bio para uma nutricionista, com um SEO otimizado e responsivo, com animações avançadas e design minimalista.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "React Countup",
      "Lucide Icons",
      "React Awesome Reveal",
    ],
    image: "/assets/works/nutri.png",
    live: "https://fernandacicalesenutri.vercel.app/",
    github: "",
  },
  {
    index: 4,
    category: "Mobile Fullstack",
    title: "Kindheart",
    description:
      "Aplicativo para conectar voluntários a idosos, de forma segura e confiável. Onde os voluntários podem se cadastrar, visualizar os idosos próximos e se candidatar para ajudá-los. Esse projeto foi utilizado como TCC para a graduação de Ciência da Computação e obteve nota 9.2.",
    stack: [
      "React Native",
      "TypeScript",
      "Expo",
      "Native Base",
      "Image Picker",
      "React Navigation",
      "React Hook Form",
      "React Query",
      "Axios",
      "Zod",
      "Zustand",
      "Socket.io",
      "Node.js",
      "Fastify",
      "Prisma ORM",
      "PostgreSQL",
      "Twilio SMS",
      "Cloudinary",
      "Digital Ocean",
      "JSON Web Token",
      "Bcrypt",
    ],
    image: "/assets/works/kindheart.png",
    live: "",
    github: "https://github.com/davimateus1/kindheart-app",
  },
  {
    index: 5,
    category: "Fullstack",
    title: "Amazon Clone 2.0",
    description:
      "Clone da Amazon com funcionalidades de carrinho, autenticação, pagamento e visualização de pedidos. Com SEO otimizado, responsivo e design minimalista. Esse projeto foi feito com o intuito de aprender mais sobre o Next JS e suas funcionalidades.",
    stack: [
      "Next.js 12",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firebase Admin",
      "Axios",
      "Cloud Firestore",
      "Next Auth",
      "Stripe",
      "Facebook Login",
      "Google Login",
      "Moment.js",
      "Webhook",
      "Micro",
      "React Responsive Carousel",
    ],
    image: "/assets/works/amazon.png",
    live: "https://amazon-2-0-davimateusg.vercel.app/",
    github: "https://github.com/davimateus1/amazon-2.0",
  },
  {
    index: 6,
    category: "Frontend",
    title: "Serra do Sol",
    description:
      "Landing page empresarial para uma empresa de energia solar. Com SEO otimizado, responsivo e visualização de projetos e PDFs.",
    stack: [
      "React",
      "TypeScript",
      "Chakra UI",
      "React Icons",
      "React PDF",
      "PDF.js",
      "Framer Motion",
    ],
    image: "/assets/works/serrasol.png",
    live: "https://serradosol.vercel.app/",
    github: "",
  },
  {
    index: 7,
    category: "Frontend",
    title: "JSON Tree Viewer",
    description:
      "Uma aplicação para visualizar e JSONs de forma interativa. Com suporte a dark mode e manipulação de grandes arquivos JSON.",
    stack: ["Shadcn UI", "Next.js 14", "TypeScript", "Tailwind CSS"],
    image: "/assets/works/jsontree.png",
    live: "https://json-tree-challenge.vercel.app/",
    github: "https://github.com/davimateus1/json-tree-challenge",
  },
  {
    index: 8,
    category: "Frontend",
    title: "Banda João Gomes",
    description:
      "Projeto de um site para uma banda de forró. Com SEO otimizado e responsivo. Feito no curso Web Frontend - Estação Hack promoido pelo Facebook.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/assets/works/jg.png",
    live: "https://site-banda-jg.vercel.app/",
    github: "https://github.com/davimateus1/SiteBandaJG",
  },
  {
    index: 9,
    category: "Frontend",
    title: "Portfolio 1.0",
    description:
      "Meu primeiro portfolio, para evoluir minhas habilidades de frontend. Com SEO otimizado, responsivo e design minimalista.",
    stack: [
      "React",
      "JavaScript",
      "CSS",
      "React Icons",
      "React Router",
      "React Reveal",
      "React Typing",
      "React Tilt",
      "FormSubmit",
      "Axios",
      "GitHub API",
    ],
    image: "/assets/works/portfolio.png",
    live: "",
    github: "https://github.com/davimateus1/DM_Portfolio",
  },
];

export const WorkSection = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperProps) => {
    const { activeIndex } = swiper;
    setProject(projects[activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="flex items-center gap-[15px]">
                <h3 className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {String(project.index).padStart(2, "0")}
                </h3>
                <div className="w-[6px] h-[6px] bg-accent rounded-full" />
                <h3 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {project.title}
                </h3>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="grid grid-cols-2 lg:grid-cols-3 gap-[10px]">
                {project.stack
                  .sort((a, b) => a.length - b.length)
                  .map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item}
                    </li>
                  ))}
              </ul>
              <div className="border border-white/20" />
              <div className="flex items-center gap-4 pb-8">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>Deploy</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>Repositório</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map(({ index, image }) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                    <div className="relative w-full h-full">
                      <Image
                        fill
                        src={image}
                        objectFit="cover"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500 rounded-none"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
