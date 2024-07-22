import { Metadata } from "next";
import { NotFoundSection } from "@/components/sections/not-found-section";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false },
};

const NotFound = () => {
  return <NotFoundSection />;
};

export default NotFound;
