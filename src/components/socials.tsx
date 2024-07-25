import Link from "next/link";

import { SiMedium } from "react-icons/si";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/davimateus1" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/davimateusg" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/davimateus1" },
  { icon: <SiMedium />, path: "https://medium.com/@davimateusg" },
];

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

export const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon, path }, index) => (
        <Link key={index} href={path} target="_blank" className={iconStyles}>
          {icon}
        </Link>
      ))}
    </div>
  );
};
