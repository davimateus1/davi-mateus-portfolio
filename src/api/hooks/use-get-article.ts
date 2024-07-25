import { useQuery } from "@tanstack/react-query";
import { getArticle } from "@/api/requests/get-article";

interface UseGetArticleProps {
  articleId: string;
}

export const useGetArticle = ({ articleId }: UseGetArticleProps) => {
  return useQuery({
    queryKey: ["article", articleId],
    queryFn: () => getArticle(articleId),
  });
};
