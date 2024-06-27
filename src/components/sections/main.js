import ProfilePic from "../../assets/profile.jpg";
import Location from "../../assets/location.svg";
import { SocialLinks } from "../SocialLinks";
// import { Profile } from "../Profile";
// import { mainStyle } from "../../constants";

export const MainSection = () => {
  return (
    <div
      className="flex flex-col gap-6 px-4 py-16 min-h-fit dark:bg-gray-950"
      id="Main"
    >
      <div className="max-w-[1260px] mx-auto flex flex-col gap-6 justify-center items-center md:gap-12 md:flex-row md:justify-around px-6">
        <div className="flex justify-center relative w-[240px] h-[280px] md:order-last items-center">
          <img src={ProfilePic} className="z-10 w-full h-full " alt="Profile" />
          <div className="absolute w-[280px] h-[280px] bg-gray-200 top-6 md:left-5 md:w-[260px] md:h-[300px] dark:bg-gray-600 dark:border-transparent"></div>

          {/* <Profile styles={mainStyle} imageSrc={ProfilePic} /> */}
        </div>
        <div className="flex flex-col gap-2 mt-[48px] md:w-7/12 dark:text-gray-50">
          <h1 className="text-4xl font-bold">Hi, I’m Sagar 👋</h1>
          <p className="text-gray-600 dark:text-gray-200">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>

          <div className="flex gap-2 text-gray-600 mt-[48px] dark:text-gray-50">
            <img src={Location} alt="Location icon" />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-50">
            <div className="m-2 rounded-full size-2 bg-emerald-500"></div>
            <p>Available for new projects</p>
          </div>
          <div className="flex gap-3 mt-[48px]">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};
