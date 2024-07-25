export interface Feed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

export interface FeedItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: Record<string, unknown>;
  categories: string[];
  authorImage?: string;
}

export interface MediumFeed {
  feed: Feed;
  items: Array<FeedItem>;
}
