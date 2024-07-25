import { mediumApi } from "..";
import { FeedItem } from "../interfaces";

export const getArticle = async (articleId: string): Promise<FeedItem> => {
  const response = await mediumApi.get("/v1/api.json", {
    params: { rss_url: "https://medium.com/feed/@davimateusg" },
  });

  const data = response.data.items.find(
    (article: FeedItem) => article.guid.split("/").pop() === articleId
  );

  return { ...data, authorImage: response.data.feed.image };
};
