import { Metadata } from "next";
import { WorkSection } from "@/components/sections/work-section"

export const metadata: Metadata = {
  title: "Projetos",
  robots: { index: true },
};

const Work =() => {
  return <WorkSection />
}

export default Work