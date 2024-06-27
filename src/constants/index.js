// Icons and Logos

import LogoJavascript from "../assets/logos/icon-javascript.svg";
import LogoTypescript from "../assets/logos/icon-typescript.svg";
import LogoReact from "../assets/logos/icon-react.svg";
import LogoNextJs from "../assets/logos/icon-nextjs.svg";
import LogoNodeJs from "../assets/logos/icon-nodejs.svg";
import LogoExpressJs from "../assets/logos/icon-express.svg";
import LogoNestJs from "../assets/logos/icon-nest.svg";
import LogoSocketIo from "../assets/logos/icon-socket.svg";
import LogoPostgreSQL from "../assets/logos/icon-postgresql.svg";
import LogoMongoDB from "../assets/logos/icon-mongodb.svg";
import LogoSass from "../assets/logos/icon-sass.svg";
import LogoTailwindCss from "../assets/logos/icon-tailwindcss.svg";
import LogoFigma from "../assets/logos/icon-figma.svg";
import LogoCypress from "../assets/logos/icon-cypress.svg";
import LogoStorybook from "../assets/logos/icon-storybook.svg";
import LogoGit from "../assets/logos/icon-git.svg";

import LogoUpwork from "../assets/logos/logo-upwork.svg";

import ProjectPinecone from "../assets/project-pinecone.webp";

// NavbarSection

export const NavMenu = ["About", "Skills", "Experience", "Work", "Contact"];

export const mainStyle = {
  image: "w-60 h-[280px] md:w-[280px] md:w-[320px] block",
  background:
    "w-[280px] h-[280px] md:w-[240px] md:h-[280px] bg-gray-200 -z-10 absolute top-[20px] left-[-20px] md:top-[40px] md:left-[40px] dark:bg-gray-600",
  container: "relative w-60 h-[300px] md:w-[320px]",
};

//AboutSection

export const ParagraphData = () => {
  return (
    <div>
      I'm a passionate,{" "}
      <a
        target="blank"
        href="https://www.figma.com/@shijre"
        className="underline underline-offset-4"
      >
        self-proclaimed designer
      </a>{" "}
      who specializes in full stack development (React.js & Node.js). I am very
      enthusiastic about bringing the technical and visual aspects of digital
      products to life. User experience, pixel perfect design, and writing
      clear, readable, highly performant code matters to me. <br></br>
      <br></br> I began my journey as a web developer in 2015, and since then,
      I've continued to grow and evolve as a developer, taking on new challenges
      and learning the latest technologies along the way. Now, in my early
      thirties, 7 years after starting my web development journey, I'm building
      cutting-edge web applications using modern technologies such as Next.js,
      TypeScript, Nestjs, Tailwindcss, Supabase and much more. <br></br>
      <br></br> I am very much a progressive thinker and enjoy working on
      products end to end, from ideation all the way to development. When I'm
      not in full-on developer mode, you can find me hovering around on twitter
      or on indie hacker, witnessing the journey of early startups or enjoying
      some free time. You can follow me on{" "}
      <a
        target="blank"
        href="https://x.com/STRunit"
        className="underline underline-offset-4"
      >
        Twitter
      </a>{" "}
      where I share tech-related bites and build in public, or you can follow me
      on{" "}
      <a
        target="blank"
        href="https://github.com/STRunit"
        className="underline underline-offset-4"
      >
        Github.
      </a>{" "}
      <br></br>
      <br></br> Finally, some quick bits about me. <br></br>
      <br></br>
      <div className="flex justify-between w-9/12 max-sm:flex-col">
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li>B.E. in Computer Engineering</li>
          <li>Full time freelancer</li>
        </ul>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li>Avid learner</li>
          <li>Aspiring indie hacker</li>
        </ul>
      </div>{" "}
      <br></br>
      One last thing, I'm available for freelance work, so feel free to reach
      out and say hello! I promise I don't bite 😉
    </div>
  );
};

// SkillsSection

export const Tools = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://www.google.com",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.google.com",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://www.google.com",
  },
  {
    label: "Next.js",
    logo: LogoNextJs,
    url: "https://www.google.com",
  },
  {
    label: "Node.js",
    logo: LogoNodeJs,
    url: "https://www.google.com",
  },
  {
    label: "Express.js",
    logo: LogoExpressJs,
    url: "https://www.google.com",
  },
  {
    label: "Nest.js",
    logo: LogoNestJs,
    url: "https://www.google.com",
  },
  {
    label: "Socket.io",
    logo: LogoSocketIo,
    url: "https://www.google.com",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.google.com",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.google.com",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://www.google.com",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindCss,
    url: "https://www.google.com",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.google.com",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    url: "https://www.google.com",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://www.google.com",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://www.google.com",
  },
];

// ExperiencesSection

export const Experiences = [
  {
    logo: LogoUpwork,
    position: "Independent Freelancer",
    workedThrough: "Nov 2021 - Present",
    comment: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    logo: LogoUpwork,
    position: "Team Lead",
    workedThrough: "Jun 2017 - Sep 2021",
    comment: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Designed architecture of different projects (frontend + backend).",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    logo: LogoUpwork,
    position: "Full Stack Developer",
    workedThrough: "Nov 2015 - Apr 2017",
    comment: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

// WorkSection

export const Projects = [
  {
    name: "Pinecone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    url: "https://www.google.com/",
    image: ProjectPinecone,
    programs: [
      "React",
      "Typescript",
      "React Bootstrap",
      "Firebase",
      "Express.js",
      "PostgreSQL",
      "Styled Components",
      "Redux",
    ],
  },
  {
    name: "Pinecone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    url: "https://www.google.com/",
    image: ProjectPinecone,
    programs: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "AWS Amplify",
      "Cypress",
      "Storybook",
    ],
  },
  {
    name: "Pinecone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    url: "https://www.google.com/",
    image: ProjectPinecone,
    programs: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Storybook",
    ],
  },
];

//Component Sections JS

export * from "../components/sections/Navbar";
export * from "../components/sections/main";
export * from "../components/sections/About";
export * from "../components/sections/Skills";
export * from "../components/sections/Experiences";
export * from "../components/sections/Work";
export * from "../components/sections/Contact";

//Components JS

export * from "../components/MenuDrawer";
export * from "../components/Profile";
export * from "../components/SocialLinks";
export * from "../components/Tag";
