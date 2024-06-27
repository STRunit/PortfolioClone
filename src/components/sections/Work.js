import Link from "../../assets/link.svg";
import { Tag } from "../Tag";
import { Projects } from "../../constants";

const ProjectPanel = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1260px] flex-col gap-6 px-4 md:gap-12 md:px-8">
      {Projects.map((project, index) => {
        return (
          <div
            className="flex flex-col w-full max-w-6xl mx-auto shadow-md bg-gray md:flex-row md:even:flex-row-reverse rounded-xl"
            key={index}
          >
            <div className="flex items-center justify-center p-8 bg-gray-100 border-gray-100 max-md:rounded-t-xl md:w-1/2 lg:p-12 dark:bg-gray-70 md:rounded-l-xl">
              <a target="blank" href={project.url}>
                <img
                  src={project.image}
                  alt="Project logo"
                  className="duration-300 rounded-xl hover:scale-105"
                />
              </a>
            </div>

            <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12 dark:bg-gray-800 max-md:rounded-b-xl md:rounded-r-xl">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                {project.name}
              </p>
              <p className="text-gray-600 dark:text-gray-200">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.programs.map((element, index) => {
                  return <Tag key={index} label={element} />;
                })}
              </div>
              <a target="blank" href={project.url}>
                <img
                  src={Link}
                  alt="Link icon"
                  className="p-1 duration-500 rounded-md hover:scale-110 hover:bg-gray-200"
                />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const WorkSection = () => {
  return (
    <div
      className="flex flex-col items-center gap-6 px-4 py-16 dark:bg-gray-950"
      id="Work"
    >
      <Tag label="Work" />
      <p className="text-lg text-center text-gray-600 dark:text-gray-50">
        Some of the noteworthy projects I have built:
      </p>
      <ProjectPanel />
    </div>
  );
};
