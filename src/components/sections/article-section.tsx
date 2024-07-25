"use client";

import * as cheerio from "cheerio";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import { useGetArticle } from "@/api/hooks/use-get-article";

import { Socials } from "@/components/socials";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

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
      <div className="container mx-auto gap-[30px]">
        <h1 className="text-4xl mb-6 w-full text-center text-accent">
          {data?.title}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          className="flex flex-col p-4 text-start text-white/80 items-article"
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
    </motion.div>
  );
};

export default ArticleSection;
