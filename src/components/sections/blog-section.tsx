"use client";

import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
import { ArticleCard } from "@/components/article-card";
import { useGetArticles } from "@/api/hooks/use-get-articles";

export const BlogSection = () => {
  const { data, isLoading, error } = useGetArticles();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <div className="text-center xl:text-left">
          <h1 className="text-5xl mb-6 max-w-xl text-accent">Blog</h1>
          <p className="max-w-[800px] mb-9 text-white/60">
            Alguns dos meus pensamentos e aprendizados sobre tecnologia, novas
            ferramentas e metodologias de trabalho. Acompanhe o blog para ficar
            por dentro das novidades.
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center">
            <FaSpinner className="animate-spin text-4xl" />
          </div>
        )}

        {error && (
          <p className="w-full text-center xl:text-left text-red-500 xl:text-xl">
            Erro ao carregar os artigos, tente novamente.
          </p>
        )}

        {!data && !isLoading && !error && (
          <p className="w-full text-center xl:text-left text-white/80 xl:text-xl">
            Nenhum artigo encontrado.
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {data?.items.map((article) => (
            <ArticleCard
              {...article}
              key={article.guid}
              authorImage={data.feed.image}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
