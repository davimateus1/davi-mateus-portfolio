import { mediumApi } from "@/api";
import { MediumFeed } from "@/api/interfaces";

export const getArticles = async (): Promise<MediumFeed | null> => {
  const response = await mediumApi.get("/v1/api.json", {
    params: { rss_url: "https://medium.com/feed/@davimateusg" },
  });

  if (!response.data) return null;

  return response.data;
};
