import { Metadata } from "next";
import { ResumeSection } from "@/components/sections/resume-section";

export const metadata: Metadata = {
  title: "Sobre",
  robots: { index: false },
};

const Resume = () => {
  return <ResumeSection />;
};

export default Resume;
