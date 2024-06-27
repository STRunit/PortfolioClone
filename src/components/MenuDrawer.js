import Exit from "../assets/quit.svg";
import Lightmode from "../assets/lightmode.svg";
import Darkmode from "../assets/darkmode.svg";
import { themeChanger } from "./sections/Navbar";
import { NavMenu } from "../constants";

export const MenuDrawer = ({ handlerClick }) => {
  return (
    <div className="absolute top-0 right-0 z-20 w-screen h-[96vh] drop-shadow-lg backdrop-blur-lg">
      <div className="absolute top-0 right-0 z-30 flex flex-col w-3/4 h-[96vh] gap-6 px-5 py-4 bg-gray-50 dark:bg-gray-950 dark:text-gray-50 ">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-semibold">{"<SS />"}</div>
          <button className="p-1 duration-500 rounded-md hover:bg-gray-200">
            <img src={Exit} alt="" onClick={handlerClick} className="" />
          </button>
        </div>
        <span className="w-full border-b border-gray-200"></span>
        <div className="flex flex-col items-start justify-between h-1/4">
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
        </div>
        <span className="w-full border-b border-gray-200"></span>
        <div className="flex justify-between">
          <p>Switch Theme</p>
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
        </div>
        <button className="bg-gray-900 rounded-xl text-gray-50 py-[6px] dark:bg-gray-50 dark:text-gray-900  hover:scale-105 duration-500">
          Download CV
        </button>
      </div>
    </div>
  );
};
