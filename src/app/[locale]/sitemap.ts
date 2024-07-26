import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      priority: 1,
      lastModified: new Date(),
      changeFrequency: "monthly",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    {
      priority: 0.9,
      lastModified: new Date(),
      changeFrequency: "monthly",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
    },
    {
      priority: 0.8,
      lastModified: new Date(),
      changeFrequency: "monthly",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/resume`,
    },
    {
      priority: 0.7,
      lastModified: new Date(),
      changeFrequency: "monthly",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/work`,
    },
    {
      priority: 0.6,
      lastModified: new Date(),
      changeFrequency: "monthly",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
  ];
}
