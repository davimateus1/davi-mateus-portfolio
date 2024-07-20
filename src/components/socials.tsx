import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaInstagram />, path: "" },
];

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

export const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon, path }, index) => (
        <Link key={index} href={path} className={iconStyles}>
          {icon}
        </Link>
      ))}
    </div>
  );
};
