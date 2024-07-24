import { Metadata } from "next";
import { BlogSection } from "@/components/sections/blog-section";

export const metadata: Metadata = {
  title: "Blog",
  robots: { index: true },
};

const Blog = () => {
  return <BlogSection />;
};

export default Blog;
