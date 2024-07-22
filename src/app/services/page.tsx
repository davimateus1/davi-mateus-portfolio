import { ServicesSection } from "@/components/sections/services-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  robots: { index: true },
};

const Services = () => {
  return <ServicesSection />;
};

export default Services;
