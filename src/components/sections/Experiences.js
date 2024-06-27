import { Tag } from "../Tag";
import { Experiences } from "../../constants";

export const ExperiencesSection = () => {
  return (
    <div
      className="flex flex-col items-center gap-6 px-4 py-16 min-h-fit bg-gray-50 dark:bg-gray-900"
      id="Experience"
    >
      <Tag label="Experience" />
      <p className="text-lg text-center text-gray-600 dark:text-gray-50">
        Here is a quick summary of my most recent experiences:
      </p>

      <div className="flex flex-col items-center gap-4">
        {Experiences.map((experience, index) => {
          return (
            <div
              key={index}
              className="rounded-xl bg-gray shadow-md mx-auto flex w-full max-w-[896px] flex-col justify-between gap-4 p-8 md:flex-row md:gap-8 dark:bg-gray-800"
            >
              <div className="order-1 md:w-1/4">
                <img
                  className="w-[102px] h-[28px]"
                  src={experience.logo}
                  alt="Company logo"
                />
              </div>
              <div className="order-3 md:order-2 md:w-2/4">
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-50 md:order-1">
                  {experience.position}
                </p>
                <ul className="gap-4 list-disc">
                  {experience.comment.map((element, index) => (
                    <li
                      className="text-gray-600 dark:text-gray-200"
                      key={index}
                    >
                      {element}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-2 md:order-3 md:w-1/4">
                <p className="text-gray-600 dark:text-gray-200">
                  {experience.workedThrough}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
