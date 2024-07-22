import { Metadata } from "next";
import { HomeSection } from "@/components/sections/home-section";

export const metadata: Metadata = {
  robots: { index: true },
};

const Home = () => {
  return <HomeSection />;
};

export default Home;
