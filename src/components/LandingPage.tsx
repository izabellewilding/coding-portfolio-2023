import React from "react";
import Image from "next/image";
import { ScrollButton } from "./Buttons";
import { outfit } from "../app/fonts";
import DownArrow from "../assets/down-arrow2-svgrepo-com.svg";

const LandingPage = React.forwardRef((props, ref) => {
  return (
    <main
      {...props}
      ref={ref as any}
      className="grid grid-cols-1 md:grid-cols-2 w-full h-screen items-center justify-center px-5 md:px-8 lg:px-10 bg-white"
      style={{ position: "sticky", top: "0" }}
    >
      <div className="flex flex-col gap-3 h-full justify-center">
        <h1
          style={{ color: "#1c0c65", fontWeight: 300 }}
          className={`mb-2 uppercase leading-none md:mb-3 landing-title font-extralight ${outfit.className}`}
        >
          Izabelle Wilding
        </h1>
        <h1
          className={`mb-3 relative text-xl sm:text-2xl md:mb-3 ml-3 text-indigo-950 ${outfit.className}`}
        >
          Software Engineer - UI/UX Specialist
        </h1>
        <p
          className={`mb-3 relative text-xl sm:text-md  md:mb-3 ml-3 font-extralight text-indigo-950 ${outfit.className}`}
        >
          Hi, I'm Izabelle, a Software Engineer with a passion for all things
          frontend. I specialise in component library development and UX
          optimisation, and have a keen interest in delivering performance and
          accessibility enhancements. Scroll to take a look at a selection of my
          personal projects.
        </p>
      </div>
      <div className="flex relative align-middle items-center h-full justify-center">
        <Image
          alt="Image of a mobile phone screen"
          src={"/assets/device-mock-desktop.png"}
          height={400}
          width={700}
        />
      </div>
      {/* <ScrollButton
        linkto="projects"
        content={
          <div className="flex absolute justify-center mt-8 md:mt-12 bottom-10 left-0 right-0 ">
            <DownArrow />
          </div>
        }
      /> */}
    </main>
  );
});

export default LandingPage;
