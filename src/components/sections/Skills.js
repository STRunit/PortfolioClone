import { Tag } from "../Tag";
import { Tools } from "../../constants";

export const SkillsSection = () => {
  return (
    <div
      className="flex flex-col gap-6 px-4 py-16 min-h-fit dark:bg-gray-950"
      id="Skills"
    >
      <div className="flex flex-col items-center gap-4">
        <Tag label="Skills" />
        <p className="text-lg text-center text-gray-600 dark:text-gray-200">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-y-4 min-h-fit min-w-fit">
        {Tools.map((Tool, index) => {
          return (
            <div className="flex flex-col items-center gap-2" key={index}>
              <a
                target="blank"
                href={Tool.url}
                className="duration-500 hover:scale-110"
              >
                <img src={Tool.logo} alt="Tool icon" />
              </a>
              <p className="text-lg text-gray-600 dark:text-gray-200">
                {Tool.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
