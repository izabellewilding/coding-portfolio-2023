import React from "react";
import Image from "next/image";
import { ScrollButton } from "./Buttons";
import { outfit } from "../app/fonts";
import DownArrow from "../assets/down-arrow2-svgrepo-com.svg";
import Link from "next/link";

const LandingPage = React.forwardRef((props, ref) => {
  return (
    <main
      {...props}
      ref={ref as any}
      className="w-full h-screen items-center justify-center px-5 md:px-12 lg:px-10 bg-white sm:py"
      style={{ position: "sticky", top: "0" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen items-center justify-center  bg-white py-4 sm:py">
        <div className="flex flex-col gap-3 h-full pt-20">
          <h1
            style={{ color: "#1c0c65", fontWeight: 300 }}
            className={`mb-2 uppercase leading-none md:mb-3 landing-title font-extralight ${outfit.className}`}
          >
            Izabelle Wilding
          </h1>
          <h1
            className={`mb-3 relative text-xl sm:text-xl md:mb-3 ml-3 text-indigo-950 ${outfit.className}`}
          >
            Software Engineer - UI/UX Specialist
          </h1>
          <p
            className={`mb-3 relative text-md  md:mb-3 ml-3 font-extralight text-indigo-950 ${outfit.className}`}
          >
            Hello, I'm Izabelle, a dedicated Software Engineer with a passion
            for frontend development. My expertise lies in crafting component
            libraries, optimizing user experiences, and implementing performance
            and accessibility enhancements. Explore below to discover a curated
            collection of my personal projects.
          </p>
        </div>
        <Link
          href="https://usgs-earthquake-dashboard.netlify.app/"
          // className="landing-image"
          target="_blank"
          className="relative pt-20"
          style={{ marginRight: "-190px" }}
        >
          <Image
            alt="Image of a mobile phone screen"
            src={"/assets/device-mock-desktop.png"}
            height={300}
            width={950}
          />
        </Link>
      </div>
      <ScrollButton
        linkto="projects"
        content={
          <div className="flex absolute justify-center bottom-6 left-0 right-0 ">
            <DownArrow />
          </div>
        }
      />
    </main>
  );
});

export default LandingPage;
