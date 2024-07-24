import { mediumApi } from "@/api";
import { MediumFeed } from "@/api/interfaces";

export const getArticles = async (): Promise<MediumFeed> => {
  const response = await mediumApi.get("/v1/api.json", {
    params: { rss_url: "https://medium.com/feed/@davimateusg" },
  });

  return response.data;
};
