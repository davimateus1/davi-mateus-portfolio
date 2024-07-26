import { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contato",
  robots: { index: true },
};

const Contact = () => {
  return <ContactSection />;
};

export default Contact;
