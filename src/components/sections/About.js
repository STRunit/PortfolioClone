import AboutProfile from "../../assets/cover.png";
import { Tag } from "../Tag";
import { ParagraphData } from "../../constants";

export const AboutSection = () => {
  return (
    <div
      className="flex flex-col gap-6 px-4 py-16 min-h-fit bg-gray-50 dark:bg-gray-900"
      id="About"
    >
      <div className="max-w-[1260px] flex-col mx-auto gap-6 justify-center items-center md:gap-12 md:flex-row md:justify-between">
        <div className="flex justify-center py-4">
          <Tag label="About" />
        </div>

        <div className="flex flex-col items-center gap-12 px-6 md:flex-row md:items-start md:justify-between">
          <div className="flex justify-center relative w-[280px] h-[360px] mx-auto mb-12">
            <img
              src={AboutProfile}
              alt="Profile"
              className="z-10 w-full h-full"
            />
            <div className="absolute w-[320px] h-[360px] bg-gray-200 top-6 md:right-5 md:w-[300px] md:h-[380px] dark:bg-gray-600 dark:border-transparent"></div>
          </div>
          <div className="flex flex-col gap-6 text-gray-600 md:w-7/12 dark:text-gray-50">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
              Curious about me? Here you have it:
            </h3>
            <ParagraphData />
          </div>
        </div>
      </div>
    </div>
  );
};
