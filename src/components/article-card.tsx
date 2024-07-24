import * as cheerio from "cheerio";
import { FeedItem } from "@/api/interfaces";

import { SiMedium } from "react-icons/si";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface ArticleCardProps extends FeedItem {
  authorImage: string;
}

export const ArticleCard = ({
  link,
  guid,
  title,
  author,
  pubDate,
  categories,
  description,
  authorImage,
}: ArticleCardProps) => {
  const $ = cheerio.load(description);
  const id = guid.split("/").pop();

  const descriptionText = $.text()
    .replace(/\s{2,}/g, " ")
    .replace(/([a-zA-Z0-9,.!?])([A-Z])/g, "$1 $2");

  const formattedDate = new Date(pubDate).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleGoToMedium = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-full max-w-[600px] bg-[#232329] rounded-xl flex flex-col p-6 gap-[10px] group cursor-default">
      <div className="flex items-center flex-col xl:flex-row gap-5 xl:gap-x-2">
        <Avatar className="w-16 h-16 xl:w-12 xl:h-12">
          <AvatarImage src={authorImage} />
          <AvatarFallback className="bg-accent text-primary">
            {author[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-x-2">
          <p className="text-white/80 text-bold text-sm">{author}</p>
          <div className="w-1 h-1 bg-white/80 rounded-full" />
          <p className="text-white/80 text-sm">{formattedDate}</p>
        </div>
      </div>
      <h1 className="text-accent font-bold group-hover:text-white transition-all duration-500 text-center xl:text-start">
        {title}
      </h1>
      <p className="text-white/60 line-clamp-3 text-center xl:text-start">
        {descriptionText}
      </p>
      <div className="flex flex-wrap group gap-[15px] justify-center xl:justify-start">
        {categories.map((category) => (
          <span
            key={category}
            className="text-primary/80 bg-accent text-xs p-2 font-bold rounded-full capitalize hover:bg-primary hover:text-accent transition-all duration-500"
          >
            {category}
          </span>
        ))}
      </div>
      <div className="flex justify-end p-2 gap-x-4">
        <Button
          className="w-12 h-12 p-0 hover:bg-primary hover:text-accent"
          onClick={handleGoToMedium}
        >
          <SiMedium className="text-3xl" />
        </Button>
        <Link href={`/blog/${id}`}>
          <Button className="w-12 h-12 p-0 hover:bg-primary hover:text-accent">
            <MdKeyboardDoubleArrowRight className="text-3xl" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
