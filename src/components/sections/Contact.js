import Message from "../../assets/message.svg";
import Phone from "../../assets/phone.svg";
import Copy from "../../assets/copy.svg";
import Copyright from "../../assets/copyright.svg";
import { Tag } from "../Tag";
import { SocialLinks } from "../SocialLinks";

export const Contact = () => {
  return (
    <div
      className="flex flex-col items-center gap-6 px-4 py-16 min-h-fit bg-gray-50 dark:bg-gray-900"
      id="Contact"
    >
      <Tag label="Get in touch" />
      <p className="max-w-xl text-lg text-center text-gray-600 dark:text-gray-200">
        What’s next? Feel free to reach out to me if you are looking for a
        developer, have a query, or simply want to connect.
      </p>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-3">
            <button>
              <img src={Message} alt="Message" />
            </button>
            <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900 dark:text-gray-50">
              reachsagarshah@gmail.com
            </h2>
            <button>
              <img src={Copy} alt="Copy" />
            </button>
          </div>
          <div className="flex gap-3">
            <button>
              <img src={Phone} alt="Phone" />
            </button>
            <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900 dark:text-gray-50">
              +918980500565
            </h2>
            <button>
              <img src={Copy} alt="Copy" />
            </button>
          </div>
        </div>
        <div>
          <p className="text-center text-gray-600 dark:text-gray-200">
            You may also find me on these platforms!
          </p>
          <div className="flex justify-center gap-3 mt-3">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-1 py-6 text-sm text-gray-600 dark:bg-gray-950 dark:text-gray-200 max-sm:flex-col">
      <img src={Copyright} alt="Copyright" />
      <p>2024</p>
      <p></p>
      <p> Struggled & learned some with ❤️ by</p>
      <a
        target="blank"
        href="https://github.com/STRunit"
        className="underline duration-500 underline-offset-4 hover:text-gray-500 hover:-translate-y-1"
      >
        Shijirbaatar Bold
      </a>
    </div>
  );
};
