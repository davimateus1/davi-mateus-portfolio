import { Metadata } from "next";
import ArticleSection from "@/components/sections/article-section";

export const metadata: Metadata = {
  title: "Artigo",
  robots: { index: false },
};

const Article = () => {
  return <ArticleSection />;
};

export default Article;
