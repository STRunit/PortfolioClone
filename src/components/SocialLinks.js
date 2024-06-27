import Github from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";
import Figma from "../assets/figma.svg";

const SocialIcons = [
  {
    logo: Github,
    link: "https://github.com/STRunit",
  },

  {
    logo: Twitter,
    link: "https://x.com/STRunit",
  },
  {
    logo: Figma,
    link: "https://www.figma.com/@shijre",
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      {SocialIcons.map((social, index) => {
        return (
          <a
            key={index}
            href={social.link}
            className="p-1 duration-500 rounded-md hover:scale-105 hover:bg-gray-200"
            target="blank"
          >
            <img src={social.logo} alt="" />
          </a>
        );
      })}
    </div>
  );
};
