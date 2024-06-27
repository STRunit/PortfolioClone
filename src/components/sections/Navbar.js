import Icon from "../../assets/icon.svg";
import Lightmode from "../../assets/lightmode.svg";
import Darkmode from "../../assets/darkmode.svg";
import { NavMenu } from "../../constants";

export const themeChanger = () => {
  document.documentElement.classList.toggle("dark");
};

export const NavbarSection = ({ handlerClick }) => {
  return (
    <div className="fixed top-0 z-20 flex justify-center w-full dark:bg-gray-950 dark:text-gray-50 backdrop-blur-md dark:bg-opacity-50">
      <div className="max-w-[1260px] w-screen flex justify-between p-4 gap-4">
        <a className="text-3xl font-semibold" href="#Main">
          {"<SS />"}
        </a>

        <div className="flex items-center gap-2 text-gray-600 max-md:hidden dark:text-gray-50">
          {NavMenu.map((menu, index) => {
            return (
              <a
                key={index}
                href={`#${menu}`}
                className="p-1 px-2 duration-500 rounded-lg hover:bg-gray-400"
              >
                {menu}
              </a>
            );
          })}
          <span className="h-6 border-r border-gray-200"></span>
          <div className="flex gap-2">
            <button
              onClick={themeChanger}
              className="block p-1 px-2 duration-500 ease-in-out rounded-lg hover:bg-gray-200 dark:hidden"
            >
              <img src={Darkmode} alt="" />
            </button>
            <button
              onClick={themeChanger}
              className="hidden p-1 px-2 duration-500 ease-in-out rounded-lg hover:bg-gray-700 dark:block"
            >
              <img src={Lightmode} alt="" />
            </button>
            <button className="bg-gray-900 rounded-xl text-gray-50 py-[6px] px-4 dark:bg-gray-50 dark:text-gray-900  hover:scale-105 duration-500">
              Download CV
            </button>
          </div>
        </div>

        <button className="md:hidden" onClick={handlerClick}>
          <img
            src={Icon}
            alt="Menu icon"
            className="p-1 duration-500 rounded-md hover:bg-gray-200"
          />
        </button>
      </div>
    </div>
  );
};
