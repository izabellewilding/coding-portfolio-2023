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
      className="w-full h-screen items-center justify-center px-5 md:px-12 lg:px-10 bg-white sm:py md:pt-4"
      style={{ position: "sticky", top: "0" }}
    >
      <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-1 gap-3 md:grid-cols-2 w-full items-center justify-center  bg-white py-4 sm:py md:h-screen">
        <div className="flex flex-col gap-3 h-full pt-16 md:pt-32 row-span-2 md:row-span-1 text-center md:text-left sm:max-w-screen-sm sm:m-auto">
          <div>
            <h1
              className={`mb-2 uppercase leading-none md:mb-3 landing-title font-extralight text-zinc-500 font-medium ${outfit.className}`}
            >
              Izabelle Wilding
            </h1>
            <h1
              className={`mb-3 relative text-xl sm:text-xl md:mb-3 text-indigo-950 ${outfit.className}`}
            >
              Software Engineer - UI/UX Specialist.
            </h1>
          </div>
          <p
            className={`mb-3 relative text-md md:mb-3 font-extralight text-indigo-950 ${outfit.className}`}
          >
            Hello, I&apos;m Izabelle, a Software Engineer with a passion for
            frontend development. My expertise lies in crafting component
            libraries, optimizing user experiences, and implementing performance
            and accessibility enhancements. Explore below to discover a curated
            collection of my personal projects.
          </p>
        </div>
        <Link
          href="https://usgs-earthquake-dashboard.netlify.app/"
          // className="landing-image"
          target="_blank"
          className="relative md:pt-20 h-full md:h-1/2"
          // style={{ marginRight: "-190px" }}
        >
          <Image
            alt="Image of a mobile phone screen"
            src={"/assets/device-mock-desktop.png"}
            sizes="500px"
            priority={true}
            fill
            style={{
              objectFit: "contain",
            }}
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
