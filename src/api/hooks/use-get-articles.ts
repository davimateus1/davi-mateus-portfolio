import { useQuery } from "@tanstack/react-query";
import { getArticles } from "@/api/requests/get-articles";

export const useGetArticles = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });
};
