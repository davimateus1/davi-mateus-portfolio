"use client";

import * as cheerio from "cheerio";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { Socials } from "@/components/socials";
import { Button } from "@/components/ui/button";
import { FaReadme, FaSpinner } from "react-icons/fa";

import { readingTime } from "@/utils/reading-time";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useGetArticle } from "@/api/hooks/use-get-article";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ArticleSection = () => {
  const articleId = usePathname().split("/").pop() ?? "";
  const { data, isLoading, error } = useGetArticle({ articleId });

  const $ = cheerio.load(data?.description ?? "");
  const descriptionHtml = $.html();

  const formattedDate = new Date(data?.pubDate ?? "").toLocaleDateString(
    "pt-BR",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center py-12 xl:py-8"
    >
      {isLoading && (
        <div className="flex justify-center">
          <FaSpinner className="animate-spin text-5xl text-accent" />
        </div>
      )}

      {error && (
        <p className="w-full text-center  text-red-500 xl:text-xl">
          Ocorreu um erro ao carregar o artigo, tente novamente mais tarde :(
        </p>
      )}

      {!data && (
        <p className="w-full text-center text-white/80 xl:text-xl px-4 xl:px-0">
          Este artigo não existe ou foi removido :(
        </p>
      )}

      {data && (
        <>
          <div className="container mx-auto gap-[30px]">
            <div className="flex items-center gap-x-2 mb-4 justify-center">
              <FaReadme className="text-2xl text-accent" />
              <p className="text-white/60 text-center xl:text-start text-md">
                {readingTime(data?.description)} min
              </p>
            </div>
            <h1 className="text-4xl mb-6 w-full text-center text-accent">
              {data?.title}
            </h1>
            <div
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              className="flex flex-col p-4 text-start items-article"
            />
            <div className="flex items-center justify-between flex-col xl:flex-row gap-y-8 xl:gap-0">
              <div className="flex gap-x-4 items-center">
                <Avatar className="w-16 h-16 xl:w-14 xl:h-14">
                  <AvatarImage src={data?.authorImage} />
                  <AvatarFallback className="bg-accent text-primary">
                    {data?.author[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center">
                  <h2 className="text-white/80 text-md">
                    Escrito por {data?.author}
                  </h2>
                  <p className="text-white/60 text-sm">{formattedDate}</p>
                </div>
              </div>
              <div className="flex flex-wrap group gap-[15px] justify-center xl:justify-start">
                {data?.categories.map((category) => (
                  <span
                    key={category}
                    className="text-primary/80 bg-accent text-xs p-2 font-bold rounded-full capitalize hover:bg-primary hover:text-accent transition-all duration-500"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full h-0.5 bg-accent my-4" />
            <Socials
              containerStyles="flex gap-6 justify-center"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />
          </div>
          <Button
            onClick={handleScrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 p-0 hover:bg-primary hover:text-accent"
          >
            <MdKeyboardDoubleArrowUp className="text-2xl" />
          </Button>
        </>
      )}
    </motion.div>
  );
};

export default ArticleSection;
