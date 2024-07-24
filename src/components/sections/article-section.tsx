"use client";

import * as cheerio from "cheerio";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";
import { useGetArticle } from "@/api/hooks/use-get-article";

const ArticleSection = () => {
  const articleId = usePathname().split("/").pop() ?? "";
  const { data, isLoading, error } = useGetArticle({ articleId });

  const $ = cheerio.load(data?.description ?? "");
  const descriptionHtml = $.html();

  console.log(descriptionHtml);

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
      </div>
    </motion.div>
  );
};

export default ArticleSection;
