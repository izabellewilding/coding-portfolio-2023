import React from "react";
import Link from "next/link";
import Logo from "../assets/text-logo2.svg";
import GitHub from "../assets/github-darkRed.svg";
import LinkedIn from "../assets/linkedin-darkRed.svg";
import Twitter from "../assets/twitter.svg";
import Medium from "../assets/medium.svg";

const Header = ({}: any) => {
  return (
    <header
      // {...props}
      className="nav-active shadow z-40 bg-white p-2"
    >
      {/* <Link href="/" className="flex-shrink-0 cursor-pointer">
        <Logo className="h-12 nav-logo svg-darkPrimary shadow-lg" />
      </Link> */}
      {/* <ul className="text-sm uppercase invisible md:visible quicksand flex items-center text-center mr-10 w-full text-zinc-700">
        <li
          role="link"
          onClick={() => onNav("projects")}
          className="hover:text-lightPrimary cursor-pointer"
        >
          <p className=" av-list-item hover-textLight custom-underline mr-6 p-1 quicksand">
            Projects
          </p>
        </li>
        <li
          onClick={() => onNav("contact")}
          className="hover:text-lightPrimary cursor-pointer"
        >
          <p className="nav-list-item hover-textLight custom-underline mr-6 p-1 quicksand">
            Contact
          </p>
        </li>
      </ul> */}

      <div className="flex flex-row w-full justify-end ">
        <a
          href="https://github.com/izabellewilding"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <GitHub className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/izabelle-wilding-b68a73130/"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <LinkedIn className="social-icon" />
        </a>
        <a
          href="https://twitter.com/izzwizz_"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-900 font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          title="Twitter"
        >
          <Twitter className="social-icon" />
        </a>
        <a
          href="https://medium.com/@izabellewilding"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-900 font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          title="Medium"
        >
          <Medium className="social-icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
