import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

import { socialLinks } from "../../data/portfolio";

const ICON_MAP = {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
};

export default function SocialLinks({
  direction = "row",
  iconSize = 20,
  className = "",
}) {
  return (
    <ul
      className={`flex ${
        direction === "col" ? "flex-col" : "flex-row"
      } items-center gap-5 ${className}`}
    >
      {socialLinks.map((link) => {
        const Icon = ICON_MAP[link.icon];

        return (
          <li key={link.name}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              className="text-ink hover:text-accent transition-colors"
            >
              {Icon && <Icon size={iconSize} />}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
